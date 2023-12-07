import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  IoPaw,
  IoPawOutline,
  IoChatbubblesOutline,
  IoChatbubbles,
  IoPersonCircleOutline,
  IoPersonCircle,
} from "react-icons/io5";
import { PiBone, PiBoneFill } from "react-icons/pi";

const BottomBar = () => {
  const currentTab = useLocation().pathname.split("/")[2];
  const [pathName, setPathName] = useState(currentTab);
  const navigate = useNavigate();

  const handleTabClick = (pathName) => {
    navigate("/main/" + pathName);
    setPathName(pathName);
  };

  return (
    <div className="flex items-center justify-center gap-10 bg-white min-h-[5rem] h-20 border border-solid border-r-0 border-l-0 border-b-0  border-gray-200">
      <div
        className={"flex flex-col justify-center items-center font-semibold"}
        onClick={() => handleTabClick("home")}
      >
        {pathName === "home" ? (
          <IoPaw className="text-4xl text-blue-500" />
        ) : (
          <IoPawOutline className="text-4xl text-gray-500" />
        )}
        <span
          className={
            "text-sm " +
            (pathName === "home" ? "text-blue-600" : "text-gray-600")
          }
        >
          Home
        </span>
      </div>
      <div
        className="flex flex-col justify-center items-center font-semibold"
        onClick={() => handleTabClick("chats")}
      >
        {pathName === "chats" ? (
          <IoChatbubbles className="text-4xl text-blue-500" />
        ) : (
          <IoChatbubblesOutline className="text-4xl text-gray-500" />
        )}
        <span
          className={
            "text-sm " +
            (pathName === "chats" ? "text-blue-600" : "text-gray-600")
          }
        >
          Chats
        </span>
      </div>
      <div
        className="flex flex-col justify-center items-center font-semibold"
        onClick={() => handleTabClick("playdate")}
      >
        {pathName === "playdate" ? (
          <PiBoneFill className="text-4xl text-blue-500" />
        ) : (
          <PiBone className="text-4xl text-gray-500" />
        )}
        <span
          className={
            "text-sm " +
            (pathName === "playdate" ? "text-blue-600" : "text-gray-600")
          }
        >
          Playdates
        </span>
      </div>

      <div
        className="flex flex-col justify-center items-center font-semibold"
        onClick={() => handleTabClick("account")}
      >
        {pathName === "account" ? (
          <IoPersonCircle className="text-4xl text-blue-500" />
        ) : (
          <IoPersonCircleOutline className="text-4xl text-gray-500" />
        )}
        <span
          className={
            "text-sm " +
            (pathName === "account" ? "text-blue-600" : "text-gray-600")
          }
        >
          Account
        </span>
      </div>
    </div>
  );
};

export default BottomBar;
