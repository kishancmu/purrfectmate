import { useState } from "react";
import {
  Button,
  Form,
  Input,
  Typography,
  Select,
  message,
  Upload,
  InputNumber,
} from "antd";
import { PlusOutlined } from "@ant-design/icons";
import defaultUserImage from "../../assets/images/defaultUser.png";
const { Title, Text } = Typography;

const beforeUpload = (file) => {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isJpgOrPng && isLt2M;
};

const SignupPageUserScreen = ({ onContinueClick, onBackClick }) => {
  const [form] = Form.useForm();

  const [imageUrl, setImageUrl] = useState();
  const handleChange = () => {
    setImageUrl(defaultUserImage);
  };

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );

  return (
    <div className="h-full w-full">
      <div className="h-full w-full flex flex-col">
        <Title className="mt-0 text-gray-800">And a little about you</Title>
        <Text className="text-base text-gray-700">
          Please add a profile photo of yours taken in a well lit environment
        </Text>
        <div className="flex-grow min-h-0 mt-4">
          <Form
            name="normal_login"
            form={form}
            onFinish={(values) => onContinueClick(values, 4)}
            layout="vertical"
            scrollToFirstError={true}
            className="flex flex-col h-full"
          >
            <div className="flex-grow min-h-0 overflow-y-auto">
              <Upload
                name="avatar"
                listType="picture-card"
                className="avatar-uploader text-center"
                showUploadList={false}
                beforeUpload={beforeUpload}
                onChange={handleChange}
              >
                {imageUrl ? (
                  <img
                    src={defaultUserImage}
                    alt="avatar"
                    style={{ width: "100%", height: "100%" }}
                  />
                ) : (
                  uploadButton
                )}
              </Upload>
              <Form.Item
                label="Name"
                name="name"
                rules={[
                  {
                    required: true,
                    message: "Name is required",
                    whitespace: true,
                  },
                ]}
              >
                <Input placeholder="Enter your full name" size="large" />
              </Form.Item>
              <div className="flex">
                <Form.Item
                  label="Age"
                  name="age"
                  className="w-1/2 pr-2"
                  rules={[{ required: true, message: "Age is required" }]}
                >
                  <InputNumber
                    min={1}
                    max={120}
                    className="w-full"
                    size="large"
                  />
                </Form.Item>

                <Form.Item
                  name="gender"
                  label="Gender"
                  className="w-1/2 pl-2"
                  rules={[
                    {
                      required: true,
                      message: "Gender is required",
                    },
                  ]}
                >
                  <Select
                    placeholder="Select gender"
                    allowClear
                    size="large"
                    options={[
                      { value: "male", label: "Male" },
                      { value: "female", label: "Female" },
                      { value: "other", label: "Other" },
                    ]}
                  ></Select>
                </Form.Item>
              </div>

              <Form.Item
                label="Location"
                name="location"
                extra="We'll use this to find pet owners near you. You can enter your city and state"
                rules={[{ required: true, message: "Location is required" }]}
              >
                <Input placeholder="City, State" size="large" />
              </Form.Item>
            </div>
            <div className="pt-2">
              <Form.Item className="mt-auto mb-2">
                <Button type="primary" htmlType="submit" size="large" block>
                  Continue
                </Button>
              </Form.Item>
              {/* <Form.Item className="mb-0">
                <Button size="large" block onClick={() => onBackClick(2)}>
                  Back
                </Button>
              </Form.Item> */}
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default SignupPageUserScreen;
