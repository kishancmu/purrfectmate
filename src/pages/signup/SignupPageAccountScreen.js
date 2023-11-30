import { useNavigate } from "react-router-dom";
import { Button, Form, Input, Typography } from "antd";
const { Title } = Typography;

const SignupPageAccountScreen = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log("Success:", values);
    navigate("/signup/pet");
  };

  return (
    <div className="h-full w-full">
      <div className="h-full w-full flex flex-col p-5">
        <Title className="mt-0">Create your Account</Title>
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
              {
                required: true,

                message: "Email address cannot be empty!",
              },
              {
                pattern: new RegExp(/^\S+@\S+\.\S+$/),
                message: "Enter valid email address!",
              },
            ]}
          >
            <Input type="email" size="large" placeholder="johndoe@abc.com" />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            rules={[
              {
                required: true,
                message: "Password cannot be empty!",
                whitespace: true,
              },
            ]}
            hasFeedback
          >
            <Input.Password size="large" placeholder="Enter password" />
          </Form.Item>
          <Form.Item className="mt-auto mb-2">
            <Button type="primary" htmlType="submit" size="large" block>
              Continue
            </Button>
          </Form.Item>
          <Form.Item className="mb-0">
            <Button size="large" block onClick={() => navigate(-1)}>
              Back
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default SignupPageAccountScreen;
