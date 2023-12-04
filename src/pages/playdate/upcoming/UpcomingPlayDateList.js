import { Avatar, Typography, Divider } from "antd";
import {
  IoChevronForward,
  IoPersonOutline,
  IoLocationOutline,
  IoTimeOutline,
  IoCalendarNumberOutline,
} from "react-icons/io5";
import { useNavigate } from "react-router-dom";
const { Title, Text } = Typography;

const UpcomingPlayDateList = () => {
  const navigate = useNavigate();
  return (
    <div className="h-full w-full flex flex-col overflow-y-auto">
      {Array(5)
        .fill("")
        .map((_, index) => (
          <div key={index}>
            <div
              className="flex items-center"
              onClick={() => navigate("upcoming/" + index)}
            >
              <div>
                <Avatar size={84} icon={<IoPersonOutline />} shape="square" />
              </div>
              <div className="flex flex-col ml-3">
                <Title level={4} className="m-0 text-gray-900">
                  Jane
                </Title>
                <div className="flex items-center mt-1">
                  <IoLocationOutline className="align-middle" />
                  <Text className="ml-1 text-base">Mountain view</Text>
                </div>
                <div className="flex items-center mt-1">
                  <IoCalendarNumberOutline className="align-middle" />
                  <Text className="ml-1 text-base">24th Feb 2023</Text>
                  <IoTimeOutline className="align-middle ml-3" />
                  <Text className="ml-1 text-base">5:00PM</Text>
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
