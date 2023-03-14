import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import SetGoal from "./pages/SetGoal";
import TrackGoal from "./pages/TrackGoal";

import { Provider } from "react-redux";
import store from "./store";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/setgoal",
    element: <SetGoal />,
  },
  {
    path: "/trackgoal",
    element: <TrackGoal />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
