// cartApi.js
import { createAsyncThunk } from "@reduxjs/toolkit"
import { axiosRequest } from "../../utils/url"
import { message } from "antd"

export const getCart = createAsyncThunk(
  "cart/getCart",
  async () => {
    const { data } = await axiosRequest.get(`/Cart/get-products-from-cart`)
    return data.data
  }
)

export const postProduct = createAsyncThunk(
  "cart/postProduct",
  async (id, { dispatch, rejectWithValue }) => {
    try {
      await axiosRequest.post(`Cart/add-product-to-cart?id=${id}`)
      dispatch(getCart())
    } catch (error) {
      return rejectWithValue(error.response?.data)
    }
  }
)

export const deleteCart = createAsyncThunk(
  "cart/deleteCart",
  async (id, { dispatch }) => {
    await axiosRequest.delete(`Cart/delete-product-from-cart?id=${id}`)
    dispatch(getCart())
  }
)

export const editIncreaseCart = createAsyncThunk(
  "cart/editIncreaseCart",
  async (e, { dispatch }) => {
    await axiosRequest.put(`Cart/increase-product-in-cart?id=${e.id}`)
    dispatch(getCart())
  }
)

export const editReduceCart = createAsyncThunk(
  "cart/editReduceCart",
  async (e, { dispatch }) => {
    await axiosRequest.put(`Cart/reduce-product-in-cart?id=${e.id}`)
    dispatch(getCart())
  }
)

export const deleteCartAll = createAsyncThunk(
  "cart/deleteCartAll",
  async (_, { dispatch }) => {
    await axiosRequest.delete(`Cart/clear-cart`)
    dispatch(getCart())
  }
)
