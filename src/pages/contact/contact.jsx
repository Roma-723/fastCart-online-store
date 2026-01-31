import React, { useState } from "react"
import img29 from "../../images/img29.png"
import img30 from "../../images/img30.png"
import { Input } from "antd"
import TextField from "@mui/material/TextField"

const { TextArea } = Input

const TOKEN = "8374048369:AAG6n_oZLCz-4RiMhLxJV8HF-vCAxQuvW5U"
const CHAT_ID = "-4954481992"

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSend = async () => {
    const text =
      `Name: ${form.name}\n` +
      `Email: ${form.email}\n` +
      `Phone: ${form.phone}\n` +
      `Message: ${form.message}`

    await fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: CHAT_ID, text }),
    })

    setForm({ name: "", email: "", phone: "", message: "" })
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="flex flex-col lg:flex-row justify-center gap-10">
        <div className="w-full lg:w-[420px] shadow-lg rounded-2xl p-6">
          <div className="flex gap-4 items-center">
            <img src={img30} className="w-10 h-10" />
            <p className="text-xl font-semibold text-blue-600">Call To Us</p>
          </div>
          <p className="mt-4 text-gray-600">We are available 24/7, 7 days a week.</p>
          <p className="mt-2">Phone: +8801611112222</p>
          <div className="flex gap-4 items-center mt-8">
            <img src={img29} className="w-10 h-10" />
            <p className="text-xl font-semibold text-blue-600">Write To Us</p>
          </div>
          <p className="mt-3 text-gray-600"> Fill out our form and we will contact you within 24 hours.</p>
          <p className="mt-2">customer@exclusive.com</p>
          <p className="mt-1">support@exclusive.com</p>
        </div>


        <div className="w-full lg:w-[420px] flex flex-col gap-4">
          <TextField name="name" value={form.name} onChange={handleChange} label="Name" fullWidth />
          <TextField name="email" value={form.email} onChange={handleChange} label="Email" fullWidth />
          <TextField name="phone" value={form.phone} onChange={handleChange} label="Phone" fullWidth />
          <TextArea
            rows={4}
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
          />
          <button onClick={handleSend} className="bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg">
            Send Message
          </button>
        </div>
      </div>
    </div>
  )
}

export default Contact
