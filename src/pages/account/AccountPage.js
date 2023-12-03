import SecondaryTopbar from "../../components/secondary-topbar/SecondaryTopbar";
import { IoChevronForward, IoPersonOutline } from "react-icons/io5";
import { Avatar, Divider, Typography, Button } from "antd";
import { useNavigate } from "react-router-dom";
const { Text } = Typography;

const AccountPage = () => {
  const navigate = useNavigate();
  return (
    <div className="h-full w-full">
      <div className="h-full w-full flex flex-col">
        <div className="flex-grow min-h-0 p-3">
          <div className="h-full overflow-y-auto">
            <div className="flex items-center mb-5">
              <div>
                <Avatar size={64} icon={<IoPersonOutline />} />
              </div>
              <div className="flex flex-col ml-3">
                <span className="text-xl font-semibold">John Doe</span>
                <span className="text-sm text-gray-500">
                  Edit personal picture and details
                </span>
              </div>
              <div className="h-full flex ml-auto">
                <IoChevronForward className="text-2xl text-gray-700" />
              </div>
            </div>
            <div className="flex items-center mb-5">
              <div>
                <Avatar size={64} icon={<IoPersonOutline />} />
              </div>
              <div className="flex flex-col ml-3">
                <span className="text-xl font-semibold">Coco</span>
                <span className="text-sm text-gray-500">
                  Edit personal picture and details
                </span>
              </div>
              <div className="h-full flex ml-auto">
                <IoChevronForward className="text-2xl text-gray-700" />
              </div>
            </div>
            <div className="flex items-center mb-5">
              <div className="flex flex-col">
                <span className="text-md">Match Settings</span>
              </div>
              <div className="h-full flex ml-auto">
                <IoChevronForward className="text-2xl text-gray-700" />
              </div>
            </div>
            <Text className="text-base text-gray-800">Support</Text>
            <Divider className="mt-1" />
            <div className="flex items-center mb-5">
              <div className="flex flex-col">
                <span className="text-md">Help</span>
              </div>
              <div className="h-full flex ml-auto">
                <IoChevronForward className="text-2xl text-gray-700" />
              </div>
            </div>
            <div className="flex items-center mb-5">
              <div className="flex flex-col">
                <span className="text-md">Message Us</span>
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
    </div>
  );
};

export default AccountPage;
