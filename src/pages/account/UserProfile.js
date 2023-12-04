import { useState } from "react";
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

const UserProfile = ({ onContinueClick, onBackClick }) => {
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
    <div className="h-full w-full flex flex-col">
      <SecondaryTopbar title={"Your Profile"} showBackButton={true} />

      <div className="flex-grow min-h-0 mt-4 px-4">
        <Form
          name="user_profile"
          form={form}
          onFinish={(values) => onContinueClick(values, 4)}
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
              rules={[{ required: true, message: "Name is required" }]}
            >
              <Input placeholder="Enter name" size="large" />
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
              extra="We will need your locaiton to suggest nearby pet owners"
            >
              <Input placeholder="Enter location" size="large" />
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
