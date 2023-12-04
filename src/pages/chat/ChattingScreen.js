import SecondaryTopbar from "../../components/secondary-topbar/SecondaryTopbar";
import { Input, Button } from "antd";
import { useParams } from "react-router-dom";
import { BsFillSendFill } from "react-icons/bs";
const { TextArea } = Input;
function ChattingScreen() {
  const { chatID } = useParams();
  return (
    <div className="h-full w-full flex flex-col">
      <SecondaryTopbar title={chatID} showBackButton={true} />

      <div className="flex-grow min-h-0">
        <div className="h-full overflow-y-auto"></div>
      </div>
      <div className="flex p-4 items-center">
        <TextArea
          placeholder="type you message"
          size="large"
          className="rounded-tr-none rounded-br-none"
          autoSize={{
            minRows: 1,
            maxRows: 5,
          }}
        />
        <Button
          type="primary"
          icon={<BsFillSendFill className="text-xl" />}
          size="large"
          className="w-16 rounded-tl-none rounded-bl-none"
        />
      </div>
    </div>
  );
}

export default ChattingScreen;
