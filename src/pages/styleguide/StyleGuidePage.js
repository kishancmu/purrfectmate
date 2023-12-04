import React from "react";
import { Button, Typography, Checkbox, Form, Input } from "antd";

const StyleGuidePage = () => {
  const { Title } = Typography;
  return (
    <div>
      <div>
        <h1>Style Guide</h1>
        {/* TBD: <h2>Colors</h2> */}
        <h2>Typography</h2>
        <Title>Heading 1</Title>
        <Title level={2}>Heading 2</Title>
        <Title level={3}>Heading 3</Title>
        <Title level={4}>Heading 4</Title>
        <Title level={5}>Heading 5</Title>
        <h2>Buttons</h2>
        <Button type="primary" size="large">Primary</Button>
        <Button size="large">Secondary</Button>
        <Button type="text">Tertiary</Button>
        <Button type="link">Link</Button>        
        <Button disabled size="large">Disabled</Button>
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
            <Form.Item
              label="Username"
              name="username"
            >
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
      </div>
    </div>
  );
};

export default StyleGuidePage;
