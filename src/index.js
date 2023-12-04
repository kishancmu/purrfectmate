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
import MatchSettings from "./components/matchSettings/MatchSettings";
import ChatsPage from "./pages/chat/Chatspage";
import PlayDateProfile from "./pages/playdate/PlayDateProfile";
import SchedulePlaydate from "./pages/playdate/SchedulePlaydate";
import PastPlayDateDetail from "./pages/playdate/PastPlayDateDetail";
import RatePlayDate from "./pages/playdate/RatePlayDate";
import PackPlaydate from "./pages/playdate/PackPlaydate";
import UserProfile from "./pages/account/UserProfile";
import MessageUs from "./pages/account/MessageUs";
import Help from "./pages/account/Help";
import PetProfile from "./pages/account/PetProfile";
import ChattingScreen from "./pages/chat/ChattingScreen";

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
        children: [
          {
            path: "",
            element: <ChatsPage />,
          },
          {
            path: ":chatID",
            element: <ChattingScreen />,
          },
        ],
      },
      {
        path: "notifications",
        element: <NotificationsPage />,
      },
      {
        path: "account",
        children: [
          {
            path: "",
            element: <AccountPage />,
          },
          {
            path: "user",
            element: <UserProfile />,
          },
          {
            path: "pet",
            element: <PetProfile />,
          },
          {
            path: "match-settings",
            element: <MatchSettings />,
          },
          {
            path: "help",
            element: <Help />,
          },
          {
            path: "message-us",
            element: <MessageUs />,
          },
        ],
      },
      {
        path: "playdate",
        children: [
          {
            path: "",
            element: <PlayDatePage />,
          },
          {
            path: "pack",
            element: <PackPlaydate />,
          },
          {
            path: "profile/:id",
            element: <PlayDateProfile />,
          },
          {
            path: "profile/:id/schedule",
            element: <SchedulePlaydate />,
          },
          {
            path: "past/:id",
            element: <PastPlayDateDetail />,
          },
          {
            path: "past/:id/rate",
            element: <RatePlayDate />,
          },
        ],
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
