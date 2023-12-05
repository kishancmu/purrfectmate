import {
  Typography,
  Input,
  Button,
  Divider,
  Select,
  Form,
  Slider,
  message,
  Modal,
} from "antd";

import SecondaryTopbar from "../../components/secondary-topbar/SecondaryTopbar";
import { useContext, useEffect, useState } from "react";
import appContext from "../../utils/appContext";
const { Text } = Typography;

const MatchSettings = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const { notifyFilterLimit, setNotifyFilterLimit } = useContext(appContext);
  const [open, setOpen] = useState(false);
  const matchSettings = JSON.parse(localStorage.getItem("matchSettings"));
  const onFormSubmit = (values) => {
    console.log(values);
    localStorage.setItem("matchSettings", JSON.stringify(values));
    success();
  };

  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setOpen(false);
    setNotifyFilterLimit(true);
  };
  const handleCancel = () => {
    setOpen(false);
  };

  useEffect(() => {
    console.log(notifyFilterLimit);
    if (!notifyFilterLimit) {
      showModal();
    }
  }, []);

  const success = () => {
    messageApi
      .open({
        type: "loading",
        content: "Saving in progress..",
        duration: 1.5,
      })
      .then(() => message.success("Match Settings save successfully", 2.5));
  };
  return (
    <div className="h-full w-full">
      {contextHolder}
      <Modal
        open={open}
        title="Feature Coming Soon"
        onOk={handleOk}
        centered
        onCancel={handleCancel}
        footer={[
          <Button key="submit" type="primary" onClick={handleOk}>
            Ok
          </Button>,
        ]}
      >
        <p>
          Please note currently you can only filter profiles based on Pet's
          Gender and Pet's age in Pet Settings Section. However, feel free to
          look through other available filters.
        </p>
      </Modal>
      <div className="h-full w-full flex flex-col">
        <SecondaryTopbar title={"Match Settings"} showBackButton={true} />
        <div className="flex-grow min-h-0 p-4">
          <Form
            name="match_settings"
            onFinish={onFormSubmit}
            initialValues={matchSettings}
            layout="vertical"
            scrollToFirstError={true}
            className="flex flex-col h-full"
          >
            <div className="flex-grow min-h-0 overflow-y-auto">
              <div className="flex">
                <Form.Item
                  className="w-1/2 pr-2"
                  label="Location"
                  name="location"
                >
                  <Input placeholder="Mountain View" size="large" />
                </Form.Item>
                <Form.Item
                  className="w-1/2 px-2"
                  label="Range(miles)"
                  name="range"
                >
                  <Slider min={1} max={100} />
                </Form.Item>
              </div>

              <Divider />
              <Text className="text-xl">Pet Owner Setting</Text>
              <div className="flex mt-4">
                <Form.Item
                  name="owner_gender"
                  label="Gender"
                  className="w-1/2 pr-2"
                >
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
                <Form.Item
                  className="w-1/2 px-2"
                  label="Age(18-80)"
                  name="owner_age"
                >
                  <Slider min={18} max={80} />
                </Form.Item>
              </div>

              <Divider />
              <Text className="text-xl">Pet Settings</Text>

              <div className="flex mt-3">
                <Form.Item name="gender" className="w-1/2 pr-2" label="Gender">
                  <Select
                    placeholder="Select gender"
                    allowClear
                    mode="multiple"
                    maxTagCount="responsive"
                    size="large"
                    options={[
                      { value: "Male", label: "Male" },
                      { value: "Female", label: "Female" },
                    ]}
                  ></Select>
                </Form.Item>
                <Form.Item name="size" className="w-1/2 pl-2" label="Size">
                  <Select
                    placeholder="Select size"
                    allowClear
                    mode="multiple"
                    maxTagCount="responsive"
                    size="large"
                    options={[
                      { value: "small", label: "Small" },
                      { value: "medium", label: "Medium" },
                      { value: "large", label: "Large" },
                    ]}
                  ></Select>
                </Form.Item>
              </div>

              <div className="flex mt-4">
                <Form.Item name="breed" className="w-1/2 pr-2" label="Breed">
                  <Select
                    placeholder="Select breed"
                    allowClear
                    mode="multiple"
                    maxTagCount="responsive"
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
                  name="vaccination"
                  label="Vaccination"
                  className="w-1/2 pl-2"
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

              <div className="flex gap-4 mt-4">
                <Form.Item
                  name="energy"
                  label="Energy Level"
                  className="basis-1/2"
                >
                  <Select
                    placeholder="Select Energy Level"
                    allowClear
                    mode="multiple"
                    maxTagCount="responsive"
                    size="large"
                    options={[
                      { value: "low", label: "Low" },
                      { value: "medium", label: "Medium" },
                      { value: "high", label: "High" },
                    ]}
                  ></Select>
                </Form.Item>
                <Form.Item
                  className="basis-1/2 px-2"
                  label="Age "
                  name="age"
                  extra="Less than 1 year to 15"
                >
                  <Slider min={1} max={15} />
                </Form.Item>
              </div>

              <Form.Item
                name="personality"
                label="Personality"
                className="basis-1/2"
              >
                <Select
                  placeholder="Select Personality"
                  allowClear
                  size="large"
                  mode="multiple"
                  maxTagCount="responsive"
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
              <Form.Item className="mt-auto mb-0">
                <Button type="primary" htmlType="submit" size="large" block>
                  Save
                </Button>
              </Form.Item>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default MatchSettings;
