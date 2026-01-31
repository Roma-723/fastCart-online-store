// Login.jsx
import React from "react"
import TextField from "@mui/material/TextField"
import { Input, message } from "antd"
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { loginUser } from "../../../api/authApi/authApi"

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  async function submitLogin(e) {
    e.preventDefault()
    const res = await dispatch(
      loginUser({
        userName: e.target.userName.value,
        password: e.target.password.value,
      })
    )

    if (res.payload.statusCode === 200) {
      message.success("Successfully logged in")
      navigate("/")
    } else {
      message.error("Login error")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-md text-center">
        <p className="text-2xl font-semibold mt-5">Log in to Exclusive</p>
        <p className="mt-3 mb-8 text-gray-500 text-sm">
          Enter your details below
        </p>

        <form onSubmit={submitLogin}>
          <div className="mb-6">
            <TextField
              fullWidth
              label="Email or phone number"
              size="small"
              name="userName"
            />
          </div>

          <div className="mb-4">
            <Input.Password
              size="large"
              placeholder="Password"
              name="password"
              iconRender={(v) => (v ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-md h-11 bg-red-500 mt-6 text-white hover:bg-red-600 transition"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
