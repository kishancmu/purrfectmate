import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Segmented, Button } from "antd";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { CreditCardOutlined, UnorderedListOutlined } from "@ant-design/icons";
import ProfileCard from "./ProfileCard";
import ProfileList from "./ProfileList";
import appContext from "../../utils/appContext";
import ProfileCardShimmer from "./ProfileCardShimmer";
import ProfileListShimmer from "./ProfileListShimmer";

const HomePage = () => {
  const { homePageTab, setHomePageTab } = useContext(appContext);

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
            {homePageTab.currentTab === 1 ? <ProfileCard /> : <ProfileList />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
