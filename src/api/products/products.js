import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { axiosRequest } from "../../utils/url"

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (filters) => {
    const res = await axiosRequest.get("/Product/get-products", {
      params: {
        ProductName: filters?.productName?.toLowerCase(),
        MinPrice: filters?.minPrice,
        MaxPrice: filters?.maxPrice,
        BrandId: filters?.brandId,
        ColorId: filters?.colorId,
        CategoryId: filters?.categoryId,
        SubCategoryId: filters?.subCategoryId,
        PageNumber: filters?.page,
        PageSize: filters?.pageSize,
      },

    })
    return res.data.data.products
  }
)

export const getProductById = createAsyncThunk(
  "products/getProductById",
  async (id) => {
    const res = await axiosRequest.get(`/Product/get-product-by-id?id=${id}`)
    return res.data.data
  }
)

const productsSlice = createSlice({
  name: "products",
  initialState: {
    data: [],
    one: null,
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.fulfilled, (state, action) => {
        state.data = action.payload
      })
      .addCase(getProductById.fulfilled, (state, action) => {
        state.one = action.payload
      })
  },
})

export default productsSlice.reducer
