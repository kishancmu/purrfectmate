import { useNavigate } from "react-router-dom";
import SignupPageAccountScreen from "./SignupPageAccountScreen";
import SignupPagePetScreen from "./SignupPagePetScreen";
import SignupPageUserScreen from "./SignupPageUserScreen";
import SignupPageSuccessScreen from "./SignupPageSuccessScreen";
import SignupPageHelpScreen from "./SignupPageHelpScreen";
import { useState } from "react";

const SignupPage = () => {
  const navigate = useNavigate();
  const [Screen, setScreen] = useState(1);

  const handleContinueClick = (values, index) => {
    console.log(`Success from Screen ${index - 1}:`, values);
    if (index === 2) {
      localStorage.setItem("accountDetails", JSON.stringify(values));
    }
    if (index === 3) {
      localStorage.setItem("petProfileDetails", JSON.stringify(values));
    }
    if (index === 4) {
      localStorage.setItem("userProfileDetails", JSON.stringify(values));
    }
    setScreen(index);
  };

  return (
    <div className="h-full w-full">
      <div className="h-full w-full flex flex-col p-5">
        {Screen === 1 && (
          <SignupPageAccountScreen
            setScreen={setScreen}
            onContinueClick={(values, index) =>
              handleContinueClick(values, index)
            }
            onBackClick={() => navigate("/")}
          />
        )}
        {Screen === 2 && (
          <SignupPagePetScreen
            onContinueClick={(values, index) =>
              handleContinueClick(values, index)
            }
            onBackClick={(screenNumber) => setScreen(screenNumber)}
          />
        )}
        {Screen === 3 && (
          <SignupPageUserScreen
            onContinueClick={(values, index) =>
              handleContinueClick(values, index)
            }
            onBackClick={(screenNumber) => setScreen(screenNumber)}
          />
        )}
        {Screen === 4 && (
          <SignupPageSuccessScreen
            onContinueClick={(values, index) =>
              handleContinueClick(values, index)
            }
            onBackClick={(screenNumber) => setScreen(screenNumber)}
          />
        )}
        {Screen === 5 && (
          <SignupPageHelpScreen
            onContinueClick={() => navigate("/main/home")}
          />
        )}
      </div>
    </div>
  );
};

export default SignupPage;
