import { useLocation, useNavigate } from "react-router-dom";
import { Button, Form, Input, DatePicker, TimePicker, message } from "antd";
import dayjs from "dayjs";
import SecondaryTopbar from "../../../components/secondary-topbar/SecondaryTopbar";
import { useContext } from "react";
import appContext from "../../../utils/appContext";
const { TextArea } = Input;

const SchedulePlaydate = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();
  const { playdateTab, setPlaydateTab } = useContext(appContext);
  const currentUser = JSON.parse(
    localStorage.getItem("userProfileDetails")
  ).name;

  const profileID = useLocation().pathname.split("/")[4];

  const handleRequestButtonClick = (values) => {
    const myMatchesProfileList = JSON.parse(
      localStorage.getItem("myMatchesProfileList")
    );
    const myMatchProfile = myMatchesProfileList.find(
      (item) => item.id === parseInt(profileID)
    );
    const upcomingPlaydateList = JSON.parse(
      localStorage.getItem("upcomingPlaydateList")
    );

    upcomingPlaydateList.push({
      ...myMatchProfile,
      id: upcomingPlaydateList.length + 1,
      upcoming_playdate: {
        ...values,
        date: values.date.format("DD-MM-YYYY"),
        time: values.time.format("HH:mm"),
        creator: currentUser,
        isAccepted: true,
        isPending: true,
        isCreator: true,
        isGroup: false,
        isRejected: false,
      },
    });

    localStorage.setItem(
      "upcomingPlaydateList",
      JSON.stringify(upcomingPlaydateList)
    );
    success();
  };

  const success = () => {
    messageApi
      .open({
        type: "loading",
        content: "Sending Playdate Request..",
        duration: 1,
      })
      .then(() => message.success("Request sent successfully", 1))
      .then(() => navigate("/main/playdate"));
  };

  const disabledDate = (current) => {
    // Can not select days before today
    return current.add(1, "day") < dayjs().endOf("day");
  };

  return (
    <div className="h-full w-full flex flex-col">
      {contextHolder}
      <SecondaryTopbar title={"Schedule Playdate"} showBackButton={true} />
      <div className="flex-grow min-h-0 p-4">
        <Form
          name="normal_login"
          form={form}
          onFinish={(values) => handleRequestButtonClick(values)}
          layout="vertical"
          scrollToFirstError={true}
          className="flex flex-col h-full"
        >
          <div className="flex-grow min-h-0 overflow-y-auto">
            <Form.Item
              label="Playdate Location"
              name="location"
              rules={[{ required: true, message: "Location is required" }]}
            >
              <Input placeholder="Enter name" size="large" />
            </Form.Item>
            <div className="flex gap-4">
              <Form.Item
                label="Date"
                name="date"
                className="basis-1/2"
                rules={[{ required: true, message: "Date is required" }]}
              >
                <DatePicker
                  className="w-full"
                  size="large"
                  disabledDate={disabledDate}
                />
              </Form.Item>
              <Form.Item
                label="Time"
                name="time"
                className="basis-1/2"
                rules={[{ required: true, message: "Time is required" }]}
              >
                <TimePicker format="HH:mm" className="w-full" size="large" />
              </Form.Item>
            </div>
            <Form.Item label="Notes" name="notes" className="mt-1">
              <TextArea
                rows={4}
                placeholder="Write your notes for playdate"
                showCount
                maxLength={100}
                size="large"
              />
            </Form.Item>
          </div>
          <div className="pt-2">
            <Form.Item className="mt-auto mb-0">
              <Button type="primary" htmlType="submit" size="large" block>
                Schedule Playdate
              </Button>
            </Form.Item>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default SchedulePlaydate;
