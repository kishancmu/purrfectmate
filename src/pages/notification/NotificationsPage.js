import { IoHeart } from "react-icons/io5";
import { PiBoneFill } from "react-icons/pi";
import { FaShieldDog } from "react-icons/fa6";
import { Typography, Divider } from "antd";
const { Title, Text } = Typography;

const NotificationsPage = () => {
  return (
    <div className="h-full w-full">
      <div className="h-full w-full flex flex-col">
        <div className="flex-grow min-h-0 p-3">
          <div className="h-full overflow-y-auto">
            <div className="flex items-center bg-blue-100 p-2 rounded-md ">
              <div>
                <IoHeart className="text-3xl text-red-500" />
              </div>
              <div className="flex flex-col ml-4">
                <Title level={5} className="mt-0">
                  New Match
                </Title>
                <Text className="text-gray-900">
                  We found a new match Polo for your Coco
                </Text>
              </div>
            </div>
            <Divider className="my-2" />
            <div className="flex items-center bg-blue-100 p-2 rounded-md">
              <div>
                <PiBoneFill className="text-3xl text-yellow-500" />
              </div>
              <div className="flex flex-col ml-4">
                <Title level={5} className="mt-0">
                  Playdate Request
                </Title>
                <Text className="text-gray-900">
                  Jake has requested a playdate with your Coco
                </Text>
              </div>
            </div>
            <Divider className="my-2" />
            <div className="flex items-center p-2 rounded-md">
              <div>
                <FaShieldDog className="text-3xl text-green-500" />
              </div>
              <div className="flex flex-col ml-4">
                <Title level={5} className="mt-0">
                  New Pack Created
                </Title>
                <Text className="text-gray-600">
                  You have been added to a new pack SunnyVale Hounds
                </Text>
              </div>
            </div>
            <Divider className="my-2" />
            <div className="flex items-center p-2 rounded-md">
              <div>
                <IoHeart className="text-3xl text-red-500" />
              </div>
              <div className="flex flex-col ml-4">
                <Title level={5} className="mt-0">
                  New Match
                </Title>
                <Text className="text-gray-600">
                  We found a new match Jojo for your Coco
                </Text>
              </div>
            </div>
            <Divider className="my-2" />
            <div className="flex items-center p-2 rounded-md">
              <div>
                <FaShieldDog className="text-3xl text-green-500" />
              </div>
              <div className="flex flex-col ml-4">
                <Title level={5} className="mt-0">
                  New Pack Created
                </Title>
                <Text className="text-gray-600">
                  You have been added to a new pack SunnyVale Hounds
                </Text>
              </div>
            </div>
            <Divider className="my-2" />
            <div className="flex items-center p-2 rounded-md">
              <div>
                <FaShieldDog className="text-3xl text-green-500" />
              </div>
              <div className="flex flex-col ml-4">
                <Title level={5} className="mt-0">
                  New Pack Created
                </Title>
                <Text className="text-gray-600">
                  You have been added to a new pack SunnyVale Hounds
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationsPage;
