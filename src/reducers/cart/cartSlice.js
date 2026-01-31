import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getCart } from "../../api/cartApi/cartApi";




export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        dataCart: [],
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getCart.fulfilled, (state, action) => {
                state.dataCart = action.payload;
            })
    },
});

export default cartSlice.reducer;
