import { Button, Form, Input, Typography, Select, message, Upload } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useState } from "react";
import defaultPetImage from "../../assets/images/defaultPet.png";
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

const SignupPagePetScreen = ({ onContinueClick, onBackClick }) => {
  const [form] = Form.useForm();

  const [imageUrl, setImageUrl] = useState();

  const handleChange = () => {
    setImageUrl(defaultPetImage);
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
        <Title className="mt-0 text-gray-800">Tell us about your pet</Title>
        <Text className="text-base text-gray-700">
          Please add your pet profile photo below and make sure the photo is
          taken in a wel lit environment
        </Text>
        <div className="flex-grow min-h-0 mt-5">
          <Form
            name="pet_profile_info"
            form={form}
            onFinish={(values) => onContinueClick(values, 3)}
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
                    src={imageUrl}
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
                rules={[{ required: true, message: "Name is required" }]}
              >
                <Input placeholder="Enter pet name" size="large" />
              </Form.Item>
              <div className="flex">
                <Form.Item
                  name="gender"
                  label="Gender"
                  className="w-1/2 pr-2"
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
                    ]}
                  ></Select>
                </Form.Item>
                <Form.Item
                  name="size"
                  label="Size"
                  className="w-1/2 pl-2"
                  rules={[
                    {
                      required: true,
                      message: "Size is required",
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
              </div>

              <div className="flex">
                <Form.Item
                  name="breed"
                  label="Breed"
                  className="w-1/2 pr-2"
                  rules={[
                    {
                      required: true,
                      message: "Breed is required",
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
                      {
                        value: "golden_retriever",
                        label: "Golden Retriever",
                      },
                      {
                        value: "german_shepherd",
                        label: "German Shepherd",
                      },
                      { value: "bulldog", label: "Bulldog" },
                      { value: "beagle", label: "Beagle" },
                      { value: "rottweiler", label: "Rottweiler" },
                      { value: "poodle", label: "Poodle" },
                      { value: "dachshund", label: "Dachshund" },
                      { value: "chihuahua", label: "Chihuahua" },
                      {
                        value: "siberian_husky",
                        label: "Siberian Husky",
                      },
                    ]}
                  ></Select>
                </Form.Item>

                <Form.Item
                  name="age"
                  label="Age"
                  className="w-1/2 pl-2"
                  rules={[
                    {
                      required: true,
                      message: "Age is required",
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
                      { value: "4", label: "4" },
                      { value: "5", label: "5" },
                      { value: "6", label: "6" },
                      { value: "7", label: "7" },
                      { value: "8", label: "8" },
                      { value: "9", label: "9" },
                      { value: "10", label: "10" },
                      { value: "11", label: "11" },
                      { value: "12", label: "12" },
                      { value: "13", label: "13" },
                    ]}
                  ></Select>
                </Form.Item>
              </div>

              <div className="flex">
                <Form.Item
                  name="energy"
                  label="Energy Level"
                  className="w-1/2 pr-2"
                  rules={[
                    {
                      required: true,
                      message: "Energy is required",
                    },
                  ]}
                >
                  <Select
                    placeholder="Select Energy  Level"
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
                  name="vaccination"
                  label="Vaccination"
                  className="w-1/2 pl-2"
                  rules={[
                    {
                      required: true,
                      message: "Vaccination is required",
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

              <Form.Item
                name="personality"
                label="Personality"
                rules={[
                  {
                    required: true,
                    message: "Personality is required",
                  },
                ]}
              >
                <Select
                  placeholder="Select Personality"
                  allowClear
                  mode="multiple"
                  maxTagCount="responsive"
                  size="large"
                  options={[
                    { value: "Active", label: "Active" },
                    { value: "Playful", label: "Playful" },
                    { value: "Runner", label: "Runner" },
                    { value: "Shy", label: "Shy" },
                    { value: "Calm", label: "Calm" },
                    { value: "Friendly", label: "Friendly" },
                    { value: "Aggressive", label: "Aggressive" },
                    { value: "Protective", label: "Protective" },
                    { value: "Affectionate", label: "Affectionate" },
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
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default SignupPagePetScreen;
