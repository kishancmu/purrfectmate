import { Button, Form, Input, Typography, Select, message, Upload } from "antd";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { useState } from "react";

const { Title, Text } = Typography;

const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
};
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

const SignupPagePetScreen = ({ onContinueClick, onBackClick }) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState();
  const handleChange = (info) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
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
        <Title className="mt-0">Tell us about your pet</Title>
        <Text>
          Please add your pet profile photo below and make sure the photo is
          taken in a wel lit environment
        </Text>
        <div className="flex-grow min-h-0 mt-5">
          <Form
            name="normal_login"
            form={form}
            onFinish={(values) => onContinueClick(values, 3)}
            layout="vertical"
            scrollToFirstError={true}
            className="flex flex-col h-full"
          >
            <div className="flex-grow min-h-0 overflow-y-auto">
              <Upload
                name="avatar"
                listType="picture-circle"
                className="avatar-uploader text-center"
                showUploadList={false}
                action=""
                beforeUpload={beforeUpload}
                onChange={handleChange}
              >
                {imageUrl ? (
                  <img src={imageUrl} alt="avatar" style={{ width: "100%" }} />
                ) : (
                  uploadButton
                )}
              </Upload>
              <Form.Item
                label="Name"
                name="name"
                rules={[{ required: true, message: "Name cannot be empty!" }]}
              >
                <Input placeholder="Enter name" size="large" />
              </Form.Item>
              <Form.Item
                name="gender"
                label="Gender"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Select
                  placeholder="Select a option and change input text above"
                  allowClear
                  size="large"
                  options={[
                    { value: "male", label: "Male" },
                    { value: "female", label: "Female" },
                  ]}
                ></Select>
              </Form.Item>
              <Form.Item
                name="breed"
                label="Breed"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Select
                  placeholder="Select breed"
                  allowClear
                  size="large"
                  options={[
                    { value: "boxer", label: "Boxer" },
                    { value: "labrador", label: "Labrador" },
                    { value: "pug", label: "Pug" },
                  ]}
                ></Select>
              </Form.Item>
              <Form.Item
                name="size"
                label="Size"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Select
                  placeholder="Select size"
                  allowClear
                  size="large"
                  options={[
                    { value: "small", label: "Small" },
                    { value: "medium", label: "Medium" },
                    { value: "large", label: "Large" },
                  ]}
                ></Select>
              </Form.Item>
              <Form.Item
                name="age"
                label="Age"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Select
                  placeholder="Select age"
                  allowClear
                  size="large"
                  options={[
                    { value: "0", label: "Less than 1 year" },
                    { value: "1", label: "1" },
                    { value: "2", label: "2" },
                    { value: "3", label: "3" },
                  ]}
                ></Select>
              </Form.Item>
              <Form.Item
                name="energy"
                label="Energy Level"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Select
                  placeholder="Select Energy Level"
                  allowClear
                  size="large"
                  options={[
                    { value: "low", label: "Low" },
                    { value: "medium", label: "Medium" },
                    { value: "high", label: "High" },
                  ]}
                ></Select>
              </Form.Item>
              <Form.Item
                name="personality"
                label="Personality"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Select
                  placeholder="Select Personality"
                  allowClear
                  size="large"
                  options={[
                    { value: "active", label: "Active" },
                    { value: "playful", label: "Playful" },
                    { value: "goofy", label: "Goofy" },
                  ]}
                ></Select>
              </Form.Item>
              <Form.Item
                name="vaccination"
                label="Vaccination"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Select
                  placeholder="Select vaccination"
                  allowClear
                  size="large"
                  options={[
                    { value: "yes", label: "Yes" },
                    { value: "no", label: "No" },
                  ]}
                ></Select>
              </Form.Item>
            </div>

            <div className="pt-2">
              <Form.Item className="mt-auto mb-2">
                <Button type="primary" htmlType="submit" size="large" block>
                  Continue
                </Button>
              </Form.Item>
              <Form.Item className="mb-0">
                <Button size="large" block onClick={() => onBackClick(1)}>
                  Back
                </Button>
              </Form.Item>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default SignupPagePetScreen;