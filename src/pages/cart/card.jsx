  import React, { useEffect } from "react"
  import { useNavigate } from "react-router-dom"
  import { useDispatch, useSelector } from "react-redux"
  import {
    deleteCart,
    deleteCartAll,
    getCart,
    editIncreaseCart,
    editReduceCart,
  } from "../../api/cartApi/cartApi"
  import { API_IMAGE } from "../../utils/url"
  import { Trash2, Minus, Plus } from "lucide-react"

  const Card = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { dataCart } = useSelector((state) => state.cart)

    useEffect(() => {
      dispatch(getCart())
    }, [])

    const cart = dataCart?.at(0)
    const total = (cart?.totalPrice || 0) - (cart?.totalDiscountPrice || 0)

    return (
      <div className="max-w-7xl mx-auto px-4 py-12">
        <p className="text-sm text-gray-400 mb-8">Home / Cart</p>

        <div className="space-y-6">
          {cart?.productsInCart?.map((e) => (
            <div
              key={e.id}
              className="grid grid-cols-[100px_1fr_auto_auto] items-center gap-6 bg-white p-6 rounded-3xl shadow"
            >
              <img
                src={`${API_IMAGE}/${e.product.image}`}
                alt=""
                className="w-24 h-24 object-cover rounded-2xl bg-gray-100"
              />

              <div>
                <h2 className="text-lg font-semibold">
                  {e.product.productName}
                </h2>
                <p className="text-sm text-gray-400">
                  Color: <span className="text-gray-700">{e.product.color}</span>
                </p>
                <p className="text-xl font-bold text-red-500">
                  ${e.product.price}
                </p>
              </div>

              <div className="flex items-center gap-3 bg-gray-100 rounded-full px-4 py-2">
                <button
                  onClick={() => dispatch(editReduceCart(e))}
                  className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-200"
                >
                  <Minus size={16} />
                </button>

                <span className="font-semibold">{e.quantity}</span>

                <button
                  onClick={() => dispatch(editIncreaseCart(e))}
                  className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-200"
                >
                  <Plus size={16} />
                </button>
              </div>

              <button
                onClick={() => dispatch(deleteCart(e.id))}
                className="w-10 h-10 flex items-center justify-center rounded-full text-red-500 hover:bg-red-500 hover:text-white"
              >
                <Trash2 size={20} />
              </button>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mt-12">
          <button
            onClick={() => navigate("/")}
            className="px-8 py-3 rounded-full border"
          > 
            Return To Shop
          </button>

          <div className="flex gap-4">
            <button className="px-8 py-3 rounded-full border">
              Update Cart
            </button>
            <button
              onClick={() => dispatch(deleteCartAll())}
              className="px-8 py-3 rounded-full border border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
            >
              Remove All
            </button>
          </div>
        </div>

        <div className="mt-12">
          <div className="max-w-md border border-black rounded-md p-6">
            <h2 className="text-xl font-semibold mb-4">Cart Total</h2>

            <div className="flex justify-between mb-2">
              <span>Subtotal:</span>
              <span>${cart?.totalPrice}</span>
            </div>

            <div className="flex justify-between mb-2">
              <span>Discount:</span>
              <span>-${cart?.totalDiscountPrice}</span>
            </div>

            <div className="flex justify-between mb-4">
              <span>Shipping:</span>
              <span>Free</span>
            </div>

            <hr className="mb-4" />

            <div className="flex justify-between text-lg font-semibold mb-6">
              <span>Total:</span>
              <span>${total}</span>
            </div>

            <button onClick={()=> navigate("/checkout")} className="w-full bg-red-500 text-white py-3 rounded-md">
              Procces to checkout
            </button>
          </div>
        </div>
      </div>
    )
  }

  export default Card
