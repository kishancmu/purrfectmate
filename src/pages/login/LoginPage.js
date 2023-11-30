import { useNavigate, Link } from "react-router-dom";
import { Button, Form, Input, Typography } from "antd";
const { Title } = Typography;

const LoginPage = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log("Success:", values);
    navigate("/");
  };

  return (
    <div className="h-full w-full">
      <div className="h-full w-full flex flex-col p-5">
        <Title className="mt-0">Login to your account</Title>
        <Form
          name="normal_login"
          form={form}
          onFinish={onFinish}
          layout="vertical"
          scrollToFirstError={true}
          className="flex flex-col h-full"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Username cannot be empty!" }]}
          >
            <Input placeholder="Enter Username" size="large" />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Password cannot be empty!" }]}
          >
            <Input.Password placeholder="Enter Password" size="large" />
          </Form.Item>
          <div className="text-center">
            <Link to="/forgotpassword">Forgot Password?</Link>
          </div>
          <Form.Item className="mt-auto mb-2">
            <Button type="primary" htmlType="submit" size="large" block>
              Log In
            </Button>
          </Form.Item>
          <Form.Item className="mb-0">
            <Button size="large" block onClick={() => navigate("/signup")}>
              Back
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default LoginPage;
