import { Typography } from "antd";
import { IoChevronBackOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
const { Title } = Typography;

const SecondaryTopbar = ({ title, showBackButton }) => {
  const navigate = useNavigate();
  return (
    <div className="min-h-[64px] h-16 bg-blue-500 flex justify-center items-center shadow-lg relative">
      {showBackButton && (
        <div
          className="absolute left-0 top-0 h-full flex items-center pr-4"
          onClick={() =>
            navigate(-1, {
              replace: true,
            })
          }
        >
          <IoChevronBackOutline className="text-white text-3xl " />
        </div>
      )}
      <Title level={4} className="m-0 text-white">
        {title}
      </Title>
    </div>
  );
};

export default SecondaryTopbar;
