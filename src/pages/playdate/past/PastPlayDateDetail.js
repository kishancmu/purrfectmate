import { Button, Typography } from "antd";
import { useParams } from "react-router-dom";
import SecondaryTopbar from "../../../components/secondary-topbar/SecondaryTopbar";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
const { Title, Text } = Typography;

const PastPlayDateDetail = () => {
  const navigate = useNavigate();
  const [playdateDetails, setPlaydateDetails] = useState({});
  const { id } = useParams();
  const pastPlayDateList = JSON.parse(localStorage.getItem("pastPlaydateList"));

  useEffect(() => {
    const pastPlayDate = pastPlayDateList.find(
      (item) => item.id === parseInt(id)
    );
    console.log(pastPlayDate);
    setPlaydateDetails(pastPlayDate);
  }, []);

  return (
    <div className="h-full w-full flex flex-col pb-4">
      <SecondaryTopbar
        title={"Past Playdate with " + playdateDetails.pet_details?.name}
        showBackButton={true}
      />
      <div className="flex-grow min-h-0 p-4">
        <div className="flex flex-col">
          <Title level={4} className="m-0 text-gray-900">
            Location
          </Title>
          <Text className="text-base">
            {playdateDetails.past_playdates &&
              playdateDetails.past_playdates[0].location}
          </Text>
        </div>
        <div className="mt-5 flex gap-4">
          <div className="flex flex-col basis-1/2">
            <Title level={4} className="m-0 text-gray-900">
              Date
            </Title>
            <Text className="text-base">
              {playdateDetails.past_playdates &&
                playdateDetails.past_playdates[0].date}
            </Text>
          </div>
          <div className="flex flex-col basis-1/2">
            <Title level={4} className="m-0 text-gray-900">
              Time
            </Title>
            <Text className="text-base">
              {playdateDetails.past_playdates &&
                playdateDetails.past_playdates[0].time}
            </Text>
          </div>
        </div>

        <div className="flex flex-col mt-5">
          <Title level={4} className="m-0 text-gray-900">
            Notes
          </Title>
          <Text className="text-base">
            {playdateDetails.past_playdates &&
              playdateDetails.past_playdates[0].notes}
          </Text>
        </div>
      </div>
      <div className="mt-auto mx-4">
        <Button
          type="primary"
          size="large"
          block
          onClick={() => navigate("rate")}
          disabled={
            playdateDetails.past_playdates &&
            playdateDetails.past_playdates[0].isRated
          }
        >
          {playdateDetails.past_playdates &&
          playdateDetails.past_playdates[0].isRated
            ? "Rating Submitted"
            : "Rate Playdate"}
        </Button>
      </div>
    </div>
  );
};

export default PastPlayDateDetail;
