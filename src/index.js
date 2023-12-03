import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.scss";
import App from "./App";
import HomePage from "./pages/home/HomePage";
import Profile from "./pages/home/Profile";
import ErrorPage from "./pages/error/ErrorPage";
import LoginPage from "./pages/login/LoginPage";
import SignupPage from "./pages/signup/SignupPage";
import MainPage from "./pages/main/MainPage";
import ResetPasswordPage from "./pages/login/ResetPasswordPage";
import PlayDatePage from "./pages/playdate/PlayDatePage";
import AccountPage from "./pages/account/AccountPage";
import NotificationsPage from "./pages/notification/NotificationsPage";
import StyleGuidePage from "./pages/styleguide/StyleGuidePage";
import ChatsPage from "./pages/chat/ChatsPage";
import MatchSettings from "./components/matchSettings/MatchSettings";

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
        children: [
          {
            path: "",
            element: <HomePage />,
          },
          {
            path: "profile/:id",
            element: <Profile />,
          },
          {
            path: "matchSettings",
            element: <MatchSettings />,
          },
        ],
      },
      {
        path: "chats",
        element: <ChatsPage />,
      },
      {
        path: "notifications",
        element: <NotificationsPage />,
      },
      {
        path: "account",
        element: <AccountPage />,
        children: [
          {
            path: "user",
            element: <PlayDatePage />,
          },
          {
            path: "pet",
            element: <PlayDatePage />,
          },
          {
            path: "match-settings",
            element: <PlayDatePage />,
          },
          {
            path: "help",
            element: <PlayDatePage />,
          },
        ],
      },
      {
        path: "playdate",
        element: <PlayDatePage />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/styleguide",
    element: <StyleGuidePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/forgotpassword",
    element: <ResetPasswordPage />,
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);
