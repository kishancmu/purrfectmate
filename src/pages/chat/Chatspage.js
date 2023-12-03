import { Tabs, Segmented } from "antd";
import { useState } from "react";
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
  const [isListView, setIsListView] = useState(1);
  return (
    <div className="h-full w-full flex flex-col p-4">
      <div className="text-center">
        <Segmented
          options={[
            { label: "Private", value: 1 },
            { label: "Pack", value: 2 },
          ]}
          onChange={(value) => setIsListView(value)}
          size="large"
          defaultValue={2}
        />
      </div>
      <div className="flex-grow min-h-0"></div>
    </div>
  );
};

export default ChatsPage;
