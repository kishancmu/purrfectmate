import { useState, useEffect, useContext } from "react";
import appContext from "../../utils/appContext";
import { useNavigate } from "react-router-dom";
import { IoHeart } from "react-icons/io5";
import { PiBoneFill } from "react-icons/pi";
import { FaShieldDog } from "react-icons/fa6";
import { Typography, Divider } from "antd";
import NotificationShimmer from "./NotificationShimmer";
const { Title, Text } = Typography;

const NotificationsPage = () => {
  const navigate = useNavigate();
  const [showComponent, setShowComponent] = useState(false);
  const { notificationCount, setNotificationCount } = useContext(appContext);
  const [notificationList, setNotificationList] = useState([]);

  useEffect(() => {
    setNotificationList(JSON.parse(localStorage.getItem("notificationList")));
    const timeout = setTimeout(() => {
      setShowComponent(true);
    }, 500);
    return () => clearTimeout(timeout);
  }, []);

  const handleCardClick = (id) => {
    const notificationList = JSON.parse(
      localStorage.getItem("notificationList")
    );
    const notification = notificationList.find((n) => n.id === id);
    notification.viewed = true;
    localStorage.setItem("notificationList", JSON.stringify(notificationList));
    setNotificationList(notificationList);
    setNotificationCount(notificationList.filter((n) => !n.viewed).length);
    navigate("/main/playdate");
  };

  return !showComponent ? (
    <NotificationShimmer />
  ) : (
    <div className="h-full w-full flex flex-col">
      <div className="flex-grow min-h-0 p-3">
        <div className="h-full overflow-y-auto">
          {notificationList.map((notification) => (
            <div key={notification.id}>
              <div
                className={
                  "flex items-cente p-2 rounded-md " +
                  (notification.viewed ? "" : "bg-blue-100")
                }
                onClick={() => handleCardClick(notification.id)}
              >
                <div>
                  {notification.type === 1 && (
                    <IoHeart className="text-3xl text-red-500" />
                  )}
                  {notification.type === 2 && (
                    <PiBoneFill className="text-3xl text-yellow-500" />
                  )}
                  {notification.type === 3 && (
                    <FaShieldDog className="text-3xl text-green-500" />
                  )}
                </div>
                <div className="flex flex-col ml-4">
                  <Title level={5} className="mt-0">
                    {notification.title}
                  </Title>
                  <Text className="text-gray-900">
                    {notification.description}
                  </Text>
                </div>
              </div>
              <Divider className="my-2" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NotificationsPage;
