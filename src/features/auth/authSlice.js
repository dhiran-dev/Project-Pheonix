import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "",
  userID: "",
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.token = action.payload.token;
      state.userID = action.payload.userID;
      state.isAuthenticated = true;
    },
    logoutSuccess: (state) => {
      state.token = "";
      state.userID = "";
      state.isAuthenticated = false;
    },
  },
});

export const { loginSuccess, logoutSuccess } = authSlice.actions;

export default authSlice.reducer;


