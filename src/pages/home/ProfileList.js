import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { IoChevronForward, IoPersonOutline } from "react-icons/io5";
import { Avatar, Typography, Button } from "antd";
import { CloseOutlined, HeartFilled } from "@ant-design/icons";
import petImage from "../../assets/images/petProfileImage.jpeg";
import ProfileListShimmer from "./ProfileListShimmer";
const { Text } = Typography;

const ProfileList = () => {
  const navigate = useNavigate();
  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowComponent(true);
    }, 500);
    return () => clearTimeout(timeout);
  }, []);

  return !showComponent ? (
    <ProfileListShimmer />
  ) : (
    <>
      <div
        className="shadow-lg rounded-md flex p-2 mb-5 border border-solid border-gray-200"
        onClick={() => {
          navigate("profile/23");
        }}
      >
        <Avatar size={96} src={petImage} shape="square" />
        <div className="flex flex-col ml-3 justify-center">
          <Text className="text-2xl font-semibold">Coco</Text>
          <div className="flex mt-3">
            <Text className="bg-gray-200 px-2 py-1 mr-3 rounded-md text-xs">
              Age
            </Text>
            <Text className="bg-gray-200 px-2 py-1 mr-3 rounded-md text-xs">
              Breed
            </Text>
            <Text className="bg-gray-200 px-2 py-1 rounded-md text-xs">
              Female
            </Text>
          </div>
        </div>
        <div className="flex justify-center items-center ml-auto">
          <IoChevronForward className="text-3xl text-gray-600" />
        </div>
      </div>
    </>
  );
};

export default ProfileList;
