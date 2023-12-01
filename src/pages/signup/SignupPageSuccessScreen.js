import { Button, Typography } from "antd";
const { Title } = Typography;

const SignupPageSuccessScreen = ({ onContinueClick }) => {
  return (
    <div className="h-full w-full">
      <div className="h-full w-full flex flex-col">
        <Title className="mt-0 text-center">You are all set!</Title>

        <Button
          className="mt-auto"
          type="primary"
          size="large"
          block
          onClick={() => onContinueClick(null, 5)}
        >
          Continue
        </Button>
      </div>
    </div>
  );
};

export default SignupPageSuccessScreen;
