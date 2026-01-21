import React from "react";
import TextField from "@mui/material/TextField";
import { Input } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const Login = () => {


  const navigate = useNavigate()
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-md text-center">

        <p className="text-2xl font-semibold mt-5">
          Log in to Exclusive
        </p>

        <p className="mt-3 mb-8 text-gray-500 text-sm">
          Enter your details below
        </p>

        <div className="mb-6">
          <TextField
            fullWidth
            label="Email or phone number"
            size="small"
          />
        </div>

        <div className="mb-4">
          <Input.Password
            size="large"
            placeholder="Password"
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
          />
        </div>

        <p className="text-center text-red-500 text-sm mt-6 cursor-pointer">
          Forget Password?
        </p>

        <button className="w-full rounded-md h-11 bg-red-500 mt-6 text-white hover:bg-red-600 transition">
          Log In
        </button>

      </div>
    </div>
  );
};

export default Login;
