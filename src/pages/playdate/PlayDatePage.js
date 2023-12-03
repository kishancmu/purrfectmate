import { Tabs, Segmented } from "antd";
import UpcomingPlayDate from "./UpcomingPlayDate";
import MyMatches from "./MyMatches";
import PastPlayDate from "./PastPlayDate";
import { useState } from "react";

const items = [
  {
    key: "1",
    label: "Upcoming",
    children: <UpcomingPlayDate />,
  },
  {
    key: "2",
    label: "My Matches",
    children: <MyMatches />,
  },
  {
    key: "3",
    label: "Past",
    children: <PastPlayDate />,
  },
];

const PlayDatePage = () => {
  const [isListView, setIsListView] = useState(false);
  return (
    <div className="h-full w-full flex flex-col">
      <div className="mt-4 flex justify-center">
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
    </div>
  );
};

export default PlayDatePage;
