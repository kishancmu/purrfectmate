import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { IoChevronForward, IoPersonOutline } from "react-icons/io5";
import { Avatar, Typography, Button } from "antd";
import { CgSmileSad } from "react-icons/cg";
import { CloseOutlined, HeartFilled } from "@ant-design/icons";
import petImage from "../../assets/images/petProfileImage.jpeg";
import ProfileListShimmer from "./ProfileListShimmer";
const { Text, Title } = Typography;

const ProfileList = ({ profileObjectList }) => {
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
      {profileObjectList.length !== 0 ? (
        profileObjectList.map((profileObject) => (
          <div
            className="shadow-lg rounded-md flex p-2 mb-5 border border-solid border-gray-200"
            onClick={() => {
              navigate("profile/" + profileObject.id);
            }}
            key={profileObject.id}
          >
            <Avatar size={96} src={petImage} shape="square" />
            <div className="flex flex-col ml-3 justify-center">
              <Text className="text-2xl font-semibold">
                {profileObject.pet_details.name}
              </Text>
              <div className="flex mt-3">
                <Text className="bg-gray-200 px-2 py-1 mr-3 rounded-md text-xs">
                  {profileObject.pet_details.age}
                </Text>
                <Text className="bg-gray-200 px-2 py-1 mr-3 rounded-md text-xs">
                  {profileObject.pet_details.breed}
                </Text>
                <Text className="bg-gray-200 px-2 py-1 rounded-md text-xs">
                  {profileObject.pet_details.gender}
                </Text>
              </div>
            </div>
            <div className="flex justify-center items-center ml-auto">
              <IoChevronForward className="text-3xl text-gray-600" />
            </div>
          </div>
        ))
      ) : (
        <div className="h-full w-full flex justify-center items-center">
          <div className="flex flex-col justify-center items-center">
            <CgSmileSad className="text-8xl text-gray-400" />
            <Title level={4} className="text-gray-600">
              Oops we're out of profile. Try again later
            </Title>
          </div>
        </div>
      )}
    </>
  );
};

export default ProfileList;
