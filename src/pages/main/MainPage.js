import { Outlet } from "react-router-dom";
import { useState } from "react";
import BottomBar from "../../components/bottombar/BottomBar";
import Topbar from "../../components/topbar/Topbar";
import appContext from "../../utils/appContext";
import { NOTIFICATION_LIST } from "../../mocks/notificationList";
import { PROFILE_LIST } from "../../mocks/profileList";
import { MATCH_SETTINGS } from "../../mocks/matchSettings";

function MainPage() {
  const [playdateTab, setPlaydateTab] = useState({ currentTab: 2 });
  const [homePageTab, setHomePageTab] = useState({ currentTab: 1 });
  const [chatPageTab, setChatPageTab] = useState({ currentTab: 1 });
  const [notifyFilterLimit, setNotifyFilterLimit] = useState(false);
  if (localStorage.getItem("notificationList") === null)
    localStorage.setItem("notificationList", JSON.stringify(NOTIFICATION_LIST));

  if (localStorage.getItem("profileList") === null)
    localStorage.setItem("profileList", JSON.stringify(PROFILE_LIST));

  if (localStorage.getItem("matchSettings") === null)
    localStorage.setItem("matchSettings", JSON.stringify(MATCH_SETTINGS));

  return (
    <appContext.Provider
      value={{
        playdateTab: playdateTab,
        setPlaydateTab: setPlaydateTab,
        homePageTab: homePageTab,
        setHomePageTab: setHomePageTab,
        chatPageTab: chatPageTab,
        setChatPageTab: setChatPageTab,
        notifyFilterLimit: notifyFilterLimit,
        setNotifyFilterLimit: setNotifyFilterLimit,
      }}
    >
      <div className="h-full w-full flex flex-col">
        <Topbar />
        <div className="flex-grow min-h-0">
          <Outlet></Outlet>
        </div>
        <BottomBar />
      </div>
    </appContext.Provider>
  );
}

export default MainPage;
