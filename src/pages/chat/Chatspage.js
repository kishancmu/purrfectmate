import { Tabs } from "antd";
import PrivateChatList from "./PrivateChatList";
import PackChatList from "./PackChatList";

const items = [
  {
    key: "1",
    label: "Private",
    children: <PrivateChatList />,
  },
  {
    key: "2",
    label: "Pack",
    children: <PackChatList />,
  },
];

const ChatsPage = () => {
  return (
    <div className="h-full w-full">
      <div className="h-full w-full flex flex-col">
        <div className="flex-grow min-h-0">
          <div className="h-full p-3">
            <Tabs
              size="large"
              defaultActiveKey="1"
              items={items}
              className="h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatsPage;
