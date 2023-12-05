import { useNavigate, Link } from "react-router-dom";
import { Button, Form, Input, Typography } from "antd";
const { Title } = Typography;

const LoginPage = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log("Success:", values);
    navigate("/main/home");
    localStorage.setItem('username', values.username);
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
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Email cannot be empty!" },
              {
                pattern: new RegExp(/^\S+@\S+\.\S+$/),
                message: "Enter valid email address!",
              },
            ]}
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
            <Button size="large" block onClick={() => navigate("/")}>
              Back
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default LoginPage;
