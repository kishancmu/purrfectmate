import { useState } from "react";
import defaultUserImage from "../../assets/images/defaultUser.png";
import SecondaryTopbar from "../../components/secondary-topbar/SecondaryTopbar";
import {
  Button,
  Form,
  Input,
  Select,
  message,
  Upload,
  InputNumber,
} from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

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

const UserProfile = () => {
  const [form] = Form.useForm();
  const [imageUrl, setImageUrl] = useState(defaultUserImage);
  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate();
  const userDetails = JSON.parse(localStorage.getItem("userProfileDetails"));

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

  const success = () => {
    messageApi
      .open({
        type: "loading",
        content: "Saving your changes..",
        duration: 1,
      })
      .then(() => message.success("Profile saved successfully", 1))
      .then(() => navigate(-1));
  };

  return (
    <div className="h-full w-full flex flex-col">
      {contextHolder}
      <SecondaryTopbar title={"Your Profile"} showBackButton={true} />
      <div className="flex-grow min-h-0 mt-4 px-4">
        <Form
          name="user_profile"
          form={form}
          initialValues={userDetails}
          onFinish={(values) => {
            console.log(values);
            localStorage.setItem("userProfileDetails", JSON.stringify(values));
            success();
          }}
          layout="vertical"
          scrollToFirstError={true}
          className="flex flex-col h-full"
        >
          <div className="flex-grow min-h-0 overflow-y-auto">
            <div>
              <Upload
                name="avatar"
                listType="picture-card"
                className="avatar-uploader text-center"
                showUploadList={false}
                action=""
                beforeUpload={beforeUpload}
                onChange={handleChange}
              >
                {imageUrl ? (
                  <img
                    src={imageUrl}
                    alt="avatar"
                    className="rounded-lg"
                    style={{ width: "100%", height: "100%" }}
                  />
                ) : (
                  uploadButton
                )}
              </Upload>
            </div>

            <Form.Item
              label="Name"
              name="name"
              rules={[{ required: true, message: "Name is required" }]}
            >
              <Input placeholder="Enter your full name" size="large" />
            </Form.Item>

            <div className="flex gap-4">
              <Form.Item
                label="Age"
                name="age"
                className="basis-1/2"
                rules={[{ required: true, message: "Age is required" }]}
              >
                <InputNumber
                  min={18}
                  max={120}
                  defaultValue={0}
                  size="large"
                  className="w-full"
                />
              </Form.Item>

              <Form.Item
                name="gender"
                label="Gender"
                className="basis-1/2"
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
              rules={[{ required: true, message: "Location is required" }]}
              extra="We'll use this to find pet owners near you. You can enter city and state"
            >
              <Input placeholder="City, State" size="large" />
            </Form.Item>
          </div>

          <div className="pt-2">
            <Form.Item className="mt-auto mb-2">
              <Button type="primary" htmlType="submit" size="large" block>
                Save
              </Button>
            </Form.Item>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default UserProfile;
