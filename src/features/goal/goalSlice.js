import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentWeight: "",
  activityLevel: "",
  rate: "",
  maintainance: "",
  goalCalories: "",
  goalweight: "",
};

const goalSlice = createSlice({
  name: "goal",
  initialState,
  reducers: {
    updateCurrentWeight: (state, action) => {
      state.currentWeight = action.payload;
    },
    updateActivityLevel: (state, action) => {
      state.activityLevel = action.payload;
    },
    updateRate: (state, action) => {
      state.rate = action.payload;
    },
    updateMaintainance: (state, action) => {
      state.maintainance = action.payload;
    },
    updateGoalCalories: (state, action) => {
      state.goalCalories = action.payload;
    },
    updateGoalWeight: (state, action) => {
      state.goalweight = action.payload;
    },
  },
});

export const {
  updateCurrentWeight,
  updateActivityLevel,
  updateRate,
  updateMaintainance,
  updateGoalCalories,
  updateGoalWeight,
} = goalSlice.actions;

export default goalSlice.reducer;
