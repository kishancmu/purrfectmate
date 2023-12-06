import { useContext } from "react";
import appContext from "../../utils/appContext";
import { IoNotifications } from "react-icons/io5";
import { Typography, Button, Badge } from "antd";
import { useNavigate } from "react-router-dom";
const { Title } = Typography;

const Topbar = () => {
  const navigate = useNavigate();
  const { notificationCount, setNotificationCount } = useContext(appContext);
  return (
    <div className="min-h-[64px] h-16 bg-blue-600 flex justify-center items-center relative shadow-lg">
      <Title level={2} className="m-0 text-white">
        PurrfectMate
      </Title>
      <div className="flex h-full items-center absolute right-6 top-0">
        <Badge count={notificationCount} showZero>
          <Button
            type="text"
            icon={<IoNotifications className="text-white text-3xl" />}
            className="flex justify-center items-center "
            onClick={() => navigate("notifications")}
          ></Button>
        </Badge>
      </div>
    </div>
  );
};

export default Topbar;
