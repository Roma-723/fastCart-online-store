import React from 'react'
import img29 from "../../images/img29.png"
import img30 from "../../images/img30.png"
import { Input } from 'antd'
import TextField from '@mui/material/TextField'
import { useNavigate } from 'react-router-dom'

const { TextArea } = Input

const Contact = () => {

  const navigate=useNavigate()
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="flex flex-col lg:flex-row justify-center gap-10">

        <div className="w-full lg:w-[420px] shadow-lg rounded-2xl p-6">
          <div className="flex gap-4 items-center">
            <img src={img30} alt="" className="w-10 h-10" />
            <p className="text-xl font-semibold text-blue-600">
              Call To Us
            </p>
          </div>

          <p className="mt-4 text-gray-600">
            We are available 24/7, 7 days a week.
          </p>
          <p className="mt-2">
            Phone: +8801611112222
          </p>

          <div className="flex gap-4 items-center mt-8">
            <img src={img29} alt="" className="w-10 h-10" />
            <p className="text-xl font-semibold text-blue-600">
              Write To Us
            </p>
          </div>

          <p className="mt-3 text-gray-600">
            Fill out our form and we will contact you within 24 hours.
          </p>
          <p className="mt-2">customer@exclusive.com</p>
          <p className="mt-1">support@exclusive.com</p>
        </div>

        <div className="w-full lg:w-[420px] flex flex-col gap-4">

          <TextField
            label="Name"
            fullWidth
            color="primary"
          />

          <TextField
            label="Email"
            fullWidth
            color="primary"
          />

          <TextField
            label="Phone"
            fullWidth
            color="primary"
          />

          <TextArea
            rows={4}
            placeholder="Your Message"
            className="border-blue-500 focus:border-blue-600"
          />

          <button  className="bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg transition">
            Send Message
          </button>
        </div>

      </div>
    </div>
  )
}

export default Contact
