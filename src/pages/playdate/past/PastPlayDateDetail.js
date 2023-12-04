import { Button, Form, Input, Typography, DatePicker, TimePicker } from "antd";
import SecondaryTopbar from "../../../components/secondary-topbar/SecondaryTopbar";
import { useNavigate } from "react-router-dom";
const { Title, Text } = Typography;
const { TextArea } = Input;

const PastPlayDateDetail = () => {
  const navigate = useNavigate();
  return (
    <div className="h-full w-full flex flex-col pb-4">
      <SecondaryTopbar title={"Past Playdate"} showBackButton={true} />
      <div className="flex-grow min-h-0 p-4">
        <div className="flex flex-col">
          <Title level={4} className="m-0 text-gray-900">
            Location
          </Title>
          <Text className="text-base">Mountain View</Text>
        </div>
        <div className="mt-5 flex gap-4">
          <div className="flex flex-col basis-1/2">
            <Title level={4} className="m-0 text-gray-900">
              Date
            </Title>
            <Text className="text-base">23rd November 2023</Text>
          </div>
          <div className="flex flex-col basis-1/2">
            <Title level={4} className="m-0 text-gray-900">
              Time
            </Title>
            <Text className="text-base">06:20PM</Text>
          </div>
        </div>

        <div className="flex flex-col mt-5">
          <Title level={4} className="m-0 text-gray-900">
            Notes
          </Title>
          <Text className="text-base">Some notes from pet owners</Text>
        </div>
      </div>
      <div className="mt-auto mx-4">
        <Button
          type="primary"
          size="large"
          block
          onClick={() => navigate("rate")}
        >
          Rate Playdate
        </Button>
      </div>
    </div>
  );
};

export default PastPlayDateDetail;
