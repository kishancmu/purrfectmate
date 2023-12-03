import petImage from "../../assets/images/petProfileImage.jpeg";
import { IoChevronForward, IoPersonOutline } from "react-icons/io5";
import { Avatar, Typography, Button } from "antd";
import { CloseOutlined, HeartFilled } from "@ant-design/icons";
import SecondaryTopbar from "../../components/secondary-topbar/SecondaryTopbar";
const { Text } = Typography;

const Profile = () => {
  return (
    <div className="h-full w-full flex flex-col">
      <SecondaryTopbar title={"Coco Profile"} showBackButton={true} />
      <div className="flex-grow min-h-0 p-3 overflow-y-auto">
        <div className="w-auto h-2/6">
          <img
            className="h-full w-full bg-cover rounded-lg bg-no-repeat"
            src={petImage}
            alt="a dog profile"
          ></img>
        </div>
        <div className="mt-3">
          <Text className="font-semibold text-xl text-gray-700">
            Pet Details
          </Text>
          <div className="bg-gray-100 rounded-lg flex flex-col p-3 mt-1">
            <Text>Name: Coco</Text>
            <Text>Age: Coco</Text>
            <Text>Breed: Coco</Text>
            <Text>Vacciantion: Coco</Text>
            <Text>Size: Medium</Text>
            <Text>Energy Level: Mountain View</Text>
            <Text>PlayStyle: Mountain View</Text>
            <Text>Location: Mountain View</Text>
          </div>
        </div>
        <div className="mt-3">
          <Text className="font-semibold text-xl text-gray-700">
            Playdate Details
          </Text>
          <div className="bg-gray-100 rounded-lg flex flex-col p-3 mt-1">
            <div>
              <Text>Rating</Text>
            </div>
            <div>
              <Text>Badges</Text>
            </div>
          </div>
        </div>
        <div className="mt-3">
          <Text className="font-semibold text-xl text-gray-700">
            Owners Details
          </Text>
          <div className="bg-gray-100 rounded-lg flex flex-col p-3 mt-1">
            <Text>
              <span className="font-semibold text-gray-600">Name: </span> John
              Doe
            </Text>
            <Text>
              <span className="font-semibold text-gray-600">Age: </span> 24
            </Text>
            <Text>
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
        >
          Dislike
        </Button>
        <Button
          type="primary"
          className="bg-green-600 hover:bg-green-500 active:bg-green-700 flex-grow basis-1/2"
          icon={<HeartFilled />}
          size="large"
        >
          Like
        </Button>
      </div>
    </div>
  );
};

export default Profile;
