import { Avatar, Typography, Divider } from "antd";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import PastPlayDateListShimmer from "./PastPlayDateListShimmer";
import {
  IoChevronForward,
  IoPersonOutline,
  IoLocationOutline,
  IoTimeOutline,
  IoCalendarNumberOutline,
} from "react-icons/io5";
const { Title, Text } = Typography;

const PastPlayDateList = () => {
  const navigate = useNavigate();
  const [showComponent, setShowComponent] = useState(false);
  const [pastPlayDateList, setPastPlayDateList] = useState([]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowComponent(true);
      const pastPlayDateList = JSON.parse(
        localStorage.getItem("pastPlaydateList")
      );
      setPastPlayDateList(pastPlayDateList);
    }, 500);
    return () => clearTimeout(timeout);
  }, []);
  return !showComponent ? (
    <PastPlayDateListShimmer />
  ) : (
    <div className="h-full w-full flex flex-col overflow-y-auto">
      {pastPlayDateList.map((item, index) => (
        <div key={index} onClick={() => navigate("past/" + item.id)}>
          <div className="flex items-center">
            <div>
              <Avatar size={84} src={item.pet_details?.image} shape="square" />
            </div>
            <div className="flex flex-col ml-3">
              <Title level={4} className="m-0 text-gray-900">
                {item.pet_details?.name}
              </Title>
              <div className="flex items-center mt-1">
                <IoLocationOutline className="align-middle" />
                <Text className="ml-1 text-base">
                  {item.past_playdates[0].location}
                </Text>
              </div>
              <div className="flex items-center mt-1">
                <IoCalendarNumberOutline className="align-middle" />
                <Text className="ml-1 text-base">
                  {item.past_playdates[0].date}
                </Text>
                <IoTimeOutline className="align-middle ml-3" />
                <Text className="ml-1 text-base">
                  {item.past_playdates[0].time}
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

export default PastPlayDateList;
