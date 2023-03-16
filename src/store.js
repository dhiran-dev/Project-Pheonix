import { configureStore, applyMiddleware, compose } from "@reduxjs/toolkit";
import goalReducer from "./features/goal/goalSlice";
import authReducer from "./features/auth/authSlice";
import thunk from "redux-thunk";

const store = configureStore({
  reducer: {
    goal: goalReducer,
    auth: authReducer,
  },
});

export default store;

// import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";
// import rootReducer from "./features/reducers";

// const persistConfig = {
//   key: "root",
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// const store = configureStore({
//   reducer: rootReducer,
//   middleware: getDefaultMiddleware({
//     serializableCheck: {
//       ignoredActions: ["persist/PERSIST"],
//     },
//   }),
// });

// const persistor = persistStore(store);

// export { store, persistor };
