import { Avatar, Typography, Divider } from "antd";
import { useState } from "react";
import { useParams } from "react-router-dom";
import SecondaryTopbar from "../../../components/secondary-topbar/SecondaryTopbar";
import UpcomingPlayDateEdit from "./UpcomingPlayDateEdit";
import UpcomingPlayDateDetail from "./UpcomingPlayDateDetail";
const { Title, Text } = Typography;

const UpcomingPlayDate = () => {
  const { playdateID } = useParams();
  const [isEdit, setIsEdit] = useState(false);
  console.log(playdateID);

  const handleEditButtonClick = () => {
    console.log("come here");
    setIsEdit(true);
  };

  const handleSaveButtonClick = () => {
    setIsEdit(false);
  };

  const onAcceptClick = () => {
    console.log("request accepted clicked");
  };

  const onRejectClick = () => {
    console.log("request rejected clicked");
  };
  return (
    <div className="h-full w-full flex flex-col">
      <SecondaryTopbar title="Upcoming Playdate" showBackButton={true} />
      <div className="flex-grow min-h-0">
        {playdateID === "0" ? (
          <UpcomingPlayDateDetail
            isRequestAccepted={false}
            onAcceptClick={onAcceptClick}
            onRejectClick={onRejectClick}
          />
        ) : (
          <UpcomingPlayDateEdit
            isEdit={isEdit}
            editButtonClick={handleEditButtonClick}
            saveButtonClick={handleSaveButtonClick}
          />
        )}
      </div>
    </div>
  );
};

export default UpcomingPlayDate;
