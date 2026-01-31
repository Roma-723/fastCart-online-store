import { createSlice } from "@reduxjs/toolkit"
import { loginUser, registerUser } from "../../api/authApi/authApi"
import { saveToken } from "../../utils/url"

const initialState = {
  statusRegistration: false,
  statusLogin: false,
  errorMessege: "",
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.fulfilled, (state, action) => {
        state.statusRegistration = action.payload?.statusCode === 200
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.statusLogin = action.payload?.statusCode === 200
        if (action.payload?.data) {
          saveToken(action.payload.data)
        }
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.statusLogin = false
        state.errorMessege = action.payload
      })
  },
})

export default authSlice.reducer
