import signupBackground from "../../assets/images/signupBackground.svg";
import appLogo from "../../assets/images/appLogo.svg";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const SignupPage = () => {
  return (
    <div className="h-full w-full flex relative">
      <div className="m-auto flex flex-col p-5 items-center">
        <div className="h-44 w-44">
          <img className="h-full w-full" src={appLogo} alt="girl with a dog" />
        </div>
        <Typography variant="h3" gutterBottom>
          PurrfectMate
        </Typography>
        <div className="mt-5">
          <img
            className="h-full w-full"
            src={signupBackground}
            alt="girl with a dog"
          />
        </div>
        <Button
          variant="contained"
          size="large"
          fullWidth={true}
          className="mt-10"
        >
          Create an Account
        </Button>
        <Typography variant="body1" align="center" className="mt-4">
          Already have an account? <Link to="/login">Login</Link>
        </Typography>
        <div className="absolute bottom-0 left-0 w-full p-2">
          <Typography variant="body1" align="center">
            Made with ❤️ by for your furry friends
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
