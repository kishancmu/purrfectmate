import { Button, Segmented } from "antd";
import UpcomingPlayDate from "./UpcomingPlayDate";
import MyMatches from "./MyMatches";
import PastPlayDate from "./PastPlayDateList";
import { useState } from "react";

const PlayDatePage = () => {
  const [isListView, setIsListView] = useState(2);
  return (
    <div className="h-full w-full flex flex-col p-4">
      <div className="flex justify-center">
        <Segmented
          options={[
            { label: "Upcoming", value: 1 },
            { label: "My Matches", value: 2 },
            { label: "Past", value: 3 },
          ]}
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
      <Button type="primary" size="large">
        Create Pack Playdate
      </Button>
    </div>
  );
};

export default PlayDatePage;
