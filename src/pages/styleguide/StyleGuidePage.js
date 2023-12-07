import React, { useState } from "react";
import {
  LoadingOutlined,
  PlusOutlined,
  UserOutlined,
  CloseOutlined,
  HeartFilled,
} from "@ant-design/icons";

import { FaDog } from "react-icons/fa";
import Topbar from "../../components/topbar/Topbar";
import {
  IoPaw,
  IoPawOutline,
  IoChatbubblesOutline,
  IoChatbubbles,
  IoPersonCircleOutline,
  IoPersonCircle,
  IoChevronForward,
  IoPersonOutline,
  IoLocationOutline,
  IoTimeOutline,
  IoCalendarNumberOutline,
  IoHeart,
  IoNotifications,
} from "react-icons/io5";

import { PiBoneFill } from "react-icons/pi";
import { FaShieldDog } from "react-icons/fa6";
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
import SecondaryTopbar from "../../components/secondary-topbar/SecondaryTopbar";

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
        {/* <div className="mt-5">
          <img
            className="h-[250px] w-full"
            src={signupBackground}
            alt="girl with a dog"
          />
        </div> */}
        <div>
          <h2 className="bg-blue-600 py-3 px-3 text-white">Color</h2>
          <div className="flex flex-wrap gap-4">
            <div className="flex flex-col ">
              <div className="bg-[#2563EB] w-28 h-28 "></div>
              <p>#2563EB</p>
            </div>
            <div className="flex flex-col ">
              <div className="bg-[#1677FF] w-28 h-28 "></div>
              <p>#1677FF</p>
            </div>
            <div className="flex flex-col ">
              <div className="bg-[#3B82F6] w-28 h-28 "></div>
              <p>#3B82F6</p>
            </div>
            <div className="flex flex-col ">
              <div className="bg-[#DBEAFE] w-28 h-28 "></div>
              <p>#DBEAFE</p>
            </div>

            <div className="flex flex-col ">
              <div className="bg-[#030712] w-28 h-28 "></div>
              <p>#030712</p>
            </div>
            <div className="flex flex-col ">
              <div className="bg-[#111827] w-28 h-28 "></div>
              <p>#111827</p>
            </div>
            <div className="flex flex-col ">
              <div className="bg-[#000000E0] w-28 h-28 "></div>
              <p>#000000E0</p>
            </div>
            <div className="flex flex-col ">
              <div className="bg-[#4B5563] w-28 h-28 "></div>
              <p>#4B5563</p>
            </div>

            <div className="flex flex-col ">
              <div className="bg-[#EFE7EB] w-28 h-28 "></div>
              <p>#EFE7EB</p>
            </div>
            <div className="flex flex-col ">
              <div className="bg-[#F3F4F6] w-28 h-28 "></div>
              <p>#F3F4F6</p>
            </div>

            <div className="flex flex-col ">
              <div className="bg-[#E53935] w-28 h-28 "></div>
              <p>#E53935</p>
            </div>
            <div className="flex flex-col ">
              <div className="bg-[#FF4D4F] w-28 h-28 "></div>
              <p>#FF4D4F</p>
            </div>
            <div className="flex flex-col ">
              <div className="bg-[#FF9800] w-28 h-28 "></div>
              <p>#FF9800</p>
            </div>
            <div className="flex flex-col ">
              <div className="bg-[#F9A825] w-28 h-28 "></div>
              <p>#F9A825</p>
            </div>

            <div className="flex flex-col ">
              <div className="bg-[#16A34A] w-28 h-28 "></div>
              <p>#16A34A</p>
            </div>
          </div>
        </div>
        <h2 className="bg-blue-600 py-3 px-3 text-white">Typography</h2>
        <Title>Heading 1</Title>
        <Title level={2}>Heading 2</Title>
        <Title level={3}>Heading 3</Title>
        <Title level={4}>Heading 4</Title>
        <Title level={5}>Heading 5</Title>
        <h2 className="bg-blue-600 py-3 px-3 text-white">Page Layout</h2>
        <div className="h-[500px] w-[300px] border border-solid">
          <div className="h-[10%] bg-blue-200 flex justify-center items-center">
            Topbar
          </div>
          <div className="h-[10%] bg-blue-300 flex justify-center items-center">
            Secondary Topbar
          </div>
          <div className="h-[70%] bg-blue-400 flex justify-center items-center">
            Body
          </div>
          <div className="h-[10%] bg-blue-500 flex justify-center items-center">
            Bottom Bar
          </div>
        </div>
        <h2 className="bg-blue-600 py-3 px-3 text-white">Spacing</h2>
        <div className="flex gap-5">
          <span className="text-blue-600">Class</span>
          <span className="text-blue-600">Size</span>
          <span className="text-blue-600">Example</span>
        </div>
        <div className="flex gap-5">
          <span>m/p[axis]-0</span>
          <span>0px</span>
          <span></span>
        </div>
        <div className="flex gap-5">
          <span>m/p[axis]-1</span>
          <span>4px</span>
          <span className="w-[4px] h-[4px] bg-red-400"></span>
        </div>
        <div className="flex gap-5">
          <span>m/p[axis]-2</span>
          <span>8px</span>
          <span className="w-[8px] h-[8px] bg-red-400"></span>
        </div>
        <div className="flex gap-5">
          <span>m/p[axis]-5</span>
          <span>12px</span>
          <span className="w-[12px] h-[12px] bg-red-400"></span>
        </div>
        <div className="flex gap-5">
          <span>m/p[axis]-4</span>
          <span>16px</span>
          <span className="w-[16px] h-[16px] bg-red-400"></span>
        </div>
        <div className="flex gap-5">
          <span>m/p[axis]-5</span>
          <span>20px</span>
          <span className="w-[20px] h-[20px] bg-red-400"></span>
        </div>
        <span className=" block mt-2">
          p means padding, m means margin and axis are right, left, top, and
          bottom{" "}
        </span>
        <h2 className="bg-blue-600 py-3 px-3 text-white">Buttons</h2>
        <div className="flex flex-col w-fit">
          <p className="text-blue-600  text-xl my-5">Primary Button</p>
          <Button type="primary" size="large">
            Primary
          </Button>
          <p className="text-blue-600  text-xl my-5">Secondary Button</p>
          <Button size="large">Secondary</Button>
          <p className="text-blue-600  text-xl my-5">Secondary Icon Button</p>
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
        <IoPaw className="text-2xl" /> <IoPawOutline className="text-2xl" />
        <IoChatbubblesOutline className="text-2xl" />
        <IoChatbubbles className="text-2xl" />
        <IoPersonCircleOutline className="text-2xl" />
        <IoPersonCircle className="text-2xl" /> <IoHeart className="text-2xl" />{" "}
        <PiBoneFill className="text-2xl" />
        <IoChevronForward className="text-2xl" />
        <FaShieldDog className="text-2xl" /> <FaDog className="text-2xl" />
        <IoLocationOutline className="text-2xl" />
        <IoTimeOutline className="text-2xl" />
        <IoCalendarNumberOutline className="text-2xl" />
        <HiOutlineAdjustmentsHorizontal className="text-2xl" />
        <IoNotifications className="text-2xl" />
        <CloseOutlined className="text-2xl" />
        <h2 className="bg-blue-600 py-3 px-3 text-white">Dialogs</h2>
        <div>
          <p className="text-blue-600 text-xl">Modal</p>
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
          <p className="text-blue-600 text-xl">Success Message</p>
          {contextHolder}
          <Space>
            <Button onClick={success}>Success</Button>
          </Space>
        </div>
        <h2 className="bg-blue-600 py-3 px-3 text-white">Forms</h2>
        <div>
          <Form
            name="basic"
            layout="vertical"
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
            <p className="text-blue-600 text-xl">Input (regular)</p>
            <Form.Item label="Username" name="username">
              <Input />
            </Form.Item>
            <p className="text-blue-600 text-xl">Input (error)</p>
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
          <p className="text-blue-600 text-xl">Password</p>
          <Form name="basic" layout="vertical">
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
          </Form>
        </div>
        <div>
          <Form
            name="validate_other"
            {...formItemLayout}
            layout="vertical"
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
            <p className="text-blue-600 text-xl">Dropdown List</p>
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
            <p className="text-blue-600 text-xl">
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

            <p className="text-blue-600 text-xl">Numerical Input</p>
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
            <p className="text-blue-600 text-xl">Slider</p>
            <Form.Item className="px-2" label="Range (miles)" name="range">
              <Slider min={1} max={100} />
            </Form.Item>
            <p className="text-blue-600 text-xl">Rating</p>
            <Form.Item name="rate" label="Rate your playdate">
              <Rate />
            </Form.Item>
            <p className="text-blue-600 text-xl">Upload Photo</p>
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
              <p className="text-blue-600 text-xl">Date Picker</p>
              <DatePicker />
            </div>
            <div>
              <p className="text-blue-600 text-xl">Time Picker</p>
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
              <p className="text-blue-600 text-xl">Text Area</p>
              <TextArea
                rows={4}
                placeholder="Fill in the description of your problem"
                maxLength={6}
              />
            </div>
          </Form>
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
          <h2 className="bg-blue-600 py-3 px-3 text-white">Loader Screens</h2>
          <div>
            <p className="text-blue-600 text-xl">Empty</p>
            <Empty />
          </div>
        </div>
        <p className="text-blue-600 text-xl">Skeleton</p>
        <div className="flex items-center ">
          <Skeleton.Image active="true" className="w-16 h-16" />
          <Skeleton.Button
            active="true"
            size="large"
            shape="square"
            className="ml-2 h-6"
          />
          <Skeleton.Avatar
            className="ml-4"
            active="true"
            size="default"
            shape="circle"
          />
        </div>
        <div>
          <h2 className="bg-blue-600 py-3 px-3 text-white">Miscellaneous</h2>
          <div>
            <p className="text-blue-600 text-xl">Avatar</p>
            <Space wrap size={16}>
              <Avatar shape="square" size={64} icon={<UserOutlined />} />
            </Space>
          </div>

          <div>
            <p className="text-blue-600 text-xl">Segment</p>
            <Segmented
              options={[123, 456, "longtext-longtext-longtext-longtext"]}
              block
            />
          </div>
          <div>
            <p className="text-blue-600 text-xl">Image</p>
            <Image
              width={200}
              src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            />
          </div>

          <p className="text-blue-600 text-xl">Topbar</p>
          <Topbar />
          <p className="text-blue-600 text-xl">Secondary Topbar</p>
          <SecondaryTopbar title="Secondary Topbar" showBackButton={true} />
        </div>
      </div>
    </div>
  );
};

export default StyleGuidePage;
