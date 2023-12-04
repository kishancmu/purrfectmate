import { useState } from "react";
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
import SecondaryTopbar from "../../components/secondary-topbar/SecondaryTopbar";

const { Title, Text } = Typography;
const { TextArea } = Input;

const PackPlaydate = () => {
  const [form] = Form.useForm();

  return (
    <div className="h-full w-full flex flex-col">
      <SecondaryTopbar title={"Create Pack Playdate"} showBackButton={true} />

      <div className="flex-grow min-h-0 p-4">
        <Form
          name="pack-playdate"
          form={form}
          onFinish={(values) => console.log(values)}
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
              rules={[{ required: true, message: "Location is required" }]}
            >
              <Input placeholder="Enter location" size="large" />
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
                <DatePicker className="w-full" />
              </Form.Item>
              <Form.Item
                label="Time"
                name="time"
                className="basis-1/2"
                rules={[{ required: true, message: "Time is required" }]}
              >
                <TimePicker use12Hours format="h:mm a" className="w-full" />
              </Form.Item>
            </div>
            <Form.Item label="Notes" name="notes">
              <TextArea
                rows={3}
                placeholder="Write your notes for playdate"
                maxLength={6}
              />
            </Form.Item>
            <Form.Item name="remember" valuePropName="checked">
              <Checkbox>Set as recurring pack playdate</Checkbox>
            </Form.Item>
            <Form.Item name="members" label="Pack Members (matched pet owners)">
              <Select
                placeholder="Select gender"
                allowClear
                mode="multiple"
                maxTagCount="responsive"
                size="large"
                options={[
                  { value: "2312sdf23sdf", label: "Rocky" },
                  { value: "2312dawf23sdf", label: "Mocha" },
                  { value: "2312wwf23sdf", label: "Coco" },
                ]}
              ></Select>
            </Form.Item>
          </div>
          <div className="pt-2">
            <Form.Item className="mt-auto mb-0">
              <Button type="primary" htmlType="submit" size="large" block>
                Create
              </Button>
            </Form.Item>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default PackPlaydate;
