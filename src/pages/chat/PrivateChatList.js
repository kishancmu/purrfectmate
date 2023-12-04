import { Avatar, Typography, Divider } from "antd";
import { IoChevronForward, IoPersonOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
const { Title } = Typography;

function PrivateChatList() {
  const navigate = useNavigate();
  return (
    <div className="h-full w-full flex flex-col overflow-y-auto">
      <div className="flex items-center" onClick={() => navigate("Jane")}>
        <div>
          <Avatar size={42} icon={<IoPersonOutline />} shape="square" />
        </div>
        <Title level={5} className="m-0 ml-3 text-gray-900">
          Jane
        </Title>
        <div className="h-full flex ml-auto items-center">
          <IoChevronForward className="text-2xl text-gray-700" />
        </div>
      </div>
      <Divider className="my-2" />
      <div className="flex items-center" onClick={() => navigate("Jake")}>
        <div>
          <Avatar size={42} icon={<IoPersonOutline />} shape="square" />
        </div>
        <Title level={5} className="m-0 ml-3 text-gray-900">
          Jake
        </Title>
        <div className="h-full flex ml-auto items-center">
          <IoChevronForward className="text-2xl text-gray-700" />
        </div>
      </div>
    </div>
  );
}

export default PrivateChatList;
