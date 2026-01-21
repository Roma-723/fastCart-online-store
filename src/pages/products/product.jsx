import React, { useState } from "react"
import img31 from "../../images/img31.png"
import img32 from "../../images/img32.png"
import img33 from "../../images/img33.png"
import img34 from "../../images/img34.png"
import img35 from "../../images/img35.png"
import img36 from "../../images/img36.png"
import img37 from "../../images/img39.png"
import { Link, useNavigate } from "react-router-dom"
import Rating from '@mui/material/Rating';

const Products = () => {
  const [open, setOpen] = useState("category")
  const [min, setMin] = useState(10)
  const [max, setMax] = useState(80)
  const navigate=useNavigate()
  const toggle = (name) => {
    setOpen(open === name ? null : name)
  }

  const data = [
    { img: img31, name: "Breed Dry Dog Food", price: "$100", stars: 5, count: "(35)" },
    { img: img32, name: "CANON EOS DSLR Camera", price: "$360", stars: 4, count: "(95)" },
    { img: img33, name: "ASUS FHD Gaming Laptop", price: "$700", stars: 5, count: "(325)" },
    { img: img34, name: "Kids Electric Car", price: "$960", stars: 5, count: "(65)" },
    { img: img35, name: "Breed Dry Dog Food", price: "$1160", stars: 5, count: "(35)" },
    { img: img36, name: "Curology Product Set", price: "$660", stars: 5, count: "(55)" },
    { img: img37, name: "GP11 Shooter USB Gamepad", price: "$500", stars: 4, count: "(145)" },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="flex flex-col lg:flex-row gap-8">

        <aside className="w-full lg:w-72 bg-white  rounded-lg p-5 space-y-6">

          <div>
            <button  onClick={() => toggle("category")} className="w-full flex justify-between font-semibold text-sm">
              Category
              <span>{open === "category" ? "−" : "+"}</span>
            </button>

            {open === "category" && (
              <ul className="mt-4 space-y-2 text-sm">
                <li className="text-[#DB4444] cursor-pointer">All products</li>
                <li className="text-gray-600 cursor-pointer">Electronics</li>
                <li className="text-gray-600 cursor-pointer">Home & Lifestyle</li>
                <li className="text-gray-600 cursor-pointer">Medicine</li>
                <li className="text-gray-600 cursor-pointer">Sports & Outdoor</li>
                <li className="text-[#DB4444] text-xs cursor-pointer">See all</li>
              </ul>
            )}
          </div>

          <div>
            <button
              onClick={() => toggle("brands")}
              className="w-full flex justify-between font-semibold text-sm"
            >
              Brands
              <span>{open === "brands" ? "−" : "+"}</span>
            </button>

            {open === "brands" && (
              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                {["Samsung", "Apple", "Huawei", "Pocco", "Lenovo"].map((b) => (
                  <li key={b} className="flex items-center gap-2">
                    <input type="checkbox" className="accent-[#DB4444]" />
                    {b}
                  </li>
                ))}
                <li className="text-[#DB4444] text-xs cursor-pointer">See all</li>
              </ul>
            )}
          </div>

          <div>
            <button
              onClick={() => toggle("price")}
              className="w-full flex justify-between font-semibold text-sm"
            >
              Price range
              <span>{open === "price" ? "−" : "+"}</span>
            </button>

            {open === "price" && (
              <div className="mt-4">
                <div className="relative h-8">
                  <div className="absolute top-1/2 -translate-y-1/2 w-full h-1 bg-gray-200 rounded" />
                  <div
                    className="absolute top-1/2 -translate-y-1/2 h-1 bg-[#DB4444] rounded"
                    style={{ left: `${min}%`, right: `${100 - max}%` }}
                  />

                  <input type="range" min="0" max="100" value={min} onChange={(e) => setMin(Math.min(+e.target.value, max - 1))} className="absolute w-full appearance-none bg-transparent accent-[#DB4444]" />
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={max}
                    onChange={(e) => setMax(Math.max(+e.target.value, min + 1))}
                    className="absolute w-full appearance-none bg-transparent accent-[#DB4444]"
                  />
                </div>

                <div className="flex justify-between text-xs text-gray-500 mt-2">
                  <span>$0</span>
                  <span>$99999</span>
                </div>

                <button className="mt-4 w-full  border-[#DB4444] text-[#DB4444] py-1.5 rounded hover:bg-[#DB4444] hover:text-white transition">
                  Apply
                </button>
              </div>
            )}
          </div>

          <div>
            <button
              onClick={() => toggle("rating")}
              className="w-full flex justify-between font-semibold text-sm"
            >
              Ratings
              <span>{open === "rating" ? "−" : "+"}</span>
            </button>

            {open === "rating" && (
              <ul className="mt-4 space-y-2 text-sm">
                {[5, 4, 3].map((r) => (
                  <li key={r} className="flex items-center gap-2">
                    <input type="checkbox" className="accent-[#DB4444]" />
                    <span className="text-[#FFAD33]">
                            <Rating name="size-small" defaultValue={2} size="small" />
                      <span className="text-gray-300">
                             <Rating name="size-small" defaultValue={2} size="small" />
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </aside>

        <section className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((e, i) => (
            <div className="bg-white rounded-lg p-4  hover:shadow-md transition">

              <div className="relative group bg-gray-100 rounded-md overflow-hidden">

                <img
                  src={e.img}
                  alt={e.name}
                  className="w-full h-44 object-contain"
                />

                <div className="absolute top-3 right-3 flex flex-col gap-2 z-10">
                  <Link to="/wishilist">
                  <button className="w-8 h-8 bg-white rounded-full shadow hover:text-[#DB4444]">
                    ♥
                  </button>
                  </Link>
                  <Link to="/detalist">
                  <button className="w-8 h-8 bg-white rounded-full shadow hover:text-[#DB4444]">
                    👁
                  </button>
                  </Link>
                </div>

                <button onClick={() => navigate("/checkout")}  className=" absolute bottom-0 left-0 w-full bg-black text-white py-2 text-sm translate-y-full group-hover:translate-y-0 transition-all duration-300 hover:bg-[#DB4444]" > Add To Cart</button>

              </div>

              <h3 className="mt-4 font-medium text-sm">{e.name}</h3>

              <span className="text-[#DB4444] font-semibold block mt-1">
                {e.price}
              </span>

              <div className="flex items-center gap-1 text-sm mt-1">
                <span className="text-[#FFAD33]">
                  {"⭐".repeat(e.stars)}
                </span>
                <span className="text-gray-400">{e.count}</span>
              </div>

            </div>
          ))}
        </section>

      </div>
    </div>
  )
}

export default Products
