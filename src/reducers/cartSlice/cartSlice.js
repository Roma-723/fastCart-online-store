import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosRequest } from "../../utils/url";



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
