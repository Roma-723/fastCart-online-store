// Products.jsx
import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { getProducts } from "../../api/products/products"
import { API_IMAGE } from "../../utils/url"
import Rating from "@mui/material/Rating"
import { AiOutlineHeart, AiFillHeart, AiOutlineEye } from "react-icons/ai"
import { getUserCategory } from "../../api/categoryApi/categoryApi"
import { getUserBrand } from "../../api/brandApi/brandApi"
import { postProduct } from "../../api/cartApi/cartApi"
import { message } from "antd"

const Products = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { data } = useSelector((s) => s.products)
  const { categoryData } = useSelector((s) => s.category)
  const { brandData } = useSelector((s) => s.brand)

  const defaultParams = {
    productName: null,
    minPrice: 0,
    maxPrice: 1500,
    brandId: null,
    colorId: null,
    categoryId: null,
    subCategoryId: null,
    pageNumber: 1,
    pageSize: null,
  }

  const [params, setParams] = useState(defaultParams)
  const [wishlist, setWishlist] = useState(
    JSON.parse(localStorage.getItem("wishlist")) || []
  )

  const toggleWishlist = (product) => {
    const updated = wishlist.some((i) => i.id === product.id)
      ? wishlist.filter((i) => i.id !== product.id)
      : [...wishlist, product]
    setWishlist(updated)
    localStorage.setItem("wishlist", JSON.stringify(updated))
  }

  const isInWishlist = (id) => wishlist.some((i) => i.id === id)

  const addToCart = async (id) => {
    try {
      await dispatch(postProduct(id)).unwrap()
      message.open({
        key: "cart",
        type: "success",
        content: "Added to cart",
        duration: 2,
      })
    } catch {
      message.open({
        key: "cart",
        type: "warning",
        content: "Product already exists in cart",
        duration: 2,
      })
    }
  }

  useEffect(() => {
    dispatch(getProducts(params))
  }, [params, dispatch])

  useEffect(() => {
    dispatch(getUserCategory())
    dispatch(getUserBrand())
  }, [dispatch])

  return (
    <div className="max-w-7xl mx-auto px-4 py-14">
      <div className="grid lg:grid-cols-[300px_1fr] gap-10">
        <aside className="bg-white rounded-3xl shadow-sm p-6 space-y-8">
          <div>
            <h3 className="font-semibold text-lg mb-4">Categories</h3>
            <div
              onClick={() => setParams(defaultParams)}
              className={`px-3 py-2 rounded-xl cursor-pointer ${
                params.categoryId === null
                  ? "bg-red-50 text-[#DB4444]"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              All Categories
            </div>
            <ul className="mt-2 space-y-1">
              {categoryData?.map((e) => (
                <li
                  key={e.id}
                  onClick={() =>
                    setParams((p) => ({
                      ...p,
                      categoryId: e.id,
                      pageNumber: 1,
                    }))
                  }
                  className={`px-3 py-2 rounded-xl cursor-pointer ${
                    params.categoryId === e.id
                      ? "bg-red-50 text-[#DB4444]"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  {e.categoryName}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Brands</h3>
            <ul className="space-y-1">
              {brandData?.map((e) => (
                <li
                  key={e.id}
                  onClick={() =>
                    setParams((p) => ({
                      ...p,
                      brandId: e.id,
                      pageNumber: 1,
                    }))
                  }
                  className={`px-3 py-2 rounded-xl cursor-pointer ${
                    params.brandId === e.id
                      ? "bg-red-50 text-[#DB4444]"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  {e.brandName}
                </li>
              ))}
            </ul>
          </div>
        </aside>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {data?.map((e) => (
            <div
              key={e.id}
              className="group bg-white rounded-3xl shadow-sm hover:shadow-lg transition overflow-hidden"
            >
              <div className="relative bg-gray-100 h-64 flex items-center justify-center">
                <div className="absolute top-4 right-4 flex flex-col gap-3 z-10">
                  <button
                    onClick={() => toggleWishlist(e)}
                    className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center"
                  >
                    {isInWishlist(e.id) ? (
                      <AiFillHeart className="text-[#DB4444] text-xl" />
                    ) : (
                      <AiOutlineHeart className="text-gray-700 text-xl" />
                    )}
                  </button>

                  <button
                    onClick={() => navigate(`/detalist/${e.id}`)}
                    className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center"
                  >
                    <AiOutlineEye className="text-gray-700 text-xl" />
                  </button>
                </div>

                <img
                  src={`${API_IMAGE}/${e.image}`}
                  className="h-44 object-contain"
                />

                <button
                  onClick={() => addToCart(e.id)}
                  className="absolute bottom-0 left-0 w-full bg-[#DB4444] text-white py-3 opacity-0 group-hover:opacity-100 translate-y-full group-hover:translate-y-0 transition"
                >
                  Add To Cart
                </button>
              </div>

              <div className="p-5 space-y-2">
                <h3 className="font-semibold line-clamp-1">
                  {e.productName}
                </h3>
                <Rating value={e.rating || 4} size="small" readOnly />
                <div className="text-lg font-bold text-[#DB4444]">
                  ${e.hasDiscount ? e.discountPrice : e.price}
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  )
}

export default Products
