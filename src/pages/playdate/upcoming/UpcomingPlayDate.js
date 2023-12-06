import { Avatar, Typography, Divider, Modal, Button } from "antd";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import SecondaryTopbar from "../../../components/secondary-topbar/SecondaryTopbar";
import UpcomingPlayDateEdit from "./UpcomingPlayDateEdit";
import UpcomingPlayDateDetail from "./UpcomingPlayDateDetail";
import PackPlaydateEdit from "../pack/PackPlaydateEdit";
const { Title, Text } = Typography;

const UpcomingPlayDate = () => {
  const { playdateID } = useParams();
  const navigate = useNavigate();
  const [isEdit, setIsEdit] = useState(false);
  const [open, setOpen] = useState(false);
  const [isPackEdit, setIsPackEdit] = useState(false);
  const [upcomingPlayDateDetail, setUpcomingPlayDateDetail] = useState({});

  useEffect(() => {
    const upcomingPlayDateList = JSON.parse(
      localStorage.getItem("upcomingPlaydateList")
    );
    const upcomingPlayDate = upcomingPlayDateList.find(
      (item) => item.id === parseInt(playdateID)
    );

    setUpcomingPlayDateDetail(upcomingPlayDate);
  }, []);

  const handleEditButtonClick = () => {
    setIsEdit(true);
    setIsPackEdit(true);
  };

  const handlePackEditButtonClick = () => {
    setIsPackEdit(true);
  };

  const handleSaveButtonClick = (values) => {
    setIsEdit(false);

    const upcomingPlayDateList = JSON.parse(
      localStorage.getItem("upcomingPlaydateList")
    );
    const upcomingPlayDate = upcomingPlayDateList.find(
      (item) => item.id === parseInt(playdateID)
    );
    upcomingPlayDate.upcoming_playdate = {
      ...upcomingPlayDate.upcoming_playdate,
      ...values,
      date: values.date.format("DD-MM-YYYY"),
      time: values.time.format("HH:mm"),
    };
    localStorage.setItem(
      "upcomingPlaydateList",
      JSON.stringify(upcomingPlayDateList)
    );
  };

  const handlePackSaveButtonClick = (values) => {
    setIsPackEdit(false);
    console.log("thsi is valueso fpac", values);
    const upcomingPlayDateList = JSON.parse(
      localStorage.getItem("upcomingPlaydateList")
    );
    const upcomingPlayDate = upcomingPlayDateList.find(
      (item) => item.id === parseInt(playdateID)
    );
    upcomingPlayDate.pet_details.name = values.name;
    upcomingPlayDate.upcoming_playdate = {
      ...upcomingPlayDate.upcoming_playdate,
      ...values,
      date: values.date.format("DD-MM-YYYY"),
      time: values.time.format("HH:mm"),
    };
    localStorage.setItem(
      "upcomingPlaydateList",
      JSON.stringify(upcomingPlayDateList)
    );
  };

  const onAcceptClick = () => {
    const upcomingPlayDateList = JSON.parse(
      localStorage.getItem("upcomingPlaydateList")
    );
    const upcomingPlayDate = upcomingPlayDateList.find(
      (item) => item.id === parseInt(playdateID)
    );
    upcomingPlayDate.upcoming_playdate.isAccepted = true;
    localStorage.setItem(
      "upcomingPlaydateList",
      JSON.stringify(upcomingPlayDateList)
    );
    navigate(-1);
  };

  const onRejectClick = () => {
    showModal();
  };

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    const upcomingPlayDateList = JSON.parse(
      localStorage.getItem("upcomingPlaydateList")
    );
    const upcomingPlayDate = upcomingPlayDateList.find(
      (item) => item.id === parseInt(playdateID)
    );
    upcomingPlayDate.upcoming_playdate.isRejected = true;
    localStorage.setItem(
      "upcomingPlaydateList",
      JSON.stringify(upcomingPlayDateList)
    );
    navigate(-1);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <div className="h-full w-full flex flex-col">
      <Modal
        open={open}
        title={"Reject Playdate"}
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
        Are you sure you want to reject the playdate?
      </Modal>
      <SecondaryTopbar
        title={
          "Upcoming Playdate with " + upcomingPlayDateDetail.pet_details?.name
        }
        showBackButton={true}
      />
      <div className="flex-grow min-h-0">
        {upcomingPlayDateDetail.upcoming_playdate?.isCreator === false &&
          upcomingPlayDateDetail.upcoming_playdate?.isGroup === false && (
            <UpcomingPlayDateDetail
              playDateDetail={upcomingPlayDateDetail}
              isRequestAccepted={
                upcomingPlayDateDetail.upcoming_playdate?.isAccepted
              }
              onAcceptClick={onAcceptClick}
              onRejectClick={onRejectClick}
            />
          )}

        {upcomingPlayDateDetail.upcoming_playdate?.isCreator === true &&
          upcomingPlayDateDetail.upcoming_playdate?.isGroup === false && (
            <UpcomingPlayDateEdit
              isEdit={isEdit}
              playDateDetail={upcomingPlayDateDetail}
              editButtonClick={handleEditButtonClick}
              saveButtonClick={(values) => handleSaveButtonClick(values)}
            />
          )}

        {upcomingPlayDateDetail.upcoming_playdate?.isCreator === true &&
          upcomingPlayDateDetail.upcoming_playdate?.isGroup === true && (
            <PackPlaydateEdit
              isPackEdit={isPackEdit}
              packDetails={upcomingPlayDateDetail}
              packEditButtonClick={handlePackEditButtonClick}
              packSaveButtonClick={(values) =>
                handlePackSaveButtonClick(values)
              }
            />
          )}
      </div>
    </div>
  );
};

export default UpcomingPlayDate;
