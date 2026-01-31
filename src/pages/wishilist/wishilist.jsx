import React, { useEffect, useState } from "react"
import Rating from "@mui/material/Rating"
import { API_IMAGE } from "../../utils/url"

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([])

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("wishlist")) || []
    setWishlist(saved)
  }, [])

  const removeItem = (id) => {
    const updated = wishlist.filter((i) => i.id !== id)
    setWishlist(updated)
    localStorage.setItem("wishlist", JSON.stringify(updated))
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-4xl font-extrabold mb-12">My Wishlist</h2>

      {wishlist.length === 0 ? (
        <p className="text-gray-500 text-lg">Wishlist is empty</p>
      ) : ( 
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {wishlist.map((e) => (
            <div key={e.id} className="bg-white rounded-3xl p-6 shadow-xl">
              <div className="relative bg-gray-100 rounded-2xl overflow-hidden">
                <button
                  onClick={() => removeItem(e.id)}
                  className="absolute top-3 right-3 w-10 h-10 rounded-full bg-white shadow flex items-center justify-center text-red-500"
                >
                  ✕
                </button>
                <img
                  src={`${API_IMAGE}/${e.image}`}
                  className="w-full h-44 object-contain p-6"
                />
              </div>

              <h3 className="mt-4 font-semibold text-lg">{e.productName}</h3>
              <div className="flex items-center gap-3 mt-2">
                <span className="text-[#DB4444] font-bold">
                  ${e.hasDiscount ? e.discountPrice : e.price}
                </span>
                <Rating value={5} readOnly size="small" />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Wishlist
