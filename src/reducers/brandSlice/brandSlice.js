import { getBrandById, getUserBrand } from "../../api/brandApi/brandApi";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


const brandSlice = createSlice({
  name: "brand",
  initialState: {
    brandData: [],
    singleBrand: null,
  },

  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUserBrand.fulfilled, (state, action) => {
        console.log(action.payload)
        state.brandData = action.payload;
      })
      .addCase(getBrandById.fulfilled, (state, action) => {
        state.singleBrand = action.payload;
      })
      
  },

});

export default brandSlice.reducer;
