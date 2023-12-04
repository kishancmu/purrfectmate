import petImage from "../../assets/images/petProfileImage.jpeg";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { IoPersonOutline } from "react-icons/io5";
import { Avatar, Typography, Button, Image } from "antd";
import { CloseOutlined, HeartFilled } from "@ant-design/icons";
import ProfileCardShimmer from "./ProfileCardShimmer";
const { Text } = Typography;

const ProfileCard = () => {
  const navigate = useNavigate();
  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowComponent(true);
    }, 500);
    return () => clearTimeout(timeout);
  }, []);

  return !showComponent ? (
    <ProfileCardShimmer />
  ) : (
    <div className="h-full w-full flex flex-col bg-white shadow-md rounded-lg p-3 border border-solid border-gray-200">
      <div className="h-2/3 relative">
        <Image
          width="100%"
          height="100%"
          src={petImage}
          className="rounded-lg"
        />

        <div className="absolute bottom-0 left-0 pb-3 pl-3 bg-[#00000069] w-full">
          <div>
            <Text className="text-white text-2xl font-semibold">Moda</Text>
          </div>
          <div className="flex mt-2">
            <Text className="bg-gray-950 text-white text-xs py-1 px-2 rounded-md mr-3">
              Age
            </Text>
            <Text className="bg-gray-950 text-white text-xs py-1 px-2 rounded-md mr-3">
              Female
            </Text>
            <Text className="bg-gray-950 text-white text-xs py-1 px-2 rounded-md mr-3">
              Breed
            </Text>
          </div>
        </div>
      </div>
      <div className="flex my-4 items-center">
        <Avatar size={42} icon={<IoPersonOutline />} shape="square" />
        <Text className="ml-2 font-semibold">John Doe</Text>
        <div className="ml-auto">
          <Button
            onClick={() => {
              navigate("profile/23");
            }}
          >
            See full profile
          </Button>
        </div>
      </div>

      <div className="flex justify-center gap-3 mt-auto">
        <Button
          type="primary"
          className="flex-grow basis-1/2"
          danger
          icon={<CloseOutlined />}
          size="large"
        >
          Dislike
        </Button>
        <Button
          type="primary"
          className="bg-green-600 hover:bg-green-500 active:bg-green-700 flex-grow basis-1/2"
          icon={<HeartFilled />}
          size="large"
        >
          Like
        </Button>
      </div>
    </div>
  );
};

export default ProfileCard;
