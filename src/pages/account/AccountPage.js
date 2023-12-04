import { IoChevronForward, IoPersonOutline } from "react-icons/io5";
import { Avatar, Divider, Typography, Button } from "antd";
import { useNavigate } from "react-router-dom";
const { Text } = Typography;

const AccountPage = () => {
  const navigate = useNavigate();
  return (
    <div className="h-full w-full flex flex-col">
      <div className="flex-grow min-h-0 p-4">
        <div className="h-full overflow-y-auto">
          <div
            className="flex items-center mb-5"
            onClick={() => navigate("user")}
          >
            <div>
              <Avatar size={84} icon={<IoPersonOutline />} shape="square" />
            </div>
            <div className="flex flex-col ml-3">
              <Text className="text-xl font-semibold">John Doe</Text>
              <Text className="text-sm text-gray-500">
                Edit personal picture and details
              </Text>
            </div>
            <div className="h-full flex ml-auto">
              <IoChevronForward className="text-2xl text-gray-700" />
            </div>
          </div>
          <div
            className="flex items-center mb-5"
            onClick={() => navigate("pet")}
          >
            <div>
              <Avatar size={84} icon={<IoPersonOutline />} shape="square" />
            </div>
            <div className="flex flex-col ml-3">
              <Text className="text-xl font-semibold">Coco</Text>
              <Text className="text-sm text-gray-500">
                Edit personal picture and details
              </Text>
            </div>
            <div className="h-full flex ml-auto">
              <IoChevronForward className="text-2xl text-gray-700" />
            </div>
          </div>
          <div
            className="flex items-center py-4"
            onClick={() => navigate("match-settings")}
          >
            <div className="flex flex-col">
              <Text className="text-lg text-gray-700">Match Settings</Text>
            </div>
            <div className="h-full flex ml-auto">
              <IoChevronForward className="text-2xl text-gray-700" />
            </div>
          </div>
          <Text className="text-xl text-gray-900">Support</Text>
          <Divider className="mt-1 mb-2" />
          <div
            className="flex items-center py-4"
            onClick={() => navigate("help")}
          >
            <div className="flex flex-col">
              <Text className="text-lg text-gray-700">Help</Text>
            </div>
            <div className="h-full flex ml-auto">
              <IoChevronForward className="text-2xl text-gray-700" />
            </div>
          </div>
          <div
            className="flex items-center py-4"
            onClick={() => navigate("message-us")}
          >
            <div className="flex flex-col">
              <Text className="text-lg text-gray-700">Message Us</Text>
            </div>
            <div className="h-full flex ml-auto">
              <IoChevronForward className="text-2xl text-gray-700" />
            </div>
          </div>
        </div>
      </div>
      <Button
        danger
        type="text"
        className="mb-2 mx-3"
        size="large"
        onClick={() => navigate("/")}
      >
        Logout
      </Button>
    </div>
  );
};

export default AccountPage;
