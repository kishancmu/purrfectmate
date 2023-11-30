import { QuestionCircleOutlined } from "@ant-design/icons";

const BottomBar = () => {
  return (
    <div className="flex items-center justify-around bg-white h-16 border-solid border-t-1 border-r-0 border-l-0 border-b-0  border-gray-200">
      <div className="flex flex-col justify-center items-center">
        <QuestionCircleOutlined className="text-2xl" />
        <span>Home</span>
      </div>
      <div className="flex flex-col justify-center items-center">
        <QuestionCircleOutlined className="text-2xl" />
        <span>Chat</span>
      </div>
      <div className="flex flex-col justify-center items-center">
        <QuestionCircleOutlined className="text-2xl" />
        <span>Notifications</span>
      </div>
      <div className="flex flex-col justify-center items-center">
        <QuestionCircleOutlined className="text-2xl" />
        <span>PlayDate</span>
      </div>
      <div className="flex flex-col justify-center items-center">
        <QuestionCircleOutlined className="text-2xl" />
        <span>Account</span>
      </div>
    </div>
  );
};

export default BottomBar;
