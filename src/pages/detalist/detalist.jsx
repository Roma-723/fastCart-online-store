import React, { useState } from "react"
import img53 from "../../images/img53.png"
import img54 from "../../images/img54.png"
import img55 from "../../images/img55.png"
import img56 from "../../images/img56.png"
import img57 from "../../images/img57.png"
import img58 from "../../images/img58.png"
import img59 from "../../images/img59.png"

const Detalist = () => {
  const [size, setSize] = useState("M")
  const [count, setCount] = useState(2)

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="flex lg:flex-col gap-4 justify-center">
          {[img53, img55, img56, img57].map((img, i) => (
            <img
              key={i}
              src={img}
              alt=""
              className="w-24 h-24 object-cover border rounded cursor-pointer
                 hover:border-[#DB4444]"
            />
          ))}
        </div>

        <div className="flex justify-center">
          <img src={img54} alt="" className="max-w-full" />
        </div>

        <div className="space-y-5">

          <h2 className="text-2xl font-semibold">
            Havic HV G-92 Gamepad
          </h2>

          <div className="flex items-center gap-3 text-sm">
            <span className="text-[#FFAD33]">⭐⭐⭐⭐⭐</span>
            <span className="text-gray-500">(150 Reviews)</span>
            <span className="text-[#00B517]">In Stock</span>
          </div>

          <p className="text-2xl font-semibold">$192.00</p>

          <p className="text-gray-600 leading-relaxed">
            PlayStation 5 Controller Skin High quality vinyl with air
            channel adhesive for easy bubble free install & mess free removal.
          </p>

          <div className="flex items-center gap-4">
            <span className="font-medium">Colours:</span>
            <span className="w-4 h-4 rounded-full bg-[#A0BCE0] cursor-pointer"></span>
            <span className="w-4 h-4 rounded-full bg-[#E07575] cursor-pointer"></span>
          </div>

          <div className="flex items-center gap-3 flex-wrap">
            <span className="font-medium">Size:</span>
            {["XS", "S", "M", "L", "XL"].map(s => (
              <button
                key={s}
                onClick={() => setSize(s)}
                className={`px-3 py-1 rounded border 
                  ${size === s
                    ? "bg-[#DB4444] text-white border-[#DB4444]"
                    : "border-gray-300"}`}
              >
                {s}
              </button>
            ))}
          </div>

          {/* Quantity + Buy */}
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex border rounded overflow-hidden">
              <button
                onClick={() => setCount(count > 1 ? count - 1 : 1)}
                className="px-4 py-2 bg-[#DB4444] text-white"
              >
                -
              </button>
              <span className="px-6 py-2 border-x">{count}</span>
              <button
                onClick={() => setCount(count + 1)}
                className="px-4 py-2 bg-[#DB4444] text-white"
              >
                +
              </button>
            </div>

            <button className="bg-[#DB4444] text-white px-10 py-2 rounded hover:bg-[#c93b3b]">
              Buy Now
            </button>
          </div>

          {/* Delivery */}
          <div className="space-y-4 pt-6 border-t">
            <div className="flex gap-4">
              <img src={img59} alt="" />
              <div>
                <p className="font-medium">Free Delivery</p>
                <p className="text-sm text-gray-500">
                  Enter your postal code for Delivery Availability
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <img src={img58} alt="" />
              <div>
                <p className="font-medium">Return Delivery</p>
                <p className="text-sm text-gray-500">
                  Free 30 Days Delivery Returns
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Detalist
