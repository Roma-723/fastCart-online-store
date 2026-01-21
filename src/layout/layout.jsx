import React, { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

import img1 from "../images/img1.png";
import img2 from "../images/img2.png";
import img3 from "../images/img3.png";
import img4 from "../images/img4.png";
import img5 from "../images/img5.png";
import img6 from "../images/img6.png";

const Layout = () => {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [search, setSearch] = useState("");

  const links = [
    { to: "/", label: "Home" },
    { to: "/contact", label: "Contact" },
    { to: "/about", label: "About" },
    { to: "singup", label: "Sign Up" },
  ];


  const linkClass = ({ isActive }) =>
    `transition-all duration-300 ${isActive ? "text-red-500 font-semibold" : "text-gray-700"
    } hover:text-red-500`;

  return (
    <div className="min-h-screen  flex flex-col">
      <div className="">
        <div className="max-w-7xl mx-auto  px-4 py-4 w-full">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-6">
              <NavLink to="/">
                <img src={img1} alt="logo" className="h-10" />
              </NavLink>

              <div className="hidden md:flex gap-6">
                {links.map((l) => (
                  <NavLink key={l.to} to={l.to} className={linkClass}>
                    {l.label}
                  </NavLink>
                ))}
              </div>
            </div>

            <div className="hidden md:flex w-80 h-12 items-center bg-[#F5F5F5] rounded px-3">
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-transparent outline-none"
                placeholder="What are you looking for?"
                type="text"
              />
              <img src={img2} alt="search" className="w-6 h-6" />
            </div>

            <div className="hidden md:flex gap-5">
              <Link to="/wishilist">
                <img src={img3} alt="wishlist" className="cursor-pointer hover:scale-110 duration-300" />
              </Link>

              <img onClick={() => setOpen1(!open1)} src={img4} alt="cart" className="cursor-pointer hover:scale-110 duration-300" />

              <img src={img5} alt="user" className="cursor-pointer hover:scale-110 duration-300" />
            </div>

            <button onClick={() => setOpen(true)} className="md:hidden text-3xl">
              ☰
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/50 flex justify-end"
          onClick={() => setOpen(false)}
        >
          <div
            className="w-64 bg-white h-full p-6 flex flex-col gap-6"
            onClick={(e) => e.stopPropagation()}>
            <button className="self-end text-2xl" onClick={() => setOpen(false)}>
              ✕
            </button>

            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className={linkClass}
              >
                {l.label}
              </NavLink>
            ))}
            <div className="mt-4 flex items-center bg-[#F5F5F5] rounded px-2 h-11">
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-transparent outline-none pl-2"
                placeholder="Search..."
                type="text"
              />
              <img src={img2} alt="search" className="w-5 h-5" />
            </div>
            <div className="flex gap-4 mt-4">
              <img src={img3} alt="wishlist" />
              <img src={img4} alt="cart" />
              <img src={img5} alt="user" />
            </div>
          </div>
        </div>
      )}

      <div className="flex-1 max-w-7xl mx-auto px-4 w-full">
        <Outlet />
      </div>
      <footer className="bg-black text-white px-5 py-12 w-full">
        <div className="max-w-7xl mx-auto grid grid-cols-1 gap-10 sm:grid-cols-2   md:grid-cols-5">

          <div>
            <h3 className="text-base font-semibold mb-3">Exclusive</h3>

            <p className="text-sm text-gray-400 mb-4 leading-5">
              Subscribe <br />
              Get 10% off your first order
            </p>

            <div className="flex items-center border border-gray-600 rounded-md overflow-hidden">
              <input type="email"  placeholder="Enter your email" className="bg-transparent px-4 py-2 w-full text-sm   text-white placeholder-gray-500 outline-none"/>
              <button className="px-4 text-gray-400 hover:text-white transition">  ➤ </button>
            </div>
          </div>

          <div>
            <h3 className="text-base font-semibold mb-3">Support</h3>
            <p className="text-sm text-gray-400 leading-6">
              111 Bijoy sarani, Dhaka, Bangladesh
            </p>
            <p className="text-sm text-gray-400 mt-1">
              exclusive@gmail.com
            </p>
            <p className="text-sm text-gray-400 mt-1">
              +88015-88888-9999
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold mb-3">Account</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="hover:text-white cursor-pointer">My Account</li>
              <li className="hover:text-white cursor-pointer">Cart</li>
              <li className="hover:text-white cursor-pointer">Wishlist</li>
              <li className="hover:text-white cursor-pointer">Shop</li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold mb-3">Quick Link</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="hover:text-white cursor-pointer">Privacy Policy</li>
              <li className="hover:text-white cursor-pointer">Terms Of Use</li>
              <li className="hover:text-white cursor-pointer">FAQ</li>
              <li className="hover:text-white cursor-pointer">Contact</li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold mb-3">Social</h3>
            <div className="flex gap-4 text-gray-400 text-lg">
              <span className="hover:text-white cursor-pointer">f</span>
              <span className="hover:text-white cursor-pointer">𝕏</span>
              <span className="hover:text-white cursor-pointer">◎</span>
              <span className="hover:text-white cursor-pointer">in</span>
            </div>
          </div>

        </div>

        <div className="mt-12 text-center text-xs text-gray-500">
          © Copyright Rimel 2022. All right reserved
        </div>
      </footer>

    </div>
  );
};

export default Layout;
