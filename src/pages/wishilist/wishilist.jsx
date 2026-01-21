import React from "react"
import img24 from "../../images/img24.png"
import img25 from "../../images/img25.png"
import img26 from "../../images/img26.png"
import img27 from "../../images/img27.png"
import {  useNavigate } from "react-router-dom"

const Wishlist = () => {

  const navigate=useNavigate()
  const wishlist = [
    { img: img24, name: "Gucci duffle bag", price: "$960", old: "$1160", sale: "-35%" },
    { img: img25, name: "RGB liquid CPU Cooler", price: "$1960" },
    { img: img26, name: "GP11 Shooter USB Gamepad", price: "$550" },
    { img: img27, name: "Quilted Satin Jacket", price: "$750" },
  ]

  const justForYou = [
    { img: img24, name: "ASUS FHD Gaming Laptop", price: "$960", old: "$1160", sale: "-35%" },
    { img: img25, name: "IPS LCD Gaming Monitor", price: "$1160", rating: true },
    { img: img26, name: "HAVIT HV-G92 Gamepad", price: "$560", tag: "NEW", rating: true },
    { img: img27, name: "AK-900 Wired Keyboard", price: "$200", rating: true },
  ]

  const Card = ({ item }) => (
    <div className="group shadow rounded-lg overflow-hidden bg-white">
      <div className="relative  h-64 flex items-center justify-center">
        <img src={item.img} alt="" className="w-40" />

        {item.sale && (
          <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded">
            {item.sale}
          </span>
        )}
        {item.tag && (
          <span className="absolute top-3 left-3 bg-green-500 text-white text-xs px-2 py-1 rounded">
            {item.tag}
          </span>
        )}

        <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          </svg>

        </button>

        <button
          className="
            absolute bottom-0 left-0 w-full
            bg-black text-white py-3
            opacity-0 translate-y-full
            group-hover:opacity-100
            group-hover:translate-y-0
            transition-all duration-300
            flex items-center justify-center gap-2
          "
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
          </svg>

          Add to Cart
        </button>
      </div>

      <div className="p-4">
        <p className="font-medium text-sm">{item.name}</p>

        <div className="flex gap-3 items-center mt-2">
          <p className="text-red-500 font-semibold">{item.price}</p>
          {item.old && (
            <p className="text-gray-400 line-through text-sm">{item.old}</p>
          )}
        </div>

        {item.rating && (
          <div className="flex items-center gap-1 mt-2">
            <span className="text-yellow-400">★★★★★</span>
            <span className="text-gray-500 text-sm">(65)</span>
          </div>
        )}
      </div>
    </div>
  )

  return (
    <div className="max-w-7xl mx-auto px-4 space-y-16">

      <div>
        <div className="flex justify-between items-center mb-6">
          <p className="text-2xl font-semibold">Wishlist ({wishlist.length})</p>
          <button className="border px-5 py-2 rounded">
            Move All To Bag
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {wishlist.map((item, i) => (
            <Card key={i} item={item} />
          ))}
        </div>
      </div>

      <div>
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2">
            <span className="w-3 h-6 bg-red-500 rounded"></span>
            <p className="text-2xl font-semibold">Just For You</p>
          </div>
          <button  className="border px-5 py-2 rounded">
            See All
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {justForYou.map((item, i) => (
            <Card key={i} item={item} />
          ))}
        </div>
      </div>

    </div>
  )
}

export default Wishlist
