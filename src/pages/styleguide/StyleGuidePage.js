import React, { useState } from "react";
import { InboxOutlined, UploadOutlined, UserOutlined } from "@ant-design/icons";
import {
  Button,
  Typography,
  Checkbox,
  Form,
  Input,
  Col,
  InputNumber,
  Radio,
  Rate,
  Row,
  Select,
  Slider,
  Space,
  Switch,
  Upload,
  Avatar,
  Empty,
  Segmented,
  DatePicker,
  message,
  Modal,
  Image,
  Skeleton,
} from "antd";

const StyleGuidePage = () => {
  const { Title } = Typography;
  const { TextArea } = Input;
  const { Option } = Select;
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
    <div>
      <div>
        <h1>Style Guide</h1>
        <div>
          <h2>Colors</h2>
          <div></div>
        </div>
        <h2>Typography</h2>
        <Title>Heading 1</Title>
        <Title level={2}>Heading 2</Title>
        <Title level={3}>Heading 3</Title>
        <Title level={4}>Heading 4</Title>
        <Title level={5}>Heading 5</Title>
        <h2>Buttons</h2>
        <Button type="primary" size="large">
          Primary
        </Button>
        <Button size="large">Secondary</Button>
        <Button type="text">Tertiary</Button>
        <Button type="link">Link</Button>
        <Button disabled size="large">
          Disabled
        </Button>
        <h2>Inputs</h2>
        <div>
          <p>Checkboxes</p>
          <Checkbox>Checkbox (active)</Checkbox>
          <Checkbox defaultChecked disabled>
            Checkbox (inactive)
          </Checkbox>
        </div>
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
            <p>Input (regular)</p>
            <Form.Item label="Username" name="username">
              <Input />
            </Form.Item>
            <p>Input (error)</p>
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
          <p>Password</p>
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
          <p>Form</p>
          <Form
            name="validate_other"
            {...formItemLayout}
            onFinish={onFinish}
            initialValues={{
              "input-number": 3,
              "checkbox-group": ["A", "B"],
              rate: 3.5,
            }}
            style={{
              maxWidth: 600,
            }}
          >
            <Form.Item label="Plain Text">
              <span className="ant-form-text">China</span>
            </Form.Item>
            <Form.Item
              name="select"
              label="Select"
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Please select your country!",
                },
              ]}
            >
              <Select placeholder="Please select a country">
                <Option value="china">China</Option>
                <Option value="usa">U.S.A</Option>
              </Select>
            </Form.Item>

            <Form.Item
              name="select-multiple"
              label="Select[multiple]"
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

            <Form.Item label="InputNumber">
              <Form.Item name="input-number" noStyle>
                <InputNumber min={1} max={10} />
              </Form.Item>
              <span
                className="ant-form-text"
                style={{
                  marginLeft: 8,
                }}
              >
                machines
              </span>
            </Form.Item>

            <Form.Item name="switch" label="Switch" valuePropName="checked">
              <Switch />
            </Form.Item>

            <Form.Item name="slider" label="Slider">
              <Slider
                marks={{
                  0: "A",
                  20: "B",
                  40: "C",
                  60: "D",
                  80: "E",
                  100: "F",
                }}
              />
            </Form.Item>

            <Form.Item name="radio-group" label="Radio.Group">
              <Radio.Group>
                <Radio value="a">item 1</Radio>
                <Radio value="b">item 2</Radio>
                <Radio value="c">item 3</Radio>
              </Radio.Group>
            </Form.Item>

            <Form.Item
              name="radio-button"
              label="Radio.Button"
              rules={[
                {
                  required: true,
                  message: "Please pick an item!",
                },
              ]}
            >
              <Radio.Group>
                <Radio.Button value="a">item 1</Radio.Button>
                <Radio.Button value="b">item 2</Radio.Button>
                <Radio.Button value="c">item 3</Radio.Button>
              </Radio.Group>
            </Form.Item>

            <Form.Item name="checkbox-group" label="Checkbox.Group">
              <Checkbox.Group>
                <Row>
                  <Col span={8}>
                    <Checkbox
                      value="A"
                      style={{
                        lineHeight: "32px",
                      }}
                    >
                      A
                    </Checkbox>
                  </Col>
                  <Col span={8}>
                    <Checkbox
                      value="B"
                      style={{
                        lineHeight: "32px",
                      }}
                      disabled
                    >
                      B
                    </Checkbox>
                  </Col>
                  <Col span={8}>
                    <Checkbox
                      value="C"
                      style={{
                        lineHeight: "32px",
                      }}
                    >
                      C
                    </Checkbox>
                  </Col>
                  <Col span={8}>
                    <Checkbox
                      value="D"
                      style={{
                        lineHeight: "32px",
                      }}
                    >
                      D
                    </Checkbox>
                  </Col>
                  <Col span={8}>
                    <Checkbox
                      value="E"
                      style={{
                        lineHeight: "32px",
                      }}
                    >
                      E
                    </Checkbox>
                  </Col>
                  <Col span={8}>
                    <Checkbox
                      value="F"
                      style={{
                        lineHeight: "32px",
                      }}
                    >
                      F
                    </Checkbox>
                  </Col>
                </Row>
              </Checkbox.Group>
            </Form.Item>

            <Form.Item name="rate" label="Rate">
              <Rate />
            </Form.Item>

            <Form.Item
              name="upload"
              label="Upload"
              valuePropName="fileList"
              getValueFromEvent={normFile}
              extra="Additional information"
            >
              <Upload name="logo" action="/upload.do" listType="picture">
                <Button icon={<UploadOutlined />}>Click to upload</Button>
              </Upload>
            </Form.Item>
            <div>
              <p>Date Picker</p>
              <DatePicker />
            </div>
            <div>
              <p>Text Area</p>
              <TextArea rows={4} placeholder="maxLength is 6" maxLength={6} />
            </div>
            <Form.Item label="Dragger">
              <Form.Item
                name="dragger"
                valuePropName="fileList"
                getValueFromEvent={normFile}
                noStyle
              >
                <Upload.Dragger name="files" action="/upload.do">
                  <p className="ant-upload-drag-icon">
                    <InboxOutlined />
                  </p>
                  <p className="ant-upload-text">
                    Click or drag file to this area to upload
                  </p>
                  <p className="ant-upload-hint">
                    Support for a single or bulk upload.
                  </p>
                </Upload.Dragger>
              </Form.Item>
            </Form.Item>
            <Form.Item
              wrapperCol={{
                span: 12,
                offset: 6,
              }}
            >
              <Space>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
                <Button htmlType="reset">Reset</Button>
              </Space>
            </Form.Item>
          </Form>
        </div>
        <div>
          <p>Avatar</p>
          <Space wrap size={16}>
            <Avatar shape="square" size={64} icon={<UserOutlined />} />
          </Space>
        </div>
        <div>
          <p>Empty</p>
          <Empty />
        </div>
        <div>
          <p>Segment</p>
          <Segmented
            options={[123, 456, "longtext-longtext-longtext-longtext"]}
            block
          />
        </div>
        <div>
          <p>Success Message</p>
          {contextHolder}
          <Space>
            <Button onClick={success}>Success</Button>
          </Space>
        </div>
        <div>
          <p>Modal</p>
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
          <p>Image</p>
          <Image
            width={200}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          />
        </div>
        <div>
          <p>Skeleton</p>
          <Skeleton.Image active="true" className="w-16 h-16" />
          <Skeleton.Button
            active="true"
            size="large"
            shape="square"
            className="ml-2 h-6"
          />
          <Skeleton.Avatar active="true" size="default" shape="circle" />
        </div>
      </div>
    </div>
  );
};

export default StyleGuidePage;
