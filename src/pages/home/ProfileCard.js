import petImage from "../../assets/images/petProfileImage.jpeg";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { PiDog } from "react-icons/pi";

import { Avatar, Typography, Button, Image } from "antd";
import { CloseOutlined, HeartFilled } from "@ant-design/icons";
import ProfileCardShimmer from "./ProfileCardShimmer";
const { Text, Title } = Typography;

const ProfileCard = ({ cardData, handleChoiceClick }) => {
  const navigate = useNavigate();
  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowComponent(true);
    }, 500);
    return () => clearTimeout(timeout);
  }, [cardData]);

  return !showComponent ? (
    <ProfileCardShimmer />
  ) : cardData ? (
    <div className="h-full w-full flex flex-col bg-white shadow-md rounded-lg p-3 border border-solid border-gray-200">
      <div className="h-2/3 relative">
        <Image
          width="100%"
          height="100%"
          src={cardData.pet_details?.image}
          className="rounded-lg"
        />

        <div className="absolute bottom-0 left-0 pb-3 pl-3 bg-[#00000069] w-full rounded-br-lg rounded-bl-lg">
          <div>
            <Text className="text-white text-2xl font-semibold">
              {cardData.pet_details?.name}
            </Text>
          </div>
          <div className="flex mt-2">
            <Text className="bg-gray-950 text-white text-xs py-1 px-2 rounded-md mr-3">
              {cardData.pet_details?.age}
            </Text>
            <Text className="bg-gray-950 text-white text-xs py-1 px-2 rounded-md mr-3">
              {cardData.pet_details?.gender}
            </Text>
            <Text className="bg-gray-950 text-white text-xs py-1 px-2 rounded-md mr-3">
              {cardData.pet_details?.breed}
            </Text>
          </div>
        </div>
      </div>
      <div className="flex my-4 items-center">
        <Avatar size={64} src={cardData.user_details?.image} shape="square" />
        <Text className="ml-2 font-semibold">
          {cardData.user_details?.name}
        </Text>
        <div className="ml-auto">
          <Button
            onClick={() => {
              navigate("profile/" + cardData.id);
            }}
          >
            See full profile
          </Button>
        </div>
      </div>

      <div className="flex justify-center gap-3 mt-auto">
        <Button
          type="primary"
          className="flex-grow basis-1/2 "
          danger
          icon={<CloseOutlined />}
          size="large"
          onClick={() => handleChoiceClick("disliked")}
        >
          Dislike
        </Button>
        <Button
          type="primary"
          className="bg-green-600 hover:bg-green-500 active:bg-green-700 flex-grow basis-1/2 "
          icon={<HeartFilled />}
          size="large"
          onClick={() => handleChoiceClick("disliked")}
        >
          Like
        </Button>
      </div>
    </div>
  ) : (
    <div className="h-full w-full flex justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <PiDog className="text-9xl text-gray-400" />
        <Title level={5} className="text-gray-600 text-center">
          Pawsitively fantastic! You’ve swiped through all the doggie profiles.
          New furry friends join daily, so sniff around later for more
          tail-wagging connections. Happy woofing!
        </Title>
      </div>
    </div>
  );
};

export default ProfileCard;
