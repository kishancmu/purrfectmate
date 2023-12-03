import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Segmented, Button } from "antd";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import ProfileCard from "./ProfileCard";
import ProfileList from "./ProfileList";

const HomePage = () => {
  const [isListView, setIsListView] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="h-full w-full">
      <div className="h-full w-full flex flex-col p-4">
        <div className="flex justify-center relative">
          <Segmented
            options={[
              { label: "Card View", value: 1 },
              { label: "List View", value: 2 },
            ]}
            onChange={() => setIsListView(!isListView)}
            size="large"
            defaultValue={1}
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
            {!isListView ? <ProfileCard /> : <ProfileList />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
