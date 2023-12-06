import { Outlet } from "react-router-dom";
import { useState } from "react";
import BottomBar from "../../components/bottombar/BottomBar";
import Topbar from "../../components/topbar/Topbar";
import appContext from "../../utils/appContext";
import { NOTIFICATION_LIST } from "../../mocks/notificationList";
import { PROFILE_LIST } from "../../mocks/profileList";
import { MATCH_SETTINGS } from "../../mocks/matchSettings";
import { MY_MATCHES_PROFILE_LIST } from "../../mocks/mymatchesprofilelist";
import { PAST_PLAYDATE_LIST } from "../../mocks/pastplaydatelist";
import { UPCOMING_PLAYDATE_LIST } from "../../mocks/upcomingplaydatelist";

function MainPage() {
  const [playdateTab, setPlaydateTab] = useState({ currentTab: 2 });
  const [homePageTab, setHomePageTab] = useState({ currentTab: 1 });
  const [chatPageTab, setChatPageTab] = useState({ currentTab: 1 });

  const [notifyFilterLimit, setNotifyFilterLimit] = useState(false);
  if (localStorage.getItem("notificationList") === null)
    localStorage.setItem("notificationList", JSON.stringify(NOTIFICATION_LIST));

  const [notificationCount, setNotificationCount] = useState(
    localStorage.getItem("notificationList") === null
      ? 0
      : JSON.parse(localStorage.getItem("notificationList")).filter(
          (n) => !n.viewed
        ).length
  );

  if (localStorage.getItem("profileList") === null)
    localStorage.setItem("profileList", JSON.stringify(PROFILE_LIST));

  if (localStorage.getItem("matchSettings") === null)
    localStorage.setItem("matchSettings", JSON.stringify(MATCH_SETTINGS));

  if (localStorage.getItem("myMatchesProfileList") === null)
    localStorage.setItem(
      "myMatchesProfileList",
      JSON.stringify(MY_MATCHES_PROFILE_LIST)
    );

  if (localStorage.getItem("pastPlaydateList") === null)
    localStorage.setItem(
      "pastPlaydateList",
      JSON.stringify(PAST_PLAYDATE_LIST)
    );

  if (localStorage.getItem("upcomingPlaydateList") === null)
    localStorage.setItem(
      "upcomingPlaydateList",
      JSON.stringify(UPCOMING_PLAYDATE_LIST)
    );

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
        setNotificationCount: setNotificationCount,
        notificationCount: notificationCount,
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
