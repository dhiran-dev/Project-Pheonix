// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   token: "",
//   userID: "",
//   isAuthenticated: false,
//   status: "idle",
//   error: null,
// };

// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     loginSuccess: (state, action) => {
//       state.token = action.payload.token;
//       state.userID = action.payload.userID;
//       state.isAuthenticated = true;
//     },
//     logoutSuccess: (state) => {
//       state.token = "";
//       state.userID = "";
//       state.isAuthenticated = false;
//     },
//   },
// });

// export const { loginSuccess, logoutSuccess } = authSlice.actions;

// export default authSlice.reducer;

import { userLogin } from "../actions/authActions";

import { createSlice } from "@reduxjs/toolkit";

// initialize userToken from local storage
const userToken = localStorage.getItem("userToken")
  ? localStorage.getItem("userToken")
  : null;

const initialState = {
  loading: false,
  userID: null, // for user id
  userToken: null, // for storing the JWT
  error: null,
  IsAuthenticated: false, // for monitoring the Authentication process.
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logoutSuccess: (state) => {
      state.userToken = null;
      state.userID = null;
      state.status = "idle";
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(userLogin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(userLogin.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.userID = payload._id;
        state.userToken = payload.accessToken;
      })
      .addCase(userLogin.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export default authSlice.reducer;
export const { logoutSuccess } = authSlice.actions;
