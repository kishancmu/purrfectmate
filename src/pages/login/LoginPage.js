import { useNavigate, Link } from "react-router-dom";
import { Button, Form, Input, Typography, message } from "antd";
const { Title } = Typography;

const LoginPage = () => {
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();
  const [form] = Form.useForm();
  const getStoredAccountDetails = JSON.parse(
    localStorage.getItem("accountDetails")
  );

  const error = () => {
    messageApi.open({
      type: "error",
      content: "Email or password is incorrect!",
    });
  };

  const onFinish = (values) => {
    console.log("Success:", values);
    console.log(getStoredAccountDetails);
    if (
      getStoredAccountDetails &&
      values.email === getStoredAccountDetails.email &&
      values.password === getStoredAccountDetails.password
    ) {
      navigate("/main/home");
    } else {
      error();
    }
  };

  return (
    <div className="h-full w-full">
      {contextHolder}
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
            <Input placeholder="Enter Email Address" size="large" />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Password cannot be empty!" }]}
          >
            <Input.Password placeholder="Enter Password" size="large" />
          </Form.Item>
          <div className="text-center hidden">
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
