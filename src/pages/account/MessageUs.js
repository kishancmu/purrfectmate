import { useState } from "react";
import { Button, Form, Typography, Input, message } from "antd";
import SecondaryTopbar from "../../components/secondary-topbar/SecondaryTopbar";

const { Title, Text } = Typography;
const { TextArea } = Input;

const MessageUs = () => {
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();

  const success = () => {
    messageApi.open({
      type: "success",
      content: "We received your message. We will get back to you soon.",
    });
  };

  return (
    <div className="h-full w-full flex flex-col">
      {contextHolder}
      <SecondaryTopbar title={"Message Us"} showBackButton={true} />
      <Text className="px-4 mt-4 text-base">
        Have any questions or concerns? We are here to help! Please leave us a
        message
      </Text>
      <div className="flex-grow min-h-0 p-4">
        <Form
          name="message_us"
          form={form}
          onFinish={(values) => {
            console.log(values);
            form.resetFields();
          }}
          layout="vertical"
          scrollToFirstError={true}
          className="flex flex-col h-full"
        >
          <div className="flex-grow min-h-0 overflow-y-auto">
            <Form.Item label="Message" name="message" className="mt-1">
              <TextArea
                rows={4}
                placeholder="Please provide a detailed description of your issue."
                maxLength={6}
              />
            </Form.Item>
          </div>
          <div className="pt-2">
            <Form.Item className="mt-auto mb-0">
              <Button
                type="primary"
                htmlType="submit"
                size="large"
                block
                onClick={success}
              >
                Submit Message
              </Button>
            </Form.Item>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default MessageUs;
