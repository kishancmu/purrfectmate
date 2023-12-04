import petImage from "../../assets/images/petProfileImage.jpeg";
import { useNavigate } from "react-router-dom";
import { Typography, Button, Rate, Image } from "antd";
import { CloseOutlined, HeartFilled } from "@ant-design/icons";
import SecondaryTopbar from "../../components/secondary-topbar/SecondaryTopbar";
const { Text } = Typography;

const Profile = () => {
  const navigate = useNavigate();
  return (
    <div className="h-full w-full flex flex-col">
      <SecondaryTopbar title={"Coco Profile"} showBackButton={true} />
      <div className="flex-grow min-h-0 p-3 overflow-y-auto">
        <div className="w-auto h-56">
          <Image
            width="100%"
            height="100%"
            src={petImage}
            className="rounded-lg"
          />
        </div>
        <div className="mt-3">
          <Text className="font-semibold text-xl text-gray-700">
            Pet Details
          </Text>
          <div className="bg-gray-100 rounded-lg flex flex-col p-3 mt-1">
            <Text className="text-base">
              <span className="font-semibold text-gray-600">Name:</span> Coco
            </Text>
            <Text className="text-base">
              <span className="font-semibold text-gray-600">Age:</span> Coco
            </Text>
            <Text className="text-base">
              <span className="font-semibold text-gray-600">Breed:</span> Coco
            </Text>
            <Text className="text-base">
              <span className="font-semibold text-gray-600">Vacciantion:</span>{" "}
              Coco
            </Text>
            <Text className="text-base">
              <span className="font-semibold text-gray-600">Size:</span> Medium
            </Text>
            <Text className="text-base">
              <span className="font-semibold text-gray-600">Energy Level:</span>{" "}
              Mountain View
            </Text>
            <Text className="text-base">
              <span className="font-semibold text-gray-600">PlayStyle:</span>{" "}
              Mountain View
            </Text>
            <Text className="text-base">
              <span className="font-semibold text-gray-600">Location:</span>{" "}
              Mountain View
            </Text>
          </div>
        </div>
        <div className="mt-3">
          <Text className="font-semibold text-xl text-gray-700">
            Playdate Details
          </Text>
          <div className="bg-gray-100 rounded-lg flex flex-col p-3 mt-1">
            <Text className="text-base">
              <span className="font-semibold text-gray-600">Rating:</span>
              <Rate disabled defaultValue={2} className="mb-0" />
            </Text>
            <Text className="text-base">
              <span className="font-semibold text-gray-600">Badges: </span>
              Superstar, Powerhouse
            </Text>
          </div>
        </div>
        <div className="mt-3">
          <Text className="font-semibold text-xl text-gray-700">
            Owners Details
          </Text>
          <div className="bg-gray-100 rounded-lg flex flex-col p-3 mt-1">
            <Text className="text-base">
              <span className="font-semibold text-gray-600">Name: </span> John
              Doe
            </Text>
            <Text className="text-base">
              <span className="font-semibold text-gray-600">Age: </span> 24
            </Text>
            <Text className="text-base">
              <span className="font-semibold text-gray-600">Gender: </span> Male
            </Text>
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-3 mt-auto px-3 py-3">
        <Button
          type="primary"
          className="flex-grow basis-1/2"
          danger
          icon={<CloseOutlined />}
          size="large"
          onClick={() => {
            navigate(-1);
            console.log("clicked");
          }}
        >
          Dislike
        </Button>
        <Button
          type="primary"
          className="bg-green-600 hover:bg-green-500 active:bg-green-700 flex-grow basis-1/2"
          icon={<HeartFilled />}
          size="large"
          onClick={() => {
            navigate(-1);
          }}
        >
          Like
        </Button>
      </div>
    </div>
  );
};

export default Profile;
