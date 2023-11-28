import { Outlet } from "react-router-dom";
import BottomBar from "./components/bottombar/BottomBar";
import Topbar from "./components/topbar/Topbar";
import "./App.scss";
import appContext from "./utils/appContext";

function App() {
  return (
    <appContext.Provider value={{ user: { name: "kishan", email: "kisja"}}}>
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

export default App;
