import { Outlet } from "react-router-dom";
import { useState } from "react";
import BottomBar from "../../components/bottombar/BottomBar";
import Topbar from "../../components/topbar/Topbar";
import appContext from "../../utils/appContext";

function MainPage() {
  const [playdateTab, setPlaydateTab] = useState({ currentTab: 2 });
  const [homePageTab, setHomePageTab] = useState({ currentTab: 1 });
  const [chatPageTab, setChatPageTab] = useState({ currentTab: 1 });
  const [user, setUser] = useState({
    name: "kishan",
    email: "sad",
  });
  return (
    <appContext.Provider
      value={{
        playdateTab: playdateTab,
        setPlaydateTab: setPlaydateTab,
        homePageTab: homePageTab,
        setHomePageTab: setHomePageTab,
        chatPageTab: chatPageTab,
        setChatPageTab: setChatPageTab,
        user: user,
        setUser: setUser,
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
