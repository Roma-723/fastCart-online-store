import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Rating from "@mui/material/Rating"
import { useDispatch, useSelector } from "react-redux"
import { getProducts } from "../../api/products/products"
import { getUserCategory } from "../../api/categoryApi/categoryApi"
import { API_IMAGE } from "../../utils/url"
import { AiOutlineHeart, AiFillHeart, AiOutlineEye } from "react-icons/ai"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules"

import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import "swiper/css/effect-fade"



import img48 from "../../images/img48.png"
import img17 from "../../images/img17.png"
import img18 from "../../images/img18.png"
import img19 from "../../images/img19.png"
import { postProduct } from "../../api/cartApi/cartApi"

const slides = [
  "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=3840",
  "https://images.unsplash.com/photo-1517059224940-d4af9eec41b7?q=80&w=3840",
  "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=3840",
]

const Home = () => {
  const [wishlist, setWishlist] = useState(
    JSON.parse(localStorage.getItem("wishlist")) || []
  )
  const toggleWishlist = (product) => {
    let updated
    if (wishlist.find((i) => i.id === product.id)) {
      updated = wishlist.filter((i) => i.id !== product.id)
    } else {
      updated = [...wishlist, product]
    }
    setWishlist(updated)
    localStorage.setItem("wishlist", JSON.stringify(updated))
  }

  const isInWishlist = (id) => wishlist.some((i) => i.id === id)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const targetDate = new Date("2027-01-30T00:00:00")
  const getTimeLeft = () => {
    const diff = targetDate - new Date()
    if (diff <= 0) return { d: 0, h: 0, m: 0, s: 0 }
    return {
      d: Math.floor(diff / 86400000),
      h: Math.floor((diff / 3600000) % 24),
      m: Math.floor((diff / 60000) % 60),
      s: Math.floor((diff / 1000) % 60),
    }
  }

  const [time, setTime] = useState(getTimeLeft())
  const { data } = useSelector((s) => s.products)
  const { categoryData } = useSelector((s) => s.category)

  useEffect(() => {
    dispatch(getProducts())
    dispatch(getUserCategory())
    dispatch(postProduct())
  }, [])

  useEffect(() => {
    const i = setInterval(() => setTime(getTimeLeft()), 1000)
    return () => clearInterval(i)
  }, [])

  return (
    <div>
      <section className="max-w-7xl mx-auto px-4 py-10">
        <div className="flex gap-20">
          <div>

            {categoryData?.map((e) => (
              <div key={e.id}>
                <p className="font-semibol cursor-pointer hover:text-red-600 mt-8 text-2xl">{e.categoryName}</p>
              </div>
            ))}
          </div>
          <Swiper
            modules={[Autoplay, Pagination, Navigation, EffectFade]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation
            effect="fade"
            loop
            className="rounded-3xl shadow-2xl"
          >
            {slides.map((img, i) => (
              <SwiperSlide key={i}>
                <div className="relative h-[380px]">
                  <img src={img} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/60 flex items-center">
                    <div className="ml-14 text-white">

                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 mt-20">
        <div className="flex items-center gap-6 mb-10">
          <h2 className="text-3xl font-extrabold">Flash Sales</h2>
          <div className="flex gap-3 bg-white rounded-2xl shadow px-6 py-4">
            <TimeBox label="Days" value={time.d} />
            <Dots />
            <TimeBox label="Hours" value={time.h} />
            <Dots />
            <TimeBox label="Min" value={time.m} />
            <Dots />
            <TimeBox label="Sec" value={time.s} />
          </div>
        </div>

        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          <section className="max-w-7xl mx-auto px-4 mt-20">
            <Swiper
              modules={[Navigation]}
              navigation
              spaceBetween={24}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
            >
              {data?.slice(0, 3).map((e) => (
                <SwiperSlide key={e.id}>
                  <div className="group bg-white rounded-3xl p-4 shadow">
                    <div className="relative bg-gray-100 rounded-2xl h-56 flex items-center justify-center overflow-hidden">
                      <div className="absolute top-3 right-3 flex flex-col gap-2 z-10">
                        <button
                          onClick={() => toggleWishlist(e)}
                          className="w-10 h-10 bg-white rounded-full shadow flex items-center justify-center"
                        >
                          {isInWishlist(e.id) ? (
                            <AiFillHeart className="text-red-500 text-xl" />
                          ) : (
                            <AiOutlineHeart className="text-gray-500 text-xl" />
                          )}
                        </button>

                        <button
                          onClick={() => navigate(`/detalist/${e.id}`)}
                          className="w-10 h-10 bg-white rounded-full shadow flex items-center justify-center"
                        >
                          <AiOutlineEye className="text-gray-700 text-xl" />
                        </button>
                      </div>

                      <img
                        src={`${API_IMAGE}/${e.image}`}
                        className="max-h-44 object-contain"
                      />

                      <button
                        onClick={() => dispatch(postProduct(e.id))}
                        className="absolute bottom-0 left-0 right-0 bg-black text-white py-3 translate-y-full group-hover:translate-y-0 transition"
                      >
                        Add To Cart
                      </button>
                    </div>

                    <h3 className="mt-4 font-semibold">{e.productName}</h3>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-[#DB4444] font-bold">
                        ${e.hasDiscount ? e.discountPrice : e.price}
                      </span>
                      <Rating value={5} readOnly size="small" />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </section>
        </Swiper>
      </section>

      <section className="max-w-7xl mx-auto px-4 mt-24">
        <h2 className="text-3xl font-extrabold mb-10">Browse By Category</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {categoryData?.map((e) => (
            <div
              key={e.id}
              className="group bg-white rounded-2xl py-8 text-center shadow hover:bg-[#DB4444] hover:text-white transition cursor-pointer"
            >
              <img
                src={`${API_IMAGE}/${e.categoryImage}`}
                className="w-9 h-9 mx-auto mb-3 group-hover:invert"
              />

              <p className="font-semibold">{e.categoryName}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="max-w-7xl mx-auto mt-24 px-6">
        <div className="relative overflow-hidden bg-gradient-to-r from-black via-zinc-900 to-black rounded-3xl p-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 z-10">
            <p className="text-[#00FF66] font-semibold tracking-wide uppercase">
              Categories
            </p>
            <h3 className="text-white text-4xl lg:text-5xl font-extrabold mt-4 leading-tight">
              Enhance Your <br /> Music Experience
            </h3>
            <button className="mt-10 bg-[#00FF66] hover:bg-[#00e65c] transition px-12 py-4 rounded-2xl font-bold text-lg shadow-lg">
              Buy Now!
            </button>
          </div>

          <div className="flex-1 flex justify-center relative">
            <div className="absolute w-80 h-80 bg-[#00FF66]/20 blur-3xl rounded-full"></div>
            <img
              src={img48}
              className="relative w-72 lg:w-96 drop-shadow-2xl"
            />
          </div>
        </div>
      </div>

      <section className="max-w-7xl mx-auto px-4 mt-20">
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {data?.slice(0, 3).map((e) => (
            <SwiperSlide key={e.id}>
              <div className="group bg-white rounded-3xl p-4 shadow">
                <div className="relative bg-gray-100 rounded-2xl h-56 flex items-center justify-center overflow-hidden">
                  <div className="absolute top-3 right-3 flex flex-col gap-2 z-10">
                    <button
                      onClick={() => toggleWishlist(e)}
                      className="w-10 h-10 bg-white rounded-full shadow flex items-center justify-center"
                    >
                      {isInWishlist(e.id) ? (
                        <AiFillHeart className="text-red-500 text-xl" />
                      ) : (
                        <AiOutlineHeart className="text-gray-500 text-xl" />
                      )}
                    </button>

                    <button
                      onClick={() => navigate(`/detalist/${e.id}`)}
                      className="w-10 h-10 bg-white rounded-full shadow flex items-center justify-center"
                    >
                      <AiOutlineEye className="text-gray-700 text-xl" />
                    </button>
                  </div>

                  <img
                    src={`${API_IMAGE}/${e.image}`}
                    className="max-h-44 object-contain"
                  />

                  <button
                    onClick={() => dispatch(postProduct(e.id))}
                    className="absolute bottom-0 left-0 right-0 bg-black text-white py-3 translate-y-full group-hover:translate-y-0 transition" > Add To Cart </button>
                </div>

                <h3 className="mt-4 font-semibold">{e.productName}</h3>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-[#DB4444] font-bold">
                    ${e.hasDiscount ? e.discountPrice : e.price}
                  </span>
                  <Rating value={5} readOnly size="small" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>


      <section className="max-w-7xl mx-auto px-4 mt-24 grid sm:grid-cols-3 gap-10 text-center">
        {[{ img: img19, title: "FREE AND FAST DELIVERY" }, { img: img18, title: "24/7 CUSTOMER SERVICE" }, { img: img17, title: "MONEY BACK GUARANTEE" }].map((e, i) => (
          <div key={i}>
            <img src={e.img} className="mx-auto mb-4" />
            <p className="text-xl font-bold">{e.title}</p>
            <p className="text-gray-500 mt-2">
              Free delivery for all orders over $140
            </p>
          </div>
        ))}
      </section>

      <button onClick={() => navigate(`products`)} className="bg-[#DB4444] mt-16 mb-12 text-white rounded-[5px] px-6 py-3 mx-auto block text-sm sm:px-10 sm:py-3 sm:text-base">
        View All Products
      </button>
    </div>
  )
}

const TimeBox = ({ label, value }) => (
  <div className="text-center">
    <p className="text-xs text-gray-500">{label}</p>
    <p className="text-2xl font-extrabold">
      {String(value).padStart(2, "0")}
    </p>
  </div>
)

const Dots = () => (
  <div className="flex flex-col justify-center gap-1">
    <span className="w-1 h-1 bg-[#DB4444] rounded-full" />
    <span className="w-1 h-1 bg-[#DB4444] rounded-full" />
  </div>
)

export default Home
