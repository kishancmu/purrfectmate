import React, { useState } from "react";
import {
  LoadingOutlined,
  PlusOutlined,
  UserOutlined,
  CloseOutlined,
  HeartFilled,
} from "@ant-design/icons";
import { IoPersonOutline } from "react-icons/io5";
import {
  Button,
  Typography,
  Form,
  Input,
  InputNumber,
  Rate,
  Select,
  Slider,
  Space,
  Upload,
  Avatar,
  Empty,
  Segmented,
  DatePicker,
  message,
  Modal,
  Image,
  Skeleton,
  TimePicker,
} from "antd";
import PasswordStrengthBar from "react-password-strength-bar";
import appLogo from "../../assets/images/appLogo.svg";
import signupBackground from "../../assets/images/signupBackground.svg";

import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import BottomBar from "../../components/bottombar/BottomBar";

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

const StyleGuidePage = () => {
  const { Title, Text } = Typography;
  const { TextArea } = Input;
  const [password, setPassword] = useState("");
  const { Option } = Select;
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
  const formItemLayout = {
    labelCol: {
      span: 6,
    },
    wrapperCol: {
      span: 14,
    },
  };
  const normFile = (e) => {
    console.log("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: "success",
      content: "This is a success message",
    });
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="h-full w-full overflow-x-hidden overflow-y-auto p-4">
      <div>
        <h1 className="text-blue-600 text-center">Style Guide</h1>
        <h2 className="bg-blue-600 py-3 px-3 text-white">Logo</h2>
        <p className="text-blue-600  text-xl">Main Logo</p>
        <div className="h-28 w-28">
          <img className="h-full w-full" src={appLogo} alt="girl with a dog" />
        </div>

        <p className="text-blue-600  text-xl">Landing Page Image</p>
        <div className="mt-5">
          <img
            className="h-[250px] w-full"
            src={signupBackground}
            alt="girl with a dog"
          />
        </div>
        <div>
          <h2 className="bg-blue-600 py-3 px-3 text-white">Color</h2>
        </div>
        <h2 className="bg-blue-600 py-3 px-3 text-white">Typography</h2>
        <Title>Heading 1</Title>
        <Title level={2}>Heading 2</Title>
        <Title level={3}>Heading 3</Title>
        <Title level={4}>Heading 4</Title>
        <Title level={5}>Heading 5</Title>
        <h2 className="bg-blue-600 py-3 px-3 text-white">Page Layout</h2>
        <h2 className="bg-blue-600 py-3 px-3 text-white">Spacing</h2>
        <h2 className="bg-blue-600 py-3 px-3 text-white">Buttons</h2>
        <div className="flex flex-col w-fit">
          <Text className="text-blue-600  text-xl my-5">Primary Button</Text>
          <Button type="primary" size="large">
            Primary
          </Button>
          <Text className="text-blue-600  text-xl my-5">Secondary Button</Text>
          <Button size="large">Secondary</Button>
          <Text className="text-blue-600  text-xl my-5">
            Secondary Icon Button
          </Text>
          <Button
            icon={<HiOutlineAdjustmentsHorizontal className="text-2xl" />}
            size="large"
          ></Button>
          <Text className="text-blue-600  text-xl my-5">
            Tertiary Button (Danger)
          </Text>
          <Button type="text" danger size="large">
            Tertiary
          </Button>

          <Text className="text-blue-600  text-xl my-5">Danger Button</Text>
          <Button
            type="primary"
            className="w-64"
            danger
            icon={<CloseOutlined />}
            size="large"
          >
            Danger
          </Button>
          <Text className="text-blue-600  text-xl my-5">
            Success Button (Large)
          </Text>
          <Button
            type="primary"
            className="bg-green-600 w-64"
            icon={<HeartFilled />}
            size="large"
          >
            Success
          </Button>
        </div>
        <h2 className="bg-blue-600 py-3 px-3 text-white">Icons</h2>
        <h2 className="bg-blue-600 py-3 px-3 text-white">Dialogs</h2>
        <h2 className="bg-blue-600 py-3 px-3 text-white">Forms</h2>
        <div>
          <Form
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            style={{
              maxWidth: 600,
            }}
            initialValues={{
              remember: true,
            }}
            autoComplete="off"
          >
            <p className="text-blue-600 bold text-xl">Input (regular)</p>
            <Form.Item label="Username" name="username">
              <Input />
            </Form.Item>
            <p className="text-blue-600 bold text-xl">Input (error)</p>
            <Form.Item
              label="Username"
              name="username"
              validateStatus="error"
              help="Please input your username!"
            >
              <Input />
            </Form.Item>
          </Form>
        </div>
        <div>
          <p className="text-blue-600 bold text-xl">Password</p>
          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
        </div>
        <div>
          <Form
            name="validate_other"
            {...formItemLayout}
            onFinish={onFinish}
            initialValues={{
              "input-number": 33,
              "checkbox-group": ["A", "B"],
              rate: 3.5,
            }}
            style={{
              maxWidth: 600,
            }}
          >
            <p className="text-blue-600 bold text-xl">Dropdown List</p>
            <Form.Item
              name="select"
              label="Country"
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Please select your country!",
                },
              ]}
            >
              <Select placeholder="Please select a country">
                <Option value="china">India</Option>
                <Option value="usa">China</Option>
                <Option value="usa">United States of America</Option>
              </Select>
            </Form.Item>
            <p className="text-blue-600 bold text-xl">
              Multiple Select Dropdown List
            </p>
            <Form.Item
              name="select-multiple"
              label="Favorite Colors"
              rules={[
                {
                  required: true,
                  message: "Please select your favourite colors!",
                  type: "array",
                },
              ]}
            >
              <Select
                mode="multiple"
                placeholder="Please select favourite colors"
              >
                <Option value="red">Red</Option>
                <Option value="green">Green</Option>
                <Option value="blue">Blue</Option>
              </Select>
            </Form.Item>
            <p className="text-blue-600 bold text-xl">Numerical Input</p>
            <Form.Item label="Age">
              <Form.Item name="input-number" noStyle>
                <InputNumber min={18} max={100} />
              </Form.Item>
              <span
                className="ant-form-text"
                style={{
                  marginLeft: 8,
                }}
              >
                years
              </span>
            </Form.Item>
            <p className="text-blue-600 bold text-xl">Slider</p>
            <Form.Item className="px-2" label="Range(miles)" name="range">
              <Slider min={1} max={100} />
            </Form.Item>
            <p className="text-blue-600 bold text-xl">Rating</p>
            <Form.Item name="rate" label="Rate your driver">
              <Rate />
            </Form.Item>
            <p className="text-blue-600 bold text-xl">Upload Photo</p>
            <Upload
              name="avatar"
              listType="picture-card"
              className="avatar-uploader"
              showUploadList={false}
              action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
              beforeUpload={beforeUpload}
              onChange={handleChange}
            >
              {imageUrl ? (
                <img
                  src={imageUrl}
                  alt="avatar"
                  style={{
                    width: "100%",
                  }}
                />
              ) : (
                uploadButton
              )}
            </Upload>
            <div>
              <p className="text-blue-600 bold text-xl">Date Picker</p>
              <DatePicker />
            </div>
            <div>
              <p className="text-blue-600 bold text-xl">Time Picker</p>
              <Form.Item
                label="Time"
                name="time"
                className="basis-1/2"
                rules={[{ required: true, message: "Time is required" }]}
              >
                <TimePicker format="HH:mm" className="w-full" size="large" />
              </Form.Item>
            </div>
            <div>
              <p className="text-blue-600 bold text-xl">Text Area</p>
              <TextArea
                rows={4}
                placeholder="Fill in the description of your problem"
                maxLength={6}
              />
            </div>
          </Form>
        </div>
        <div>
          <h2 className="bg-blue-600 py-3 px-3 text-white">Loader Screens</h2>
          <div>
            <p className="text-blue-600 bold text-xl">Empty</p>
            <Empty />
          </div>
        </div>
        <div>
          <p className="text-blue-600 bold text-xl">Skeleton</p>
          <Skeleton.Image active="true" className="w-16 h-16" />
          <Skeleton.Button
            active="true"
            size="large"
            shape="square"
            className="ml-2 h-6"
          />
          <Skeleton.Avatar active="true" size="default" shape="circle" />
        </div>
        <h2 className="bg-blue-600 py-3 px-3 text-white">Design Patterns</h2>
        <p className="text-blue-600 my-4 text-xl">Password Strength Meter</p>
        <div className="flex flex-col w-60">
          <Input.Password
            placeholder="input password"
            className="mb-2"
            size="large"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <PasswordStrengthBar
            password={password}
            className="passwordStrength"
            scoreWordClassName="sds"
          />
        </div>

        <p className="text-blue-600 my-4 text-xl">Input Feedback</p>
        <Form
          name="normal_login"
          form={form}
          layout="vertical"
          scrollToFirstError={true}
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
        </Form>

        <p className="text-blue-600 my-4 text-xl">Navigation Tabs</p>
        <div className="w-fit">
          <BottomBar />
        </div>

        <p className="text-blue-600 my-4 text-xl">Search Filters</p>

        <div className="flex justify-start items-center">
          <IoPersonOutline className="text-2xl mr-1" />
          <Text className="text-xl font-semibold">Owner Settings</Text>
        </div>

        <div className="flex mt-4">
          <Form.Item name="owner_gender" label="Gender" className="w-1/2 pr-2">
            <Select
              placeholder="Select gender"
              allowClear
              mode="multiple"
              maxTagCount="responsive"
              size="large"
              options={[
                { value: "Male", label: "Male" },
                { value: "Female", label: "Female" },
                { value: "Others", label: "Others" },
              ]}
            ></Select>
          </Form.Item>
          <Form.Item className="w-1/2 px-2" label="Age(18-80)" name="owner_age">
            <Slider min={18} max={80} />
          </Form.Item>
        </div>

        <div>
          <h2 className="bg-blue-600 py-3 px-3 text-white">Miscellaneous</h2>
          <div>
            <p className="text-blue-600 bold text-xl">Avatar</p>
            <Space wrap size={16}>
              <Avatar shape="square" size={64} icon={<UserOutlined />} />
            </Space>
          </div>
          <div>
            <p className="text-blue-600 bold text-xl">Modal</p>
            <Button type="primary" onClick={showModal}>
              Open Modal
            </Button>
            <Modal
              title="Basic Modal"
              open={isModalOpen}
              onOk={handleOk}
              onCancel={handleCancel}
            >
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
            </Modal>
          </div>
          <div>
            <p className="text-blue-600 bold text-xl">Success Message</p>
            {contextHolder}
            <Space>
              <Button onClick={success}>Success</Button>
            </Space>
          </div>
          <div>
            <p className="text-blue-600 bold text-xl">Segment</p>
            <Segmented
              options={[123, 456, "longtext-longtext-longtext-longtext"]}
              block
            />
          </div>
          <div>
            <p className="text-blue-600 bold text-xl">Image</p>
            <Image
              width={200}
              src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StyleGuidePage;
