import React from 'react'
import TextField from '@mui/material/TextField'
import img20 from "../../images/img20.png"
import img21 from "../../images/img21.png"
import img22 from "../../images/img22.png"
import { useNavigate } from 'react-router-dom'

const CheckOut = () => {
  const navigate=useNavigate()
  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex flex-col lg:flex-row gap-16 mt-10 mb-20">

        <div className="flex-1">
          <p className="text-4xl mb-4">Billing Details</p>

          <div className="max-w-md p-6 rounded-2xl shadow space-y-4">
            <TextField fullWidth label="First name" />
            <TextField fullWidth label="Last name" />
            <TextField fullWidth label="Company name" />
            <TextField fullWidth label="Apartment, floor, etc. (optional)" />
            <TextField fullWidth label="Town / City" />
            <TextField fullWidth label="Phone number" />
            <TextField fullWidth label="Email address" />

            <label className="flex items-center gap-3 mt-4 cursor-pointer">
              <input type="checkbox" className="w-4 h-4 accent-red-600" />
              <span className="text-sm">
                Save this information for faster check-out next time
              </span>
            </label>
          </div>
        </div>

        <div className="flex-1 max-w-md">
          <div className="flex justify-between items-center mt-20">
            <div className="flex gap-5 items-center">
              <img src={img20} alt="LCD Monitor" />
              <p>LCD Monitor</p>
            </div>
            <p className="text-xl">$650</p>
          </div>

          <div className="flex justify-between items-center mt-10">
            <div className="flex gap-5 items-center">
              <img src={img21} alt="Gamepad" />
              <p>H1 Gamepad</p>
            </div>
            <p className="text-xl">$1100</p>
          </div>

          <div className="flex justify-between mt-10 text-xl">
            <p>Subtotal:</p>
            <p>$1750</p>
          </div>

          <div className="flex justify-between mt-6 text-xl">
            <p>Shipping:</p>
            <p>Free</p>
          </div>

          <hr className="my-6" />

          <label className="flex justify-between items-center cursor-pointer">
            <div className="flex gap-3 items-center">
              <input
                type="radio"
                name="payment"
                className="w-5 h-5 accent-red-600"
              />
              <p>Bank</p>
            </div>
            <img src={img22} alt="Bank" />
          </label>

          <label className="flex gap-3 items-center mt-6 cursor-pointer">
            <input
              type="radio"
              name="payment"
              className="w-5 h-5 accent-red-600"
            />
            <p>Cash on delivery</p>
          </label>

          <div className="flex gap-4 mt-10">
            <TextField fullWidth label="Coupon Code" />
            <button onClick={()=> navigate("/cart")} className="border-2 border-[#E26969] px-6 rounded-md text-[#E26969]">
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckOut
