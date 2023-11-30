import signupBackground from "../../assets/images/signupBackground.svg";
import appLogo from "../../assets/images/appLogo.svg";
import { Typography, Button } from "antd";
import { Link } from "react-router-dom";

const { Title, Text } = Typography;

const SignupPage = () => {
  return (
    <div className="h-full w-full flex relative">
      <div className="m-auto flex flex-col p-5 items-center">
        <div className="h-36 w-36">
          <img className="h-full w-full" src={appLogo} alt="girl with a dog" />
        </div>
        <Title className="mt-2 text-blue-600">PurrfectMate</Title>
        <div className="mt-5">
          <img
            className="h-full w-full"
            src={signupBackground}
            alt="girl with a dog"
          />
        </div>
        <Button type="primary" block className="mt-5" size="large">
          Create an Account
        </Button>
        <Text className="mt-5">
          Already have an account? <Link to="/login">Login</Link>
        </Text>

        <div className="absolute bottom-0 left-0 w-full p-2 text-center">
          <Text> Made with ❤️ by for your furry friends</Text>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
