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
    updatelogoutGoal: (state) => {
      state.currentWeight = "";
      state.activityLevel = "";
      state.rate = "";
      state.maintainance = "";
      state.goalCalories = "";
      state.goalweight = "";
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
  updatelogoutGoal,
} = goalSlice.actions;

export default goalSlice.reducer;
