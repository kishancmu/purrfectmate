import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.scss";
import App from "./App";
import HomePage from "./pages/home/HomePage";
import ErrorPage from "./pages/error/ErrorPage";
import LoginPage from "./pages/login/LoginPage";
import SignupPageAccountScreen from "./pages/signup/SignupPageAccountScreen";
import SignupPagePetScreen from "./pages/signup/SignupPagePetScreen";
import SignupPageUserScreen from "./pages/signup/SignupPageUserScreen";
import MainPage from "./pages/main/MainPage";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/main",
    element: <MainPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "home",
        element: <HomePage />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/signup",
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <SignupPageAccountScreen />,
      },
      {
        path: "pet",
        element: <SignupPagePetScreen />,
      },
      {
        path: "user",
        element: <SignupPageUserScreen />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);
