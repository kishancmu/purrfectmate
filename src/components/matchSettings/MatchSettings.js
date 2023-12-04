import {
  Tabs,
  Typography,
  Input,
  Button,
  Divider,
  Select,
  Form,
  Slider,
} from "antd";
import { useNavigate } from "react-router-dom";
import SecondaryTopbar from "../../components/secondary-topbar/SecondaryTopbar";

const { Text } = Typography;

const MatchSettings = () => {
  const navigate = useNavigate();
  const onFormSubmit = (values) => {
    console.log(values);
    navigate(-1);
  };
  return (
    <div className="h-full w-full">
      <div className="h-full w-full flex flex-col">
        <SecondaryTopbar title={"Match Settings"} showBackButton={true} />
        <div className="flex-grow min-h-0 p-4">
          <Form
            name="normal_login"
            onFinish={onFormSubmit}
            layout="vertical"
            scrollToFirstError={true}
            className="flex flex-col h-full"
          >
            <div className="flex-grow min-h-0 overflow-y-auto">
              <div className="flex gap-4">
                <Form.Item
                  className="basis-1/2"
                  label="Location"
                  name="location"
                >
                  <Input placeholder="Enter name" size="large" />
                </Form.Item>
                <Form.Item
                  className="basis-1/2"
                  label="Range(miles)"
                  name="range"
                >
                  <Slider />
                </Form.Item>
              </div>

              <Divider />
              <Text className="text-xl">Pet Owners</Text>
              <div className="flex gap-4 mt-4">
                <Form.Item
                  name="owner_gender"
                  label="Gender"
                  className="basis-1/2"
                >
                  <Select
                    placeholder="Select gender"
                    allowClear
                    mode="multiple"
                    maxTagCount="responsive"
                    size="large"
                    options={[
                      { value: "male", label: "Male" },
                      { value: "female", label: "Female" },
                      { value: "other", label: "Others" },
                    ]}
                  ></Select>
                </Form.Item>
                <Form.Item
                  className="basis-1/2"
                  label="Age(18-80)"
                  name="owner_age"
                >
                  <Slider />
                </Form.Item>
              </div>

              <Divider />
              <Text className="text-xl">Pet Settings</Text>

              <div className="flex gap-3 mt-3">
                <Form.Item name="gender" className="basis-1/2" label="Gender">
                  <Select
                    placeholder="Select gender"
                    allowClear
                    mode="multiple"
                    maxTagCount="responsive"
                    size="large"
                    options={[
                      { value: "male", label: "Male" },
                      { value: "female", label: "Female" },
                    ]}
                  ></Select>
                </Form.Item>
                <Form.Item name="size" className="basis-1/2" label="Size">
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

              <div className="flex gap-4 mt-4">
                <Form.Item name="breed" className="basis-1/2" label="Breed">
                  <Select
                    placeholder="Select breed"
                    allowClear
                    mode="multiple"
                    maxTagCount="responsive"
                    size="large"
                    options={[
                      { value: "pug", label: "Pug" },
                      { value: "boxer", label: "Boxer" },
                    ]}
                  ></Select>
                </Form.Item>
                <Form.Item
                  name="vaccination"
                  label="Vaccination"
                  className="basis-1/2"
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
                      { value: "active", label: "Active" },
                      { value: "playful", label: "Playful" },
                      { value: "goofy", label: "Goofy" },
                    ]}
                  ></Select>
                </Form.Item>
              </div>
              <Form.Item
                className="basis-1/2 px-2"
                label="Age (Less than 1 year - 30)"
                name="age"
              >
                <Slider />
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
    </div>
  );
};

export default MatchSettings;
