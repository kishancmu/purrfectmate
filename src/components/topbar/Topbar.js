import { Typography } from "antd";
const { Title } = Typography;

const Topbar = () => {
  return (
    <div className="h-12 bg-blue-500 flex justify-center items-center shadow-lg">
      <Title level={3} className="m-0 text-white">
        PurrfectMate
      </Title>
    </div>
  );
};

export default Topbar;
