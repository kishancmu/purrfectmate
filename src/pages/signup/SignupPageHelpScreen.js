import { Button, Typography } from "antd";
const { Title, Text } = Typography;

const SignupPageHelpScreen = ({ onContinueClick }) => {
  return (
    <div className="h-full w-full">
      <div className="h-full w-full flex flex-col">
        <Title className="mt-0">Start with Basics</Title>
        <Text>Click on heart icon button on profiles you like</Text>
        <Text>Click on cross icon button on profiles you don't like</Text>
        <Text>Tap on profiles to see more information</Text>
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
    </div>
  );
};

export default SignupPageHelpScreen;
