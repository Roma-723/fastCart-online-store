import { configureStore } from "@reduxjs/toolkit"
import productsSlice from "../api/products/products"
import authSlice from "../reducers/authSlice/authSlice"
import cartSlice from "../reducers/cart/cartSlice"
import categorySlice from './../reducers/category/categorySlice';
import brandSlice from "../reducers/brandSlice/brandSlice";
// import accountSlice from './../reducers/accountSlice/accountSlice';

export const store = configureStore({
  reducer: {
    products: productsSlice,
    auth: authSlice,
    cart: cartSlice,
    category: categorySlice,
    brand: brandSlice,
    // account: accountSlice

  },
})
