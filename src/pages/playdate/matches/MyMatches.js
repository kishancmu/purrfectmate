import { Avatar, Typography, Divider } from "antd";
import { IoChevronForward, IoPersonOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
const { Title } = Typography;

const MyMatches = () => {
  const navigate = useNavigate();
  return (
    <div className="h-full w-full flex flex-col overflow-y-auto">
      {Array(5)
        .fill("")
        .map((_, index) => (
          <div key={index}>
            <div
              className="flex items-center"
              onClick={() => navigate("profile/23")}
            >
              <div>
                <Avatar size={84} icon={<IoPersonOutline />} shape="square" />
              </div>
              <Title level={4} className="m-0 ml-3 text-gray-900">
                Jane
              </Title>
              <div className="h-full flex ml-auto items-center">
                <IoChevronForward className="text-2xl text-gray-700" />
              </div>
            </div>
            <Divider className="my-2" />
          </div>
        ))}
    </div>
  );
};

export default MyMatches;
