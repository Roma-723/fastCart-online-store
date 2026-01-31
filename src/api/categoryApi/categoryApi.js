import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosRequest } from "../../utils/url";


export const getUserCategory = createAsyncThunk(
    "category/getUserCategory",
    async () => {
        try {
            const { data } = await axiosRequest(`/Category/get-categories`)
            // console.log(data.data);
            
            return data.data
        } catch (error) {
            console.error(error);
        }
    }
)


export const addCategory = createAsyncThunk(
    "category/addCategory",
    async (formData) => {
        try {
            const { data } = await axiosRequest.post(
                "/Category/add-category",
                formData
            );
            return data.data;
        } catch (error) {
            console.error(error);

        }
    }
);
export const getCategoryById = createAsyncThunk(
    "category/getCategoryById",
    async (id) => {
        const { data } = await axiosRequest.get(
            `/Category/get-category-by-id?id=${id}`
        );
        return data.data;
    }
);



export const editCategory = createAsyncThunk(
    "category/editCategory",
    async (formData) => {
        try {
            const { data } = await axiosRequest.put(
                "/Category/update-category",
                formData
            );
            return data.data;
        } catch (error) {
            return rejectWithValue(
                error.response?.data || "Edit error"
            );
        }
    }
);



export const deleteCategory = createAsyncThunk(
    "category/deleteCategory",
    async (id) => {
        try {
            await axiosRequest.delete(
                `/Category/delete-category?id=${id}`
            );
        } catch (error) {
            console.error(error);

        }
    }
);