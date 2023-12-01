import { Avatar, Typography, Divider } from "antd";
import { IoChevronForward, IoPersonOutline } from "react-icons/io5";
const { Title } = Typography;

function PackChatList() {
  return (
    <div className="h-full w-full flex flex-col overflow-y-auto">
      <div className="flex items-center">
        <div>
          <Avatar size={42} icon={<IoPersonOutline />} />
        </div>
        <Title level={5} className="m-0 ml-3 text-gray-900">
          SunnyVale Pack
        </Title>
        <div className="h-full flex ml-auto">
          <IoChevronForward className="text-2xl text-gray-700" />
        </div>
      </div>
      <Divider className="my-2" />
      <div className="flex items-center">
        <div>
          <Avatar size={42} icon={<IoPersonOutline />} />
        </div>
        <Title level={5} className="m-0 ml-3 text-gray-900">
          MV Pack
        </Title>
        <div className="h-full flex ml-auto">
          <IoChevronForward className="text-2xl text-gray-700" />
        </div>
      </div>
    </div>
  );
}

export default PackChatList;
