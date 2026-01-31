import React, { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { getProductById } from "../../api/products/products"
import { API_IMAGE } from "../../utils/url"
import { postProduct } from "../../api/cartApi/cartApi"

const Detalist = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const { one } = useSelector((s) => s.products)

  useEffect(() => {
    dispatch(getProductById(id))
  }, [id])

  if (!one) return null

  const finalPrice = one.hasDiscount ? one.price - one.discountPrice : one.price

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <img
          src={`${API_IMAGE}/${one.images?.[0]?.images}`}
          className="w-full h-[420px] object-cover rounded-2xl"
        />
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">{one.productName}</h1>
          <p className="text-gray-500">{one.description}</p>
          <div className="flex gap-3 text-sm flex-wrap">
            <span className="px-3 py-1 bg-gray-100 rounded">Brand: {one.brand}</span>
            <span className="px-3 py-1 bg-gray-100 rounded">Color: {one.color}</span>
            <span className="px-3 py-1 bg-gray-100 rounded">Size: {one.size}</span>
            <span className="px-3 py-1 bg-gray-100 rounded">Weight: {one.weight}</span>
          </div>
          <div className="flex items-end gap-4">
            <span className="text-3xl font-bold text-red-500">
              ${finalPrice}
            </span>
            {one.hasDiscount && (
              <span className="line-through text-gray-400">
                ${one.price}
              </span>
            )}
          </div>
          <button
            onClick={() => dispatch(postProduct(one.id))}
            className="mt-6 bg-red-500 text-white px-8 py-3 rounded-xl"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default Detalist
