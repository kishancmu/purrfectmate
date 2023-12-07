import "./App.scss";
import { useNavigate, Link } from "react-router-dom";
import signupBackground from "./assets/images/signupBackground.svg";
import appLogo from "./assets/images/appLogo.svg";
import { Typography, Button } from "antd";

const { Title, Text } = Typography;

function App() {
  const navigate = useNavigate();
  return (
    <div className="h-full w-full flex relative overflow-y-auto">
      <div className="m-auto flex flex-col py-5 px-6 items-center">
        <div className="h-28 w-28">
          <img className="h-full w-full" src={appLogo} alt="girl with a dog" />
        </div>
        <Title className="mt-2 text-gray-700 mb-0 font-bold text-5xl">
          PurrfectMate
        </Title>
        <Text className="text-base text-gray-600">
          Where every tail finds its tale
        </Text>
        <div className="mt-5">
          <img
            className="h-[250px] w-full"
            src={signupBackground}
            alt="girl with a dog"
          />
        </div>
        <Button
          type="primary"
          block
          className="mt-5 font-semibold"
          size="large"
          onClick={() => navigate("/signup")}
        >
          Create an Account
        </Button>
        <Text className="mt-5 text-base">
          Already have an account? <Link to="/login">Login</Link>
        </Text>

        <div className="absolute bottom-0 left-0 w-full p-2 text-center">
          <Text className="text-gray-600">
            {" "}
            Made with ❤️ for your furry friends
          </Text>
        </div>
      </div>
    </div>
  );
}

export default App;
