import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { Button, Form, Input, DatePicker, TimePicker } from "antd";
const { TextArea } = Input;

const UpcomingPlayDateEdit = ({
  playDateDetail,
  isEdit,
  editButtonClick,
  saveButtonClick,
}) => {
  const [form] = Form.useForm();

  useEffect(() => {
    console.log("this is op", playDateDetail);
    if (playDateDetail) {
      form.setFieldsValue({
        ...playDateDetail.upcoming_playdate,
        date: dayjs(playDateDetail.upcoming_playdate?.date, "DD-MM-YYYY"),
        time: dayjs(playDateDetail.upcoming_playdate?.time, "HH:mm"),
      });
    }
  }, [playDateDetail]);

  const disabledDate = (current) => {
    // Can not select days before today
    return current.add(1, "day") < dayjs().endOf("day");
  };

  return (
    <div className="h-full w-full flex flex-col p-4">
      <div className="flex-grow min-h-0">
        <Form
          name="edit_playdate"
          form={form}
          onFinish={(values) => saveButtonClick(values)}
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
                  disabledDate={disabledDate}
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
                  format="HH:mm"
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
              {isEdit && (
                <Button type="primary" htmlType="submit" size="large" block>
                  Save
                </Button>
              )}
            </Form.Item>
          </div>
        </Form>
      </div>
      {!isEdit && (
        <Button type="primary" size="large" block onClick={editButtonClick}>
          Edit
        </Button>
      )}
    </div>
  );
};

export default UpcomingPlayDateEdit;
