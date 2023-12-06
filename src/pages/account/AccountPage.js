import { IoChevronForward } from "react-icons/io5";
import defaultUserImage from "../../assets/images/defaultUser.png";
import defaultPetImage from "../../assets/images/defaultPet.png";
import {
  HiOutlineAdjustmentsHorizontal,
  HiOutlineQuestionMarkCircle,
  HiOutlineChatBubbleBottomCenterText,
} from "react-icons/hi2";

import { useState } from "react";
import { Avatar, Divider, Typography, Button, Modal } from "antd";
import { useNavigate } from "react-router-dom";
const { Text } = Typography;

const AccountPage = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [isDeleteAccount, setIsDeleteAccount] = useState(false);
  const petName =
    JSON.parse(localStorage.getItem("petProfileDetails")).name ?? "NA";
  const userName =
    JSON.parse(localStorage.getItem("userProfileDetails")).name ?? "NA";

  const showModal = (check) => {
    setOpen(true);
    if (check === "delete") setIsDeleteAccount(true);
    else setIsDeleteAccount(false);
  };
  const handleOk = () => {
    setOpen(false);
    if (isDeleteAccount) {
      localStorage.clear();
    } else {
      localStorage.removeItem("profileList");
    }
    navigate("/");
  };
  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <div className="h-full w-full flex flex-col">
      <Modal
        open={open}
        title={
          isDeleteAccount
            ? "Delete PurrfectMate Account"
            : "Logout from PurrfectMate"
        }
        onOk={handleOk}
        centered
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button key="submit" type="primary" onClick={handleOk}>
            Yes
          </Button>,
        ]}
      >
        {isDeleteAccount ? (
          <p>
            Are you sure you want to delete the account? This action is
            irreversible
          </p>
        ) : (
          <p>Are you sure you want to logout?</p>
        )}
      </Modal>
      <div className="flex-grow min-h-0 p-4">
        <div className="h-full overflow-y-auto">
          <div
            className="flex items-center mb-5"
            onClick={() => navigate("user")}
          >
            <div>
              <Avatar size={84} src={defaultUserImage} shape="square" />
            </div>
            <div className="flex flex-col ml-3">
              <Text className="text-xl font-semibold">{userName}</Text>
              <Text className="text-sm text-gray-500">
                Edit personal picture and details
              </Text>
            </div>
            <div className="h-full flex ml-auto">
              <IoChevronForward className="text-2xl text-gray-700" />
            </div>
          </div>
          <div
            className="flex items-center mb-5"
            onClick={() => navigate("pet")}
          >
            <div>
              <Avatar
                size={84}
                src={defaultPetImage}
                shape="square"
                className="flex justify-center items-center"
              />
            </div>
            <div className="flex flex-col ml-3">
              <Text className="text-xl font-semibold">{petName}</Text>
              <Text className="text-sm text-gray-500">
                Edit personal picture and details
              </Text>
            </div>
            <div className="h-full flex ml-auto">
              <IoChevronForward className="text-2xl text-gray-700" />
            </div>
          </div>
          <div
            className="flex items-center py-4"
            onClick={() => navigate("match-settings")}
          >
            <div className="flex items-center">
              <HiOutlineAdjustmentsHorizontal className="text-xl" />
              <Text className="ml-2 text-lg text-gray-700">Match Settings</Text>
            </div>
            <div className="h-full flex ml-auto">
              <IoChevronForward className="text-2xl text-gray-700" />
            </div>
          </div>
          <Text className="text-xl text-gray-900">Support</Text>
          <Divider className="mt-1 mb-2" />
          <div
            className="flex items-center py-4"
            onClick={() => navigate("help")}
          >
            <div className="flex items-center">
              <HiOutlineQuestionMarkCircle className="text-xl" />
              <Text className="text-lg text-gray-700 ml-2">Help</Text>
            </div>
            <div className="h-full flex ml-auto">
              <IoChevronForward className="text-2xl text-gray-700" />
            </div>
          </div>
          <div
            className="flex items-center py-4"
            onClick={() => navigate("message-us")}
          >
            <div className="flex items-center">
              <HiOutlineChatBubbleBottomCenterText className="text-xl" />
              <Text className="text-lg text-gray-700 ml-2">Message Us</Text>
            </div>
            <div className="h-full flex ml-auto">
              <IoChevronForward className="text-2xl text-gray-700" />
            </div>
          </div>
        </div>
      </div>
      <Button
        danger
        type="text"
        className="mb-2 mx-3"
        size="large"
        onClick={() => showModal("logout")}
      >
        Logout
      </Button>
      <Button
        danger
        type="text"
        className="mt-3 mb-2 mx-3"
        size="large"
        onClick={() => showModal("delete")}
      >
        Delete Account
      </Button>
    </div>
  );
};

export default AccountPage;
