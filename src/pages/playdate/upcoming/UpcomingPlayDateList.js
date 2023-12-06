import { Avatar, Typography, Divider, Tag } from "antd";
import { useState, useEffect } from "react";
import {
  IoChevronForward,
  IoPersonOutline,
  IoLocationOutline,
  IoTimeOutline,
  IoCalendarNumberOutline,
} from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import UpcomingPlayDateListShimmer from "./UpcomingPlayDateListShimmer";
const { Title, Text } = Typography;

const UpcomingPlayDateList = () => {
  const navigate = useNavigate();
  const [showComponent, setShowComponent] = useState(false);
  const [upcomingPlayDateList, setUpcomingPlayDateList] = useState([]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowComponent(true);
      const upcomingPlayDateList = JSON.parse(
        localStorage.getItem("upcomingPlaydateList")
      );
      const filteredUpcomingPlayDateList = upcomingPlayDateList.filter(
        (item) => item.upcoming_playdate.isRejected === false
      );

      setUpcomingPlayDateList(filteredUpcomingPlayDateList);
    }, 500);
    return () => clearTimeout(timeout);
  }, []);

  return !showComponent ? (
    <UpcomingPlayDateListShimmer />
  ) : (
    <div className="h-full w-full flex flex-col overflow-y-auto">
      {upcomingPlayDateList.map((item, index) => (
        <div key={index}>
          <div
            className="flex items-center"
            onClick={() => navigate("upcoming/" + item.id)}
          >
            <div>
              <Avatar size={84} src={item.pet_details?.image} shape="square" />
            </div>
            <div className="flex flex-col ml-3">
              <Title level={4} className="m-0 text-gray-900">
                {item.pet_details?.name}
                {!item.upcoming_playdate?.isAccepted &&
                  !item.upcoming_playdate?.isGroup && (
                    <Tag className="ml-2" color="#e53935">
                      Pending Request
                    </Tag>
                  )}
                {item.upcoming_playdate?.isPending &&
                  !item.upcoming_playdate?.isGroup && (
                    <Tag className="ml-2" color="#f9a825">
                      Awaiting Response
                    </Tag>
                  )}
              </Title>

              <div className="flex items-center mt-1">
                <IoLocationOutline className="align-middle" />
                <Text className="ml-1 text-base">
                  {item.upcoming_playdate?.location}
                </Text>
              </div>
              <div className="flex items-center mt-1">
                <IoCalendarNumberOutline className="align-middle" />
                <Text className="ml-1 text-base">
                  {item.upcoming_playdate?.date}
                </Text>
                <IoTimeOutline className="align-middle ml-3" />
                <Text className="ml-1 text-base">
                  {item.upcoming_playdate?.time}
                </Text>
              </div>
            </div>
            <div className="h-full flex ml-auto items-center">
              <IoChevronForward className="text-2xl text-gray-700" />
            </div>
          </div>
          <Divider className="my-2" />
        </div>
      ))}
    </div>
  );
};

export default UpcomingPlayDateList;
