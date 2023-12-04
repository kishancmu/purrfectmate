import { useState } from "react";
import { Button, Form, Input, DatePicker, TimePicker } from "antd";
const { TextArea } = Input;

const UpcomingPlayDateEdit = ({ isEdit, editButtonClick, saveButtonClick }) => {
  const [form] = Form.useForm();

  return (
    <div className="h-full w-full flex flex-col">
      <div className="flex-grow min-h-0 p-4">
        <Form
          name="edit_playdate"
          form={form}
          onFinish={(values) => console.log(values)}
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
              <Input disabled={!isEdit} placeholder="Enter name" size="large" />
            </Form.Item>
            <div className="flex gap-4">
              <Form.Item
                label="Date"
                name="date"
                className="basis-1/2"
                rules={[{ required: true, message: "Date is required" }]}
              >
                <DatePicker
                  disabled={!isEdit}
                  className="w-full"
                  size="large"
                />
              </Form.Item>
              <Form.Item
                label="Time"
                name="time"
                className="basis-1/2"
                rules={[{ required: true, message: "Time is required" }]}
              >
                <TimePicker
                  disabled={!isEdit}
                  use12Hours
                  format="h:mm a"
                  className="w-full"
                  size="large"
                />
              </Form.Item>
            </div>
            <Form.Item label="Notes" name="notes" className="mt-1">
              <TextArea
                disabled={!isEdit}
                rows={4}
                placeholder="Write your notes for playdate"
                showCount
                maxLength={100}
              />
            </Form.Item>
          </div>
          <div className="pt-2">
            <Form.Item className="mt-auto mb-0">
              {isEdit ? (
                <Button
                  type="primary"
                  htmlType="submit"
                  size="large"
                  block
                  onClick={saveButtonClick}
                >
                  Save
                </Button>
              ) : (
                <Button
                  type="primary"
                  htmlType="submit"
                  size="large"
                  block
                  onClick={editButtonClick}
                >
                  Edit
                </Button>
              )}
            </Form.Item>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default UpcomingPlayDateEdit;
