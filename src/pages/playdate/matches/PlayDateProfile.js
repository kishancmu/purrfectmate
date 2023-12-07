import { useNavigate, useParams } from "react-router-dom";
import { Typography, Button, Rate } from "antd";
import SecondaryTopbar from "../../../components/secondary-topbar/SecondaryTopbar";
import { useEffect, useState } from "react";
const { Text } = Typography;

const PlayDateProfile = () => {
  const navigate = useNavigate();
  const [matchedProfile, setMatchedProfile] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const matchedProfileList = JSON.parse(
      localStorage.getItem("myMatchesProfileList")
    );
    const matchedProfile = matchedProfileList.find(
      (profile) => profile.id === parseInt(id)
    );
    setMatchedProfile(matchedProfile);
  }, []);

  return (
    <div className="h-full w-full flex flex-col">
      <SecondaryTopbar
        title={matchedProfile.pet_details?.name + "'s Profile"}
        showBackButton={true}
      />
      <div className="flex-grow min-h-0 p-3 overflow-y-auto">
        <div className="w-auto h-56">
          <img
            className="h-full w-full bg-cover rounded-lg bg-no-repeat"
            src={matchedProfile.pet_details?.image}
            alt="a dog profile"
          ></img>
        </div>
        <div className="mt-3">
          <Text className="font-semibold text-xl text-gray-700">
            Pet Details
          </Text>
          <div className="bg-gray-100 rounded-lg flex flex-col p-3 mt-1">
            <Text className="text-base">
              <span className="font-semibold text-gray-600">Name: </span>
              {matchedProfile.pet_details?.name}
            </Text>
            <Text className="text-base">
              <span className="font-semibold text-gray-600">Age: </span>
              {matchedProfile.pet_details?.age} years
            </Text>
            <Text className="text-base">
              <span className="font-semibold text-gray-600">Breed: </span>
              {matchedProfile.pet_details?.breed}
            </Text>
            <Text className="text-base">
              <span className="font-semibold text-gray-600">Vaccination: </span>
              {matchedProfile.pet_details?.vaccination}
            </Text>
            <Text className="text-base">
              <span className="font-semibold text-gray-600">Size: </span>
              {matchedProfile.pet_details?.size}
            </Text>
            <Text className="text-base">
              <span className="font-semibold text-gray-600">
                Energy Level:{" "}
              </span>
              {matchedProfile.pet_details?.energy}
            </Text>
            <Text className="text-base">
              <span className="font-semibold text-gray-600">Personality: </span>
              {matchedProfile.pet_details?.personality}
            </Text>
            <Text className="text-base">
              <span className="font-semibold text-gray-600">Location: </span>
              {matchedProfile.pet_details?.location}
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
                value={matchedProfile.playdate_details?.rating}
                className="mb-0"
              />
            </Text>
            <Text className="text-base">
              <span className="font-semibold text-gray-600">Badges: </span>
              {matchedProfile.playdate_details?.badges}
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
              {matchedProfile.user_details?.name}
            </Text>
            <Text className="text-base">
              <span className="font-semibold text-gray-600">Age: </span>
              {matchedProfile.user_details?.age}
            </Text>
            <Text className="text-base">
              <span className="font-semibold text-gray-600">Gender: </span>
              {matchedProfile.user_details?.gender}
            </Text>
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-3 mt-auto px-3 py-3">
        <Button
          type="primary"
          className="flex-grow basis-1/2"
          size="large"
          onClick={() => navigate("schedule")}
        >
          Schedule Playdate
        </Button>
      </div>
    </div>
  );
};

export default PlayDateProfile;
