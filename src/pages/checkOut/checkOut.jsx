import React, { useEffect, useState } from "react"
import TextField from "@mui/material/TextField"
import { useDispatch, useSelector } from "react-redux"
import { deleteCartAll, getCart } from "../../api/cartApi/cartApi"
import { API_IMAGE } from "../../utils/url"

const TOKEN = "8374048369:AAG6n_oZLCz-4RiMhLxJV8HF-vCAxQuvW5U"
const CHAT_ID = "-4954481992"

const CheckOut = () => {
  const dispatch = useDispatch()
  const { dataCart } = useSelector((s) => s.cart)
  const cart = dataCart?.at(0)

  useEffect(() => {
    dispatch(getCart())
  }, [])

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    company: "",
    address: "",
    city: "",
    phone: "",
    email: "",
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const clearForm = () => {
    setForm({
      firstName: "",
      lastName: "",
      company: "",
      address: "",
      city: "",
      phone: "",
      email: "",
    })
  }

  const handleSend = async () => {
    const text =
      `First name: ${form.firstName}\n` +
      `Last name: ${form.lastName}\n` +
      `Company: ${form.company}\n` +
      `Address: ${form.address}\n` +
      `City: ${form.city}\n` +
      `Phone: ${form.phone}\n` +
      `Email: ${form.email}`

    await fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: CHAT_ID, text }),
    })

    clearForm()
  }

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex flex-col lg:flex-row gap-16 mt-10 mb-20">
        <div className="flex-1">
          <p className="text-4xl mb-4">Billing Details</p>

          <div className="max-w-md p-6 rounded-2xl shadow space-y-4">
            <TextField name="firstName" value={form.firstName}  onChange={handleChange} sx={{ mt: 2 }} fullWidth  label="First name" />
            <TextField name="lastName" value={form.lastName} onChange={handleChange} sx={{ mt: 2 }} fullWidth label="Last name" />
            <TextField name="company" value={form.company} onChange={handleChange} sx={{ mt: 2 }} fullWidth label="Company name" />
            <TextField name="address" value={form.address} onChange={handleChange} sx={{ mt: 2 }} fullWidth label="Apartment, floor, etc." />
            <TextField name="city" value={form.city} onChange={handleChange} sx={{ mt: 2 }} fullWidth label="Town / City" />
            <TextField name="phone" value={form.phone} onChange={handleChange} sx={{ mt: 2 }} fullWidth label="Phone number" />
            <TextField name="email" value={form.email} onChange={handleChange} sx={{ mt: 2 }} fullWidth label="Email address" />
            <button onClick={handleSend} className="w-full bg-red-500 text-white py-2 rounded mt-4">
              Save information
            </button>
          </div>
        </div>

        <div>
          <div className="bg-white rounded-2xl shadow p-6 space-y-5 w-[420px]">
            {cart?.productsInCart?.map((e) => (
              <div key={e.id} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img src={`${API_IMAGE}/${e.product.image}`} className="w-10 h-10 rounded-lg object-cover" />
                  <span className="text-sm">{e.product.productName}</span>
                </div>
                <span className="text-sm font-medium">${e.product.price}</span>
              </div>
            ))}

            <div className="border-t pt-4 space-y-2 text-sm">
              <div className="flex justify-between text-gray-500">
                <span>Subtotal</span>
                <span>${cart?.totalPrice}</span>
              </div>
              <div className="flex justify-between text-gray-500">
                <span>Shipping</span>
                <span>Free</span>
              </div>
            </div>

            <div className="flex justify-between items-center bg-gray-100 rounded-xl px-4 py-3">
              <span className="text-lg font-semibold">Total</span>
              <span className="text-2xl font-bold text-red-500">
                ${cart?.totalPrice - cart?.totalDiscountPrice}
              </span>
            </div>

            <button
              onClick={() => {
                dispatch(deleteCartAll())
                clearForm()
              }}
              className="w-full bg-red-500 text-white py-3 rounded mt-2"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckOut
