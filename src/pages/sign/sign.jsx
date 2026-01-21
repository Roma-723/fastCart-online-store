import React from 'react'
import google from "../../images/google.png"
import { Link, useNavigate } from 'react-router-dom'

const Sign = () => {
  const navigate = useNavigate()
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-sm text-center">

        <h1 className="text-2xl font-semibold text-gray-900">
          Create an account
        </h1>
        <p className="text-sm text-gray-400 mt-1">
          Enter your details below
        </p>

        <div className="mt-6 space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full border border-gray-200 rounded px-3 py-2 text-sm focus:outline-none focus:border-gray-400"
          />
          <input
            type="text"
            placeholder="Email or phone number"
            className="w-full border border-gray-200 rounded px-3 py-2 text-sm focus:outline-none focus:border-gray-400"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border border-gray-200 rounded px-3 py-2 text-sm focus:outline-none focus:border-gray-400"
          />
        </div>
   
          <button className="w-full mt-6 bg-red-500 hover:bg-red-600 text-white py-2 rounded text-sm font-medium transition">
            Create Account
          </button>
        <Link to="/login">
        <button className="w-full mt-3 flex items-center justify-center gap-2 border border-gray-200 py-2 rounded text-sm text-gray-700 hover:bg-gray-50 transition">
          <img src={google} alt="google" className="w-4 h-4" />
          Sign up with Google
        </button>
        </Link>

        <p className="text-xs text-gray-400 mt-6">
          Already have account?{" "}
          <span className="text-red-500 cursor-pointer hover:underline">
            Log in
          </span>
        </p>

      </div>
    </div>
  )
}

export default Sign
