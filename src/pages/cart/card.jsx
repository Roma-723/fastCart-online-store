import React from "react"
import img21 from "../../images/img21.png"
import img22 from "../../images/img20.png"
import { useNavigate } from "react-router-dom"

const Card = () => {
  const navigate=useNavigate()
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">

      <p className="text-sm text-gray-500 mb-6">
        Home <span className="mx-1">/</span> Cart
      </p>

      <div className="hidden md:block">
        <div className="grid grid-cols-4 text-gray-500 mb-4">
          <p>Product</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Subtotal</p>
        </div>

        <div className="grid grid-cols-4 items-center bg-white shadow rounded-lg p-4 mb-4">
          <div className="flex items-center gap-4">
            <img src={img21} alt="" className="w-16" />
            <p>LCD Monitor</p>
          </div>
          <p>$650</p>
          <select className="border rounded px-2 py-1 w-16">
            <option>01</option>
            <option>02</option>
          </select>
          <div className="flex items-center justify-between">
            <p className="font-semibold">$650</p>
            <button className="text-red-500 text-xl">✖</button>
          </div>
        </div>

        <div className="grid grid-cols-4 items-center bg-white shadow rounded-lg p-4">
          <div className="flex items-center gap-4">
            <img src={img22} alt="" className="w-16" />
            <p>H1 Gamepad</p>
          </div>
          <p>$550</p>
          <select className="border rounded px-2 py-1 w-16">
            <option>02</option>
            <option>01</option>
          </select>
          <div className="flex items-center justify-between">
            <p className="font-semibold">$1100</p>
            <button className="text-red-500 text-xl">✖</button>
          </div>
        </div>
      </div>

      <div className="md:hidden space-y-4">
        {[
          {
            img: img21,
            name: "LCD Monitor",
            price: "$650",
            total: "$650",
            qty: "01",
          },
          {
            img: img22,
            name: "H1 Gamepad",
            price: "$550",
            total: "$1100",
            qty: "02",
          },
        ].map((item, i) => (
          <div key={i} className="bg-white shadow rounded-lg p-4">
            <div className="flex items-center gap-4">
              <img src={item.img} alt="" className="w-16" />
              <div className="flex-1">
                <p className="font-medium">{item.name}</p>
                <p className="text-gray-500 text-sm">{item.price}</p>
              </div>
              <select className="border rounded px-2 py-1">
                <option>{item.qty}</option>
                <option>01</option>
                <option>02</option>
              </select>
            </div>

            <div className="flex justify-between items-center mt-3">
              <p className="font-semibold">{item.total}</p>
              <button className="text-red-500 text-lg">✖</button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap justify-between gap-4 mt-10">
        <button className="border px-6 py-3 rounded">
          Return To Shop
        </button>

        <div className="flex gap-4">
          <button className="border px-6 py-3 rounded">
            Update Cart
          </button>
          <button className="border border-red-500 text-red-500 px-6 py-3 rounded">
            Remove all
          </button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-between gap-10 mt-14">

        <div className="flex gap-4">
          <input type="text"placeholder="Coupon Code"className="border px-4 py-3 rounded w-60 h-10" />
          <button className="border border-red-500 text-red-500 px-6 rounded h-10">Apply
          </button>
        </div>

        <div className="border rounded-lg p-6 w-full max-w-sm">
          <p className="font-semibold mb-4">Cart Total</p>

          <div className="flex justify-between mb-2"><p>Subtotal:</p><p>$1750</p>
          </div>

          <div className="flex justify-between mb-4"><p>Shipping:</p>
          <p>Free</p>
          </div>

          <hr className="mb-4" />

          <div className="flex justify-between font-semibold mb-6">
            <p>Total:</p>
          <p>$1750</p>
          </div>

          <button  className="w-full bg-red-500 text-white py-3 rounded">Proceed to checkout
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card
