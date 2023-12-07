import { Button, Form, Input, Typography } from "antd";
import PasswordStrengthBar from "react-password-strength-bar";
import { useState } from "react";
const { Title } = Typography;

const SignupPageAccountScreen = ({ onContinueClick, onBackClick }) => {
  const [form] = Form.useForm();
  const [password, setPassword] = useState("");
  return (
    <div className="h-full w-full">
      <div className="h-full w-full flex flex-col">
        <Title className="mt-0">Create your Account</Title>
        <Form
          name="normal_login"
          form={form}
          onFinish={(values) => onContinueClick(values, 2)}
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
              { min: 11, message: "Password should be of min. 11 characters!" },
            ]}
            hasFeedback
          >
            <Input.Password
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              size="large"
              placeholder="Enter password"
            />
          </Form.Item>
          <PasswordStrengthBar
            password={password}
            className="passwordStrength"
            scoreWordClassName="sds"
          />
          <Form.Item className="mt-auto mb-2">
            <Button type="primary" htmlType="submit" size="large" block>
              Continue
            </Button>
          </Form.Item>
          <Form.Item className="mb-0">
            <Button size="large" block onClick={onBackClick}>
              Back
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default SignupPageAccountScreen;
