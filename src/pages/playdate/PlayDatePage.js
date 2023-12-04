import { Button, Segmented } from "antd";
import UpcomingPlayDateList from "./upcoming/UpcomingPlayDateList";
import MyMatches from "./matches/MyMatches";
import { useContext } from "react";
import PastPlayDate from "./past/PastPlayDateList";
import { useNavigate } from "react-router-dom";
import appContext from "../../utils/appContext";

const PlayDatePage = () => {
  const { playdateTab, setPlaydateTab } = useContext(appContext);
  const navigate = useNavigate();
  return (
    <div className="h-full w-full flex flex-col p-4">
      <div className="mx-auto w-[340px]">
        <Segmented
          options={[
            { label: "Upcoming", value: 1 },
            { label: "My Matches", value: 2 },
            { label: "Past", value: 3 },
          ]}
          block
          onChange={(value) => setPlaydateTab({ currentTab: value })}
          size="large"
          defaultValue={playdateTab.currentTab}
        />
      </div>
      <div className="flex flex-grow min-h-0 pt-5">
        {playdateTab.currentTab === 1 && <UpcomingPlayDateList />}
        {playdateTab.currentTab === 2 && <MyMatches />}
        {playdateTab.currentTab === 3 && <PastPlayDate />}
      </div>
      <Button
        type="primary"
        size="large"
        onClick={() => navigate("pack")}
        className="mt-2"
      >
        Create Pack Playdate
      </Button>
    </div>
  );
};

export default PlayDatePage;
