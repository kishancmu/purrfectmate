import { Button, Form, Select, Rate } from "antd";
import { useNavigate, useLocation } from "react-router-dom";
import SecondaryTopbar from "../../../components/secondary-topbar/SecondaryTopbar";

const RatePlayDate = () => {
  const navigate = useNavigate();

  const playdateID = useLocation().pathname.split("/")[4];

  const handleRateFinish = () => {
    const pastPlaydatesList = JSON.parse(
      localStorage.getItem("pastPlaydateList")
    );
    const playdate = pastPlaydatesList.find(
      (playdate) => playdate.id === parseInt(playdateID)
    );
    playdate.past_playdates[0].isRated = true;
    localStorage.setItem("pastPlaydateList", JSON.stringify(pastPlaydatesList));
    navigate(-1);
  };

  return (
    <div className="h-full w-full flex flex-col">
      <SecondaryTopbar title={"Rate Playdate"} showBackButton={true} />
      <div className="flex-grow min-h-0 p-4">
        <Form
          name="ratingForm"
          onFinish={(values) => {
            handleRateFinish(values);
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
                  {
                    value: "powerhouse",
                    label: "Powerhouse",
                    desc: "For pets exuding boundless energy and strength, showcasing exceptional vitality",
                  },
                  {
                    value: "superstar",
                    label: "Superstar",
                    desc: "Awarded to pets with impeccable manners and a charming demeanor, embodying true canine sophistication",
                  },
                  {
                    value: "gentleman",
                    label: "Gentlemen",
                    desc: "Conferred upon pets shining with charisma and an undeniable star quality, capturing hearts effortlessly",
                  },
                ]}
                optionRender={(option) => (
                  <div className="flex flex-col">
                    <span>{option.data.label}</span>
                    <span className="text-gray-500 whitespace-normal text-xs">
                      {option.data.desc}
                    </span>
                  </div>
                )}
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
