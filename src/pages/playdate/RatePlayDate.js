import { Button, Form, Typography, Select, Rate } from "antd";
import { useNavigate } from "react-router-dom";
import SecondaryTopbar from "../../components/secondary-topbar/SecondaryTopbar";
const { Title, Text } = Typography;

const RatePlayDate = () => {
  const navigate = useNavigate();
  return (
    <div className="h-full w-full flex flex-col">
      <SecondaryTopbar title={"Rate Playdate"} showBackButton={true} />
      <Title className="mt-4 px-4" level={3}>
        Rate your playdate with Coco
      </Title>

      <div className="flex-grow min-h-0 p-4">
        <Form
          name="ratingForm"
          onFinish={(values) => {
            console.log(values);
            navigate("/main/playdate");
          }}
          layout="vertical"
          scrollToFirstError={true}
          className="flex flex-col h-full"
        >
          <div className="flex-grow min-h-0 overflow-y-auto">
            <Form.Item
              label="Rate your experience"
              name="rating"
              rules={[{ required: true, message: "Rating is required" }]}
            >
              <Rate
                style={{
                  fontSize: 36,
                }}
              />
            </Form.Item>

            <Form.Item
              name="badges"
              label="Select Badges you would like to give"
            >
              <Select
                placeholder="Select one or multiple badges"
                allowClear
                mode="multiple"
                size="large"
                options={[
                  { value: "powerhouse", label: "Powerhouse" },
                  { value: "superstar", label: "Superstar" },
                  { value: "gentleman", label: "Gentlemen" },
                ]}
              ></Select>
            </Form.Item>
          </div>
          <div className="mt-auto">
            <Form.Item className="mb-0">
              <Button type="primary" htmlType="submit" size="large" block>
                Submit
              </Button>
            </Form.Item>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default RatePlayDate;
