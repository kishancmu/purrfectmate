import appContext from "../../utils/appContext";
import { useContext } from "react";

const Topbar = () => {
  const { user } = useContext(appContext);
  return (
    <div className="h-12 bg-cyan-500 flex justify-center items-center">
      PurrfectMate {user.name}
    </div>
  );
};

export default Topbar;
