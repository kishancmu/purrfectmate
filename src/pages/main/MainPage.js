import { Outlet } from "react-router-dom";
import BottomBar from "../../components/bottombar/BottomBar";
import Topbar from "../../components/topbar/Topbar";

function MainPage() {
  return (
    <div className="h-full w-full flex flex-col bg-gray-50">
      <Topbar />
      <div className="flex-grow min-h-0">
        <Outlet></Outlet>
      </div>
      <BottomBar />
    </div>
  );
}

export default MainPage;
