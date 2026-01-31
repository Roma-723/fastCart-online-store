import { createSlice } from "@reduxjs/toolkit"
import { getUserCategory, getCategoryById } from "../../api/categoryApi/categoryApi"

const categorySlice = createSlice({
  name: "category",
  initialState: {
    categoryData: [],
    singleCategory: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUserCategory.fulfilled, (state, action) => {
        state.categoryData = action.payload
       
      })
      .addCase(getCategoryById.fulfilled, (state, action) => {
        state.singleCategory = action.payload
      })
  },
})

export default categorySlice.reducer
