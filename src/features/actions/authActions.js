import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const backendURL = "http://127.0.0.1:8080";

export const userLogin = createAsyncThunk(
  "auth/login",
  async ({ userEmail, userPassword }, { rejectWithValue }) => {
    try {
      // configure header's Content-Type as JSON
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        `${backendURL}/api/auth/login`,
        { userEmail, userPassword },
        config
      );
      // store user's token in local storage
      localStorage.setItem("userToken", data.accessToken);
      localStorage.setItem("userID", data._id);
      return data;
    } catch (error) {
      // return custom error message from API if any
      alert(error.response.data);
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
