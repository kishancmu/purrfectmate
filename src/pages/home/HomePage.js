import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Segmented, Button } from "antd";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import ProfileCard from "./ProfileCard";
import ProfileList from "./ProfileList";
import appContext from "../../utils/appContext";

const HomePage = () => {
  const { homePageTab, setHomePageTab } = useContext(appContext);
  const [profileList, setProfileList] = useState([]);
  const [cardData, setCardData] = useState({});
  const matchSettings = JSON.parse(localStorage.getItem("matchSettings"));

  useEffect(() => {
    const rawListFromStorage = JSON.parse(localStorage.getItem("profileList"));
    const likedProfileList = rawListFromStorage.filter((profile) => {
      if (
        matchSettings?.gender &&
        matchSettings?.gender.length > 0 &&
        matchSettings?.age
      ) {
        return (
          profile.isLiked === false &&
          profile.isDisliked === false &&
          matchSettings.gender.includes(profile.pet_details.gender) &&
          profile.pet_details.age <= matchSettings.age
        );
      } else {
        return profile.isLiked === false && profile.isDisliked === false;
      }
    });
    setProfileList(likedProfileList);
    setCardData(likedProfileList[0]);
  }, []);

  const onCardChoiceClick = (choice) => {
    const rawListFromStorage = JSON.parse(localStorage.getItem("profileList"));
    const updatedList = rawListFromStorage.map((profile) => {
      if (profile.id === cardData.id) {
        if (choice === "liked") {
          return { ...profile, isLiked: true };
        } else {
          return { ...profile, isDisliked: true };
        }
      } else {
        return profile;
      }
    });
    localStorage.setItem("profileList", JSON.stringify(updatedList));
    const likedProfileList = updatedList.filter(
      (profile) => profile.isLiked === false && profile.isDisliked === false
    );
    setProfileList(likedProfileList);
    setCardData(likedProfileList[0]);
  };

  const navigate = useNavigate();
  return (
    <div className="h-full w-full">
      <div className="h-full w-full flex flex-col p-4">
        <div className="flex justify-center relative">
          <Segmented
            options={[
              {
                label: "Card View",
                value: 1,
              },
              {
                label: "List View",
                value: 2,
              },
            ]}
            onChange={(value) => setHomePageTab({ currentTab: value })}
            size="large"
            defaultValue={homePageTab.currentTab}
          />
          <Button
            icon={<HiOutlineAdjustmentsHorizontal className="text-2xl" />}
            size="large"
            className="absolute right-0 top-0"
            onClick={() => {
              navigate("matchsettings");
            }}
          ></Button>
        </div>
        <div className="flex-grow min-h-[400px]">
          <div className="h-full w-full overflow-y-auto py-3 ">
            {homePageTab.currentTab === 1 ? (
              <ProfileCard
                cardData={cardData}
                handleChoiceClick={(choice) => onCardChoiceClick(choice)}
              />
            ) : (
              <ProfileList profileObjectList={profileList} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
