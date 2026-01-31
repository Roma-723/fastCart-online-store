import { createAsyncThunk } from "@reduxjs/toolkit"
import { apiInstance } from "../../utils/url"

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await apiInstance.post("/Account/register", user)
      return data
    } catch (error) {
      return rejectWithValue(error.response?.data)
    }
  }
)

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await apiInstance.post("/Account/login", user)
      return data
    } catch (error) {
      return rejectWithValue(error.response?.data)
    }
  }
)
