import { Button, Segmented } from "antd";
import UpcomingPlayDate from "./UpcomingPlayDate";
import MyMatches from "./MyMatches";
import { CalendarOutlined, HeartOutlined } from "@ant-design/icons";
import PastPlayDate from "./PastPlayDateList";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const PlayDatePage = () => {
  const [isListView, setIsListView] = useState(2);
  const navigate = useNavigate();
  return (
    <div className="h-full w-full flex flex-col p-4">
      <div className="mx-auto w-[380px] ">
        <Segmented
          options={[
            { label: "Upcoming", value: 1 },
            { label: "My Matches", value: 2 },
            { label: "Past", value: 3 },
          ]}
          block
          onChange={(value) => setIsListView(value)}
          size="large"
          defaultValue={2}
        />
      </div>
      <div className="flex flex-grow min-h-0">
        {isListView === 1 && <UpcomingPlayDate />}
        {isListView === 2 && <MyMatches />}
        {isListView === 3 && <PastPlayDate />}
      </div>
      <Button type="primary" size="large" onClick={() => navigate("pack")}>
        Create Pack Playdate
      </Button>
    </div>
  );
};

export default PlayDatePage;
