import { useNavigate } from "react-router-dom";
import { IoChevronForward, IoPersonOutline } from "react-icons/io5";
import { Avatar, Typography, Button } from "antd";
import { CloseOutlined, HeartFilled } from "@ant-design/icons";
import petImage from "../../assets/images/petProfileImage.jpeg";
const { Text } = Typography;

const ProfileList = () => {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="shadow-lg rounded-md flex p-2 border-solid border-gray-200 mb-5"
        onClick={() => {
          navigate("profile/23");
        }}
      >
        <div className="h-24 w-24">
          <img
            src={petImage}
            className="h-full w-full rounded-md bg-cover bg-no-repeat"
            alt="a pet body"
          />
        </div>
        <div className="flex flex-col ml-3 justify-center">
          <Text className="text-2xl font-semibold">Coco</Text>
          <div className="flex mt-3">
            <Text className="bg-blue-200 px-2 py-1 mr-3 rounded-md text-xs">
              Age
            </Text>
            <Text className="bg-blue-200 px-2 py-1 mr-3 rounded-md text-xs">
              Breed
            </Text>
            <Text className="bg-blue-200 px-2 py-1 rounded-md text-xs">
              Female
            </Text>
          </div>
        </div>
        <div className="flex justify-center items-center ml-auto">
          <IoChevronForward className="text-3xl text-gray-600" />
        </div>
      </div>

      <div className="shadow-lg rounded-md flex p-2 border-solid border-gray-200 mb-5">
        <div className="h-24 w-24">
          <img
            src={petImage}
            className="h-full w-full rounded-md bg-cover bg-no-repeat"
            alt="a pet body"
          />
        </div>
        <div className="flex flex-col justify-center ml-3">
          <Text className="text-2xl font-semibold">Rocky</Text>
          <div className="flex mt-3">
            <Text className="bg-blue-200 px-2 py-1 mr-3 rounded-md text-xs">
              Age
            </Text>
            <Text className="bg-blue-200 px-2 py-1 mr-3 rounded-md text-xs">
              Breed
            </Text>
            <Text className="bg-blue-200 px-2 py-1 rounded-md text-xs">
              Female
            </Text>
          </div>
        </div>
        <div className="flex justify-center items-center ml-auto">
          <IoChevronForward className="text-3xl text-gray-600" />
        </div>
      </div>

      <div className="shadow-lg rounded-md flex p-2 border-solid border-gray-200 mb-5">
        <div className="h-24 w-24">
          <img
            src={petImage}
            className="h-full w-full rounded-md bg-cover bg-no-repeat"
            alt="a pet body"
          />
        </div>
        <div className="flex flex-col justify-center ml-3">
          <Text className="text-2xl font-semibold">Mocha</Text>
          <div className="flex mt-3">
            <Text className="bg-blue-200 px-2 py-1 mr-3 rounded-md text-xs">
              Age
            </Text>
            <Text className="bg-blue-200 px-2 py-1 mr-3 rounded-md text-xs">
              Breed
            </Text>
            <Text className="bg-blue-200 px-2 py-1 rounded-md text-xs">
              Female
            </Text>
          </div>
        </div>
        <div className="flex justify-center items-center ml-auto">
          <IoChevronForward className="text-3xl text-gray-600" />
        </div>
      </div>
    </>
  );
};

export default ProfileList;
