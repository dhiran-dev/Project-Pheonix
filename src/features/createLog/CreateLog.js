import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  date: "",
  weight: "",
  caloriesburnt: "",
  intake: "",
  intermittent: "",
};

const logSlice = createSlice({
  name: "log",
  initialState,
  reducers: {
    updateDate: (state, action) => {
      state.date = action.payload;
    },
    updateWeight: (state, action) => {
      state.weight = action.payload;
    },
    updateCaloriesburnt: (state, action) => {
      state.caloriesburnt = action.payload;
    },
    updateIntake: (state, action) => {
      state.intake = action.payload;
    },
    updateIntermittent: (state, action) => {
      state.intermittent = action.payload;
    },
  },
});

export const {
  updateDate,
  updateWeight,
  updateCaloriesburnt,
  updateIntake,
  updateIntermittent,
} = logSlice.actions;

export default logSlice.reducer;
