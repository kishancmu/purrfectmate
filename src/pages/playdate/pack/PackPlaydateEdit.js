import dayjs from "dayjs";
import { useEffect } from "react";

import {
  Button,
  Form,
  Input,
  Typography,
  DatePicker,
  TimePicker,
  Checkbox,
  Select,
} from "antd";

const { Text } = Typography;
const { TextArea } = Input;

const PackPlaydateEdit = ({
  packDetails,
  isPackEdit,
  packEditButtonClick,
  packSaveButtonClick,
}) => {
  const [form] = Form.useForm();

  useEffect(() => {
    if (packDetails) {
      form.setFieldsValue({
        ...packDetails.upcoming_playdate,
        name: packDetails.pet_details?.name,
        date: dayjs(packDetails.upcoming_playdate?.date, "DD-MM-YYYY"),
        time: dayjs(packDetails.upcoming_playdate?.time, "HH:mm"),
      });
    }
  }, [packDetails]);

  const disabledDate = (current) => {
    // Can not select days before today
    return current.add(1, "day") < dayjs().endOf("day");
  };

  return (
    <div className="h-full w-full flex flex-col p-4">
      <div className="flex-grow min-h-0">
        <Form
          name="pack-playdate"
          form={form}
          disabled={!isPackEdit}
          onFinish={(values) => packSaveButtonClick(values)}
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
            <Form.Item name="members" label="Pack Members (matched pet owners)">
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
              {isPackEdit && (
                <Button type="primary" htmlType="submit" size="large" block>
                  Save
                </Button>
              )}
            </Form.Item>
          </div>
        </Form>
      </div>
      {!isPackEdit && (
        <Button type="primary" size="large" block onClick={packEditButtonClick}>
          Edit
        </Button>
      )}
    </div>
  );
};

export default PackPlaydateEdit;
