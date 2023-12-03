import { useState } from "react";
import { Button, Form, Input, Typography, DatePicker, TimePicker } from "antd";
import SecondaryTopbar from "../../components/secondary-topbar/SecondaryTopbar";

const { Title, Text } = Typography;
const { TextArea } = Input;

const SchedulePlaydate = ({ onContinueClick, onBackClick }) => {
  const [form] = Form.useForm();

  return (
    <div className="h-full w-full flex flex-col">
      <SecondaryTopbar title={"Schedule Playdate"} showBackButton={true} />
      <div className="flex-grow min-h-0 p-4">
        <Form
          name="normal_login"
          form={form}
          onFinish={(values) => onContinueClick(values, 4)}
          layout="vertical"
          scrollToFirstError={true}
          className="flex flex-col h-full"
        >
          <div className="flex-grow min-h-0 overflow-y-auto">
            <Form.Item
              label="Location"
              name="location"
              rules={[{ required: true, message: "Name is required" }]}
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
            <Form.Item label="Notes" name="notes" className="mt-1">
              <TextArea
                rows={4}
                placeholder="Write your notes for playdate"
                maxLength={6}
              />
            </Form.Item>
          </div>
          <div className="pt-2">
            <Form.Item className="mt-auto mb-0">
              <Button type="primary" htmlType="submit" size="large" block>
                Request
              </Button>
            </Form.Item>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default SchedulePlaydate;
