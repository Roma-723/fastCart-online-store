import React from 'react'
import { useNavigate } from 'react-router-dom'

const Account = () => {
  const navigate=useNavigate()
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">

      <p className="text-sm text-gray-500 mb-6">
        Home / <span className="text-black">My Account</span>
      </p>

      <div className="flex flex-col lg:flex-row gap-8">

        <div className="w-full lg:w-64 bg-gray-100 p-6 rounded">
          <div className="mb-6">
            <h3 className="font-semibold mb-3">Manage My Account</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-[#DB4444] font-medium">My Profile</li>
              <li className="text-gray-500 cursor-pointer">Address Book</li>
              <li className="text-gray-500 cursor-pointer">My Payment Options</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold mb-3">My Orders</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li className="cursor-pointer">My Returns</li>
              <li className="cursor-pointer">My Cancellations</li>
            </ul>
          </div>

          <h3 className="font-semibold text-gray-500 cursor-pointer">
            My WishList
          </h3>
        </div>

        <div className="flex-1 bg-white shadow rounded p-6">

          <h2 className="text-[#DB4444] text-xl font-semibold mb-6">
            Profile
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <input
              type="text"
              placeholder="First name"
              className="border px-4 py-2 rounded outline-none focus:border-[#DB4444]"/>
            <input
              type="text"
              placeholder="Last name"
              className="border px-4 py-2 rounded outline-none focus:border-[#DB4444]"/>
            <input
              type="email"
              placeholder="Email address"
              className="border px-4 py-2 rounded outline-none focus:border-[#DB4444]"/>
            <input
              type="text"
              placeholder="Street address"
              className="border px-4 py-2 rounded outline-none focus:border-[#DB4444]"/>
          </div>

          <h3 className="mt-8 mb-4 font-semibold">
            Password Changes
          </h3>

          <div className="space-y-4">
            <input
              type="password"
              placeholder="Current password"
              className="border px-4 py-2 rounded w-full outline-none focus:border-[#DB4444]"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <input
                type="password"
                placeholder="New password"
                className="border px-4 py-2 rounded outline-none focus:border-[#DB4444]"
              />
              <input
                type="password"
                placeholder="Confirm new password"
                className="border px-4 py-2 rounded outline-none focus:border-[#DB4444]"
              />
            </div>
          </div>

          <div className="flex justify-end items-center gap-6 mt-8">
            <button className="text-gray-600 hover:text-black">
              Cancel
            </button>
            <button  className="bg-[#DB4444] text-white px-6 py-2 rounded hover:opacity-90">
              Save Changes
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Account
