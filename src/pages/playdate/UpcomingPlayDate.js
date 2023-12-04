import { Avatar, Typography, Divider } from "antd";
import {
  IoChevronForward,
  IoPersonOutline,
  IoLocationOutline,
  IoTimeOutline,
  IoCalendarNumberOutline,
} from "react-icons/io5";
const { Title, Text } = Typography;

const UpcomingPlayDate = () => {
  return (
    <div className="h-full w-full flex flex-col pt-5 overflow-y-auto">
      {Array(5)
        .fill("")
        .map((_, index) => (
          <div key={index}>
            <div className="flex items-center">
              <div>
                <Avatar size={64} icon={<IoPersonOutline />} shape="square" />
              </div>
              <div className="flex flex-col ml-3">
                <Title level={5} className="m-0 text-gray-900">
                  Jane
                </Title>
                <div className="flex items-center mt-1">
                  <IoLocationOutline className="align-middle" />
                  <Text className="ml-1 text-xs">Mountain view</Text>
                </div>
                <div className="flex items-center mt-1">
                  <IoCalendarNumberOutline className="align-middle" />
                  <Text className="ml-1 text-xs">24th Feb 2023</Text>
                  <IoTimeOutline className="align-middle ml-3" />
                  <Text className="ml-1 text-xs">5:00PM</Text>
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

export default UpcomingPlayDate;