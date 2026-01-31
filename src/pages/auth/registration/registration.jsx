import React, { useEffect, useState } from "react"
import google from "../../../images/google.png"
import { Link, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { registerUser } from "../../../api/authApi/authApi"

const Registration = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { statusRegistration } = useSelector((store) => store.auth)
  const [message, setMessage] = useState(null)

console.log(statusRegistration)
  function submitRegister(e) {
    e.preventDefault()
    const newUser = {
      userName: e.target.userName.value,
      phoneNumber: e.target.phoneNumber.value,
      email: e.target.email.value,
      password: e.target.password.value,
      confirmPassword: e.target.confirmPassword.value,
    }
    dispatch(registerUser(newUser))
    e.target.reset()
    if (statusRegistration == true) {
      setMessage({ type: "success", text: "Шумо бомуваффақият сабт шудед" })
      setTimeout(() => navigate("/login"), 1000)
    }
    if (statusRegistration == false) {
      setMessage({ type: "error", text: "Хатогӣ рух дод, боз кӯшиш кунед" })
    }
  }

  useEffect(() => {
    
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-sm text-center">
        {message && (
          <div
            className={`mb-4 rounded px-4 py-2 text-sm ${
              message.type === "success"
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {message.text}
          </div>
        )}

        <h1 className="text-2xl font-semibold text-gray-900">
          Create an account
        </h1>
        <p className="text-sm text-gray-400 mt-1">
          Enter your details below
        </p>

        <form onSubmit={submitRegister} className="mt-6 space-y-4">
          <input
            type="text"
            name="userName"
            placeholder="Name"
            className="w-full border border-gray-200 rounded px-3 py-2 text-sm"
          />
          <input
            type="text"
            name="phoneNumber"
            placeholder="Phone number"
            className="w-full border border-gray-200 rounded px-3 py-2 text-sm"
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            className="w-full border border-gray-200 rounded px-3 py-2 text-sm"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full border border-gray-200 rounded px-3 py-2 text-sm"
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm password"
            className="w-full border border-gray-200 rounded px-3 py-2 text-sm"
          />

          <button className="w-full mt-6 bg-red-500 hover:bg-red-600 text-white py-2 rounded text-sm font-medium">
            Create Account
          </button>
        </form>

        <Link to="/login">
          <button className="w-full mt-3 flex items-center justify-center gap-2 border border-gray-200 py-2 rounded text-sm text-gray-700">
            <img src={google} alt="google" className="w-4 h-4" />
            Sign up with Google
          </button>
        </Link>

        <p className="text-xs text-gray-400 mt-6">
          Already have account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-red-500 cursor-pointer"
          >
            Log in
          </span>
        </p>
      </div>
    </div>
  )
}

export default Registration
