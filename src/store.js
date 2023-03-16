import { configureStore } from "@reduxjs/toolkit";
import goalReducer from "./features/goal/goalSlice";
import authReducer from "./features/auth/authSlice";
import logReducer from "./features/createLog/CreateLog";

const store = configureStore({
  reducer: {
    goal: goalReducer,
    auth: authReducer,
    log: logReducer,
  },
});

export default store;
