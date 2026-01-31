import React, { useEffect, useState } from "react"
import { Link, NavLink, Outlet } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { getCart } from "../api/cartApi/cartApi"
import img1 from "../images/img1.png"
import img2 from "../images/img2.png"
import img3 from "../images/img3.png"
import img4 from "../images/img4.png"
import img5 from "../images/img5.png"
import { Dropdown, Space, message } from "antd"
import { DownOutlined, SettingOutlined } from "@ant-design/icons"

const Layout = () => {
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false)
  const [search, setSearch] = useState("")
  const [wishlistCount, setWishlistCount] = useState(0)

  const { dataCart } = useSelector((state) => state.cart)
  const cartCount = dataCart?.[0]?.productsInCart?.length || 0

  useEffect(() => {
    dispatch(getCart())
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || []
    setWishlistCount(wishlist.length)

    const token = localStorage.getItem("token")
    const shown = sessionStorage.getItem("login_message_shown")

    if (token && !shown) {
      message.success({
        content: "Successfully logged in",
        duration: 2,
      })
      sessionStorage.setItem("login_message_shown", "1")
    }
  }, [dispatch])

  const links = localStorage.getItem("token")
    ? [
        { to: "/", label: "Home" },
        { to: "/contact", label: "Contact" },
        { to: "/about", label: "About" },
      ]
    : [
        { to: "/", label: "Home" },
        { to: "/contact", label: "Contact" },
        { to: "/about", label: "About" },
        { to: "/singup", label: "Sign Up" },
      ]

  const linkClass = ({ isActive }) =>
    `relative transition-all duration-300 ${
      isActive
        ? "text-red-500 font-semibold after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-red-500"
        : "text-gray-700"
    } hover:text-red-500`

  const items = [
    { key: "1", label: <Link to="/orders">My order</Link> },
    { key: "2", label: <Link to="/wishlist">Wishlist</Link> },
    {
      key: "3",
      label: "Logout",
      icon: <SettingOutlined />,
      onClick: () => {
        localStorage.removeItem("token")
        sessionStorage.removeItem("login_message_shown")
        window.location = "/"
      },
    },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <NavLink to="/">
              <img src={img1} className="h-10" />
            </NavLink>
            <div className="hidden md:flex gap-8">
              {links.map((l) => (
                <NavLink key={l.to} to={l.to} className={linkClass}>
                  {l.label}
                </NavLink>
              ))}
            </div>
          </div>

          <div className="hidden md:flex w-96 h-11 items-center bg-gray-100 rounded-full px-4 gap-2">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-transparent outline-none text-sm"
              placeholder="What are you looking for?"
            />
            <img src={img2} className="w-5 h-5 opacity-60" />
          </div>

          <div className="hidden md:flex gap-6 items-center">
            <Link to="/wishlist" className="relative hover:scale-110 transition">
              <img src={img3} />
              {wishlistCount > 0 && (
                <span className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </Link>

            <Link to="/cart" className="relative hover:scale-110 transition">
              <img src={img5} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>

            <Dropdown menu={{ items }} placement="bottomRight">
              <a onClick={(e) => e.preventDefault()}>
                <Space className="cursor-pointer hover:opacity-80">
                  <img src={img4} />
                  <DownOutlined className="text-xs" />
                </Space>
              </a>
            </Dropdown>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden text-3xl">
            ☰
          </button>
        </div>
      </header>

      <main className="flex-1 pt-24 max-w-7xl mx-auto px-4 w-full">
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
