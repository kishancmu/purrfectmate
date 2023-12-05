import { MdTouchApp } from "react-icons/md";
import petImage from "../../assets/images/petProfileImage.jpeg";
import { CloseOutlined, HeartFilled } from "@ant-design/icons";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { Button, Typography, Divider, Avatar } from "antd";
const { Title, Text } = Typography;

const SignupPageHelpScreen = ({ onContinueClick }) => {
  return (
    <div className="h-full w-full flex flex-col">
      <Title className="mt-0 text-center">Start with Basics</Title>
      <div className="flex-grow min-h-0 pb-4">
        <div className="flex flex-col h-full overflow-y-auto p-4">
          <Text className="text-base">
            Click on heart icon button on profiles you like
          </Text>
          <div className="flex justify-center w-32 mt-4 mx-auto relative">
            <Button
              type="primary"
              className="bg-green-600 hover:bg-green-500 active:bg-green-700 flex-grow w-20"
              icon={<HeartFilled />}
              size="large"
            >
              Like
            </Button>
            <MdTouchApp className="text-4xl text-gray-700 absolute bottom-[-20px] left-1/2" />
          </div>
          <Divider />

          <Text className="text-base">
            Click on cross icon button on profiles you don't like
          </Text>
          <div className="flex justify-center w-32 mt-4 mx-auto relative">
            <Button
              type="primary"
              className="flex-grow basis-1/2"
              danger
              icon={<CloseOutlined />}
              size="large"
            >
              Dislike
            </Button>
            <MdTouchApp className="text-4xl text-gray-700 absolute bottom-[-20px] left-1/2" />
          </div>

          <Divider />

          <Text className="text-base">
            Click on View Profile button to see more information
          </Text>
          <div className="flex justify-center w-32 mt-4 mx-auto relative">
            <Button>See full profile</Button>
            <MdTouchApp className="text-4xl text-gray-700 absolute bottom-[-20px] left-1/2" />
          </div>
          <Divider />
          <Text className="text-base">
            Click on settings icon button to change your match settings
          </Text>
          <div className="flex justify-center w-32 mt-4 mx-auto relative">
            <Button
              icon={<HiOutlineAdjustmentsHorizontal className="text-2xl" />}
              size="large"
            ></Button>
            <MdTouchApp className="text-4xl text-gray-700 absolute bottom-[-20px] left-1/2" />
          </div>
          <Divider />
          <Text className="text-base">
            You are matched when you and the other pet owner like each other
            pet's profile. You can find your matches in the playdate tab
          </Text>
          <div className="flex justify-center mt-4 mx-auto relative">
            <Avatar size={64} src={petImage} shape="square" />
            <HeartFilled className="text-3xl text-red-500 mx-5" />
            <Avatar size={64} src={petImage} shape="square" />
          </div>
        </div>
      </div>
      <Button
        type="primary"
        className="mt-auto"
        size="large"
        block
        onClick={onContinueClick}
      >
        Continue
      </Button>
    </div>
  );
};

export default SignupPageHelpScreen;
