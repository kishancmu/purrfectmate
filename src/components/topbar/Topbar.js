import { Typography } from "antd";
const { Title } = Typography;

const Topbar = () => {
  return (
    <div className="h-16 bg-blue-600 flex justify-center items-center">
      <Title level={2} className="m-0 text-white">
        PurrfectMate
      </Title>
    </div>
  );
};

export default Topbar;
