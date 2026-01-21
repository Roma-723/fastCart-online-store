import React, { useEffect, useState } from "react"

import img7 from "../../images/img7.png"
import img40 from "../../images/img40.png"
import img31 from "../../images/img31.png"
import img32 from "../../images/img32.png"
import img33 from "../../images/img33.png"
import img34 from "../../images/img34.png"
import img35 from "../../images/img35.png"
import img36 from "../../images/img36.png"
import img41 from "../../images/img41.png"
import img42 from "../../images/img42.png"
import img43 from "../../images/img43.png"
import img44 from "../../images/img44.png"
import img45 from "../../images/img45.png"
import img46 from "../../images/img46.png"
import img48 from "../../images/img48.png"
import img49 from "../../images/img49.png"
import img50 from "../../images/img50.png"
import img51 from "../../images/img51.png"
import img52 from "../../images/img52.png"
import img17 from "../../images/img17.png"
import img18 from "../../images/img18.png"
import img19 from "../../images/img19.png"
import { Link, useNavigate } from "react-router-dom"
import Rating from '@mui/material/Rating';



const Home = () => {
  const navigate = useNavigate()
  const targetDate = new Date("2026-01-30T00:00:00")

  const getTimeLeft = () => {
    const diff = targetDate - new Date()
    if (diff <= 0) return { d: 0, h: 0, m: 0, s: 0 }

    return {
      d: Math.floor(diff / (1000 * 60 * 60 * 24)),
      h: Math.floor((diff / (1000 * 60 * 60)) % 24),
      m: Math.floor((diff / (1000 * 60)) % 60),
      s: Math.floor((diff / 1000) % 60),
    }
  }

  const [t, setT] = useState(getTimeLeft())

  useEffect(() => {
    const i = setInterval(() => setT(getTimeLeft()), 1000)
    return () => clearInterval(i)
  }, [])

  const products = [
    { img: img31, name: "Breed Dry Dog Food", price: "$100", stars: 5, count: "(35)" },
    { img: img32, name: "CANON EOS DSLR Camera", price: "$360", stars: 4, count: "(95)" },
    { img: img33, name: "ASUS FHD Gaming Laptop", price: "$700", stars: 5, count: "(325)" },
  ]

  const allProducts = [
    ...products,
    { img: img34, name: "Kids Electric Car", price: "$960", stars: 5, count: "(65)" },
    { img: img35, name: "Breed Dry Dog Food", price: "$1160", stars: 5, count: "(35)" },
    { img: img36, name: "Curology Product Set", price: "$660", stars: 5, count: "(55)" },
  ]

  const categories = [
    { id: 1, img: img41, name: "Phones" },
    { id: 2, img: img42, name: "Computers" },
    { id: 3, img: img43, name: "SmartWatch" },
    { id: 4, img: img44, name: "Camera" },
    { id: 5, img: img45, name: "HeadPhones" },
    { id: 6, img: img46, name: "Gaming" },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">

 {open && (
        <div className="absolute mt-2 w-40 bg-white border rounded shadow">
          <a href="#" className="block px-4 py-2 hover:bg-gray-100">
            Profile
          </a>
          <a href="#" className="block px-4 py-2 hover:bg-gray-100">
            Settings
          </a>
          <a href="#" className="block px-4 py-2 hover:bg-gray-100">
            Logout
          </a>
        </div>
      )}
      



      <div className="flex flex-col lg:flex-row gap-8 items-center">
        <div className="hidden lg:block w-1/4 space-y-2">
          {[
            "Woman’s Fashion", "Men’s Fashion", "Electronics",
            "Home & Lifestyle", "Medicine", "Sports & Outdoor",
            "Baby’s & Toys", "Groceries & Pets", "Health & Beauty",
          ].map((item) => (
            <p key={item} className="font-medium cursor-pointer hover:text-[#DB4444]">
              {item}
            </p>
          ))}
        </div>






        <div className="w-full lg:w-3/4">
          <img src={img7} className="hidden lg:block w-full rounded-lg" />
          <img src={img40} className="lg:hidden w-full rounded-lg" />
        </div>
      </div>

      <div className="mt-12 flex flex-col sm:flex-row gap-6 items-start sm:items-center">
        <h2 className="text-2xl sm:text-3xl font-bold">Flash Sales</h2>

        <div className="bg-white shadow rounded-lg px-4 py-3 flex gap-4">
          <TimeBox label="Days" value={t.d} />
          <Dots />
          <TimeBox label="Hours" value={t.h} />
          <Dots />
          <TimeBox label="Min" value={t.m} />
          <Dots />
          <TimeBox label="Sec" value={t.s} />
        </div>
      </div>

      <ProductGrid data={products} />

      <h2 className="text-2xl sm:text-3xl font-bold mt-16 mb-8">
        Browse By Category
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {categories.map((c) => (
          <div
            key={c.id}
            className="border rounded-lg p-6 flex flex-col items-center gap-3
              hover:bg-[#DB4444] transition group"
          >
            <img src={c.img} className="w-10 h-10" />
            <p className="text-sm text-gray-700 group-hover:text-white">
              {c.name}
            </p>
          </div>
        ))}
      </div>

      <div className="bg-black rounded-xl mt-20 p-6 lg:p-12">
        <div className="flex flex-col lg:flex-row items-center gap-10">

          <div className="text-center lg:text-left">
            <p className="text-[#008F38] font-bold">Categories</p>

            <h3 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold mt-4">
              Enhance Your <br className="hidden lg:block" />
              Music Experience
            </h3>

            <div className="flex justify-center lg:justify-start gap-4 mt-8 flex-wrap">
              {[
                { v: "23", t: "Hours" },
                { v: "05", t: "Days" },
                { v: "59", t: "Min" },
                { v: "35", t: "Sec" },
              ].map((e, i) => (
                <div key={i} className="bg-white w-20 h-20 rounded-full flex flex-col items-center justify-center">
                  <p className="font-bold">{e.v}</p>
                  <p className="text-sm">{e.t}</p>
                </div>
              ))}
            </div>

            <button className="bg-[#00FF66] w-40 h-14 rounded-xl mt-8 text-lg">
              Buy Now!
            </button>
          </div>

          <img src={img48} className="w-64 sm:w-80 lg:w-[400px]" />
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-20 mb-8">Explore Our Products</h2>
      <ProductGrid data={allProducts} />
      <Link to="/products">
        <button onClick={() => navigate("/products")} className="mx-auto mt-10 flex items-center justify-center
        w-60 h-14 text-lg sm:text-xl font-semibold
        text-white bg-[#DB4444] rounded hover:bg-[#c53a3a] transition">
          View All Products
        </button>
      </Link>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-20 mb-20 text-center">
        {[
          { img: img19, title: "FREE AND FAST DELIVERY" },
          { img: img18, title: "24/7 CUSTOMER SERVICE" },
          { img: img17, title: "MONEY BACK GUARANTEE" },
        ].map((e, i) => (
          <div key={i}>
            <img src={e.img} className="mx-auto mb-4" />
            <p className="text-xl font-bold">{e.title}</p>
            <p className="text-gray-600 mt-2">
              Free delivery for all orders over $140
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}


const ProductGrid = ({ data }) => (
  <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
    {data.map((e, i) => (
      <div key={i} className="bg-white rounded-lg p-4 hover:shadow transition">
        <div className="relative group bg-gray-100 rounded-md overflow-hidden">
          <img src={e.img} className="w-full h-40 object-contain" />
          <Link to={"/checkout"}>
            <button className="absolute bottom-0 w-full bg-black text-white py-2
            translate-y-full group-hover:translate-y-0 transition hover:bg-[#DB4444]">
              Add To Cart
            </button>
          </Link>
        </div>

        <h3 className="mt-3 text-sm font-medium">{e.name}</h3>
        <p className="text-[#DB4444] font-semibold">{e.price}</p>
        <div className="text-sm text-[#FFAD33]">
          <Rating name="size-small" defaultValue={2} size="small" />
          <span className="text-gray-400 ml-1">{e.count}</span>
        </div>
      </div>
    ))}
  </section>
)

const TimeBox = ({ label, value }) => (
  <div className="text-center">
    <p className="text-xs text-gray-500">{label}</p>
    <p className="text-xl sm:text-2xl font-bold">
      {String(value).padStart(2, "0")}
    </p>
  </div>
)

const Dots = () => (
  <div className="flex flex-col justify-center gap-1">
    <span className="w-1 h-1 bg-[#DB4444] rounded-full"></span>
    <span className="w-1 h-1 bg-[#DB4444] rounded-full"></span>
  </div>
)

export default Home
