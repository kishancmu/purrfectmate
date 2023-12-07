import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { Typography, Button, Rate, Image } from "antd";
import { CloseOutlined, HeartFilled } from "@ant-design/icons";
import SecondaryTopbar from "../../components/secondary-topbar/SecondaryTopbar";
import { useEffect } from "react";
const { Text } = Typography;

const Profile = () => {
  const navigate = useNavigate();
  const [profileData, setProfileData] = useState({});
  const { profileID } = useParams();

  useEffect(() => {
    const raw = JSON.parse(localStorage.getItem("profileList"));
    let rawd = raw.filter((n) => n.id === parseInt(profileID));
    setProfileData(rawd[0]);
  }, []);

  const handleChoiceClick = (choice) => {
    const raw = JSON.parse(localStorage.getItem("profileList"));
    const updatedList = raw.map((profile) => {
      if (profile.id === parseInt(profileID)) {
        console.log("entered herer");
        if (choice === "liked") {
          return { ...profile, isLiked: true };
        } else {
          return { ...profile, isDisliked: true };
        }
      } else {
        return profile;
      }
    });
    console.log("this", updatedList);
    localStorage.setItem("profileList", JSON.stringify(updatedList));
    navigate(-1);
  };

  return (
    <div className="h-full w-full flex flex-col">
      <SecondaryTopbar
        title={profileData.pet_details?.name + "'s Profile"}
        showBackButton={true}
      />
      <div className="flex-grow min-h-0 p-3 overflow-y-auto">
        <div className="w-auto h-56">
          <Image
            width="100%"
            height="100%"
            src={profileData.pet_details?.image}
            className="rounded-lg"
          />
        </div>
        <div className="mt-3">
          <Text className="font-semibold text-xl text-gray-700">
            Pet Details
          </Text>
          <div className="bg-gray-100 rounded-lg flex flex-col p-3 mt-1">
            <Text className="text-base">
              <span className="font-semibold text-gray-600">Name: </span>
              {profileData.pet_details?.name}
            </Text>
            <Text className="text-base">
              <span className="font-semibold text-gray-600">Age: </span>{" "}
              {profileData.pet_details?.age} years
            </Text>
            <Text className="text-base">
              <span className="font-semibold text-gray-600">Gender: </span>{" "}
              {profileData.pet_details?.gender}
            </Text>
            <Text className="text-base">
              <span className="font-semibold text-gray-600">Breed: </span>{" "}
              {profileData.pet_details?.breed}
            </Text>
            <Text className="text-base">
              <span className="font-semibold text-gray-600">Vaccination: </span>
              {profileData.pet_details?.vaccination}
            </Text>
            <Text className="text-base">
              <span className="font-semibold text-gray-600">Size: </span>
              {profileData.pet_details?.size}
            </Text>
            <Text className="text-base">
              <span className="font-semibold text-gray-600">
                Energy Level:{" "}
              </span>
              {profileData.pet_details?.energy}
            </Text>
            <Text className="text-base">
              <span className="font-semibold text-gray-600">Personality: </span>
              {profileData.pet_details?.personality}
            </Text>
            <Text className="text-base">
              <span className="font-semibold text-gray-600">Location: </span>
              {profileData.pet_details?.location}
            </Text>
          </div>
        </div>
        <div className="mt-3">
          <Text className="font-semibold text-xl text-gray-700">
            Playdate Details
          </Text>
          <div className="bg-gray-100 rounded-lg flex flex-col p-3 mt-1">
            <Text className="text-base">
              <span className="font-semibold text-gray-600">Rating:</span>
              <Rate
                disabled
                value={profileData?.playdate_details?.rating}
                className="mb-0"
              />
            </Text>
            <Text className="text-base">
              <span className="font-semibold text-gray-600">Badges: </span>
              {profileData.playdate_details?.badges}
            </Text>
          </div>
        </div>
        <div className="mt-3">
          <Text className="font-semibold text-xl text-gray-700">
            Owners Details
          </Text>
          <div className="bg-gray-100 rounded-lg flex flex-col p-3 mt-1">
            <Text className="text-base">
              <span className="font-semibold text-gray-600">Name: </span>
              {profileData.user_details?.name}
            </Text>
            <Text className="text-base">
              <span className="font-semibold text-gray-600">Age: </span>
              {profileData.user_details?.age}
            </Text>
            <Text className="text-base">
              <span className="font-semibold text-gray-600">Gender: </span>
              {profileData.user_details?.age}
            </Text>
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-3 mt-auto px-3 py-3">
        <Button
          type="primary"
          className="flex-grow basis-1/2"
          danger
          icon={<CloseOutlined />}
          size="large"
          onClick={() => handleChoiceClick("disliked")}
        >
          Dislike
        </Button>
        <Button
          type="primary"
          className="bg-green-600 hover:bg-green-500 active:bg-green-700 flex-grow basis-1/2"
          icon={<HeartFilled />}
          size="large"
          onClick={() => handleChoiceClick("liked")}
        >
          Like
        </Button>
      </div>
    </div>
  );
};

export default Profile;
