import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Form,
  Input,
  Typography,
  DatePicker,
  TimePicker,
  Checkbox,
  message,
  Select,
} from "antd";
import SecondaryTopbar from "../../../components/secondary-topbar/SecondaryTopbar";

const { Text } = Typography;
const { TextArea } = Input;

const PackPlaydate = () => {
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate();
  const disabledDate = (current) => {
    // Can not select days before today
    return current.add(1, "day") < dayjs().endOf("day");
  };

  const handleCreatePackButtonClick = (values) => {
    const upcomingPlayDateList = JSON.parse(
      localStorage.getItem("upcomingPlaydateList")
    );
    upcomingPlayDateList.push({
      id: upcomingPlayDateList.length + 1,
      pet_details: {
        name: values.name,
        image: "/petimages/packImage.webp",
      },
      upcoming_playdate: {
        isGroup: true,
        isAccepted: true,
        isRejected: false,
        isPending: false,
        isCreator: true,
        location: values.location,
        date: values.date.format("DD-MM-YYYY"),
        time: values.time.format("HH:mm"),
        notes: values.notes,
        members: values.members,
      },
    });
    localStorage.setItem(
      "upcomingPlaydateList",
      JSON.stringify(upcomingPlayDateList)
    );
    success();
  };

  const success = () => {
    messageApi
      .open({
        type: "loading",
        content: "Creating Pack Playdate..",
        duration: 1.5,
      })
      .then(() => message.success("Pack created successfully", 1.5))
      .then(() => navigate("/main/playdate"));
  };

  return (
    <div className="h-full w-full flex flex-col">
      {contextHolder}
      <SecondaryTopbar title={"Create Pack Playdate"} showBackButton={true} />

      <div className="flex-grow min-h-0 p-4">
        <Form
          name="pack-playdate"
          form={form}
          onFinish={(values) => handleCreatePackButtonClick(values)}
          layout="vertical"
          scrollToFirstError={true}
          className="flex flex-col h-full"
        >
          <div className="flex-grow min-h-0 overflow-y-auto">
            <Text className="text-gray-500">
              A pack consists of pet owners and their furry companions who enjoy
              each other's company. Choose your pack's ideal meeting spot, along
              with a specific time and date.
            </Text>
            <Form.Item
              label="Pack Name"
              name="name"
              className="mt-4"
              rules={[{ required: true, message: "Name is required" }]}
            >
              <Input placeholder="Enter name" size="large" />
            </Form.Item>
            <Form.Item
              label="Proposed Playdate Location"
              name="location"
              rules={[{ required: true, message: "Location is required" }]}
            >
              <Input placeholder="Enter location" size="large" />
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
            <Form.Item label="Notes" name="notes">
              <TextArea
                size="large"
                rows={3}
                placeholder="Write your notes for playdate"
                showCount
                maxLength={100}
              />
            </Form.Item>
            {/* <Form.Item name="remember" valuePropName="checked">
              <Checkbox>Set as recurring pack playdate</Checkbox>
            </Form.Item> */}
            <Form.Item
              name="members"
              label="Pack Members (matched pet owners)"
              rules={[
                { required: true, message: "Atleast one member is required" },
              ]}
            >
              <Select
                placeholder="Select members"
                allowClear
                mode="multiple"
                maxTagCount="responsive"
                size="large"
                options={[
                  { value: "Tommy", label: "Tommy" },
                  { value: "Danny", label: "Danny" },
                  { value: "Maddy", label: "Maddy" },
                  { value: "Jojo", label: "Jojo" },
                  { value: "Poco", label: "Poco" },
                ]}
              ></Select>
            </Form.Item>
          </div>
          <div className="pt-2">
            <Form.Item className="mt-auto mb-0">
              <Button type="primary" htmlType="submit" size="large" block>
                Create Pack Playdate
              </Button>
            </Form.Item>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default PackPlaydate;
