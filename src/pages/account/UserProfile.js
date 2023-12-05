import { useState, useEffect } from "react";
import defaultUserImage from "../../assets/images/defaultUser.png";
import SecondaryTopbar from "../../components/secondary-topbar/SecondaryTopbar";
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
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
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

const UserProfile = () => {
  const [form] = Form.useForm();
  const [imageUrl, setImageUrl] = useState(defaultUserImage);
  const [messageApi, contextHolder] = message.useMessage();
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
        content: "Saving in progress..",
        duration: 1.5,
      })
      .then(() => message.success("Profile saved successfully", 2.5));
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
              <Input placeholder="John Doe" size="large" />
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
              extra="We'll use this to find pet owners near you. You can enter your address or just the city and state"
            >
              <Input placeholder="Mountain View, CA" size="large" />
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
