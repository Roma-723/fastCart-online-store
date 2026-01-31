import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosRequest } from "../../utils/url";

export const getUserBrand = createAsyncThunk(
    "brand/getUserBrand",
    async () => {
        const { data } = await axiosRequest.get(
            "/Brand/get-brands"
        );
        console.log(data);
        return data.data;


    }
);

export const addUser = createAsyncThunk(
    "brand/addUser",
    async (brandName, { dispatch }) => {
        await axiosRequest.post(
            `/Brand/add-brand?BrandName=${brandName}`
        );
        dispatch(getUser());
    }
);

export const editBrand = createAsyncThunk(
    "brand/editBrand",
    async ({ id, name }, { dispatch }) => {
        await axiosRequest.put(
            `/Brand/update-brand?Id=${id}&BrandName=${name}`
        );
        dispatch(getUser());
    }
);
export const deleteBrand = createAsyncThunk(
    "brand/deleteBrand",
    async (id, { dispatch }) => {
        try {
            await axiosRequest.delete(
                `/Brand/delete-brand?id=${id}`
            );
            dispatch(getUser());

        } catch (error) {
            console.error(error);

        }
    }
);


export const getBrandById = createAsyncThunk(
    "brand/getBrandById",
    async (id) => {
        const { data } = await axiosRequest.get(
            `/Brand/get-brand-by-id?id=${id}`
        );
        return data.data;
    }
);



export const getProductsAsync = createAsyncThunk(
    "products/getProductsAsync",
    async ({ category, brands, min, max }) => {
        const params = {
            categoryId: category || "",
            brands: brands.join(","),
            min,
            max,
        }
        const { data } = await axiosRequest.get("/Product/get-products", { params })
        return data.data
    }
)