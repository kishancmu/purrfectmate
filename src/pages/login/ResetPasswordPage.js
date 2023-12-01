import { useNavigate } from "react-router-dom";
import { Button, Form, Input, Typography } from "antd";
const { Title } = Typography;

const ResetPasswordPage = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Success:", values);
    navigate("/main/home");
  };

  return (
    <div className="h-full w-full">
      <div className="h-full w-full flex flex-col p-5">
        <Title className="mt-0">Reset you password</Title>
        <Form
          name="normal_login"
          form={form}
          onFinish={onFinish}
          layout="vertical"
          scrollToFirstError={true}
          className="flex flex-col h-full"
        >
          <Form.Item
            label="Old Password"
            name="oldpassword"
            rules={[{ required: true, message: "Password cannot be empty!" }]}
          >
            <Input.Password placeholder="Enter Password" size="large" />
          </Form.Item>
          <Form.Item
            label="New Password"
            name="newpassword"
            rules={[{ required: true, message: "Password cannot be empty!" }]}
          >
            <Input.Password placeholder="Enter Password" size="large" />
          </Form.Item>
          <Form.Item className="mt-auto mb-2">
            <Button type="primary" htmlType="submit" size="large" block>
              Reset
            </Button>
          </Form.Item>
          <Form.Item className="mb-0">
            <Button size="large" block onClick={() => navigate("/login")}>
              Back
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
