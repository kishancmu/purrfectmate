import { Tabs, Segmented } from "antd";
import { useState } from "react";
import PrivateChatList from "./PrivateChatList";
import PackChatList from "./PackChatList";

const ChatsPage = () => {
  const [isListView, setIsListView] = useState(1);
  return (
    <div className="h-full w-full flex flex-col p-4">
      <div className="w-[220px] mx-auto">
        <Segmented
          options={[
            { label: "Private", value: 1 },
            { label: "Pack", value: 2 },
          ]}
          onChange={(value) => setIsListView(value)}
          size="large"
          block
          defaultValue={1}
        />
      </div>
      <div className="flex-grow min-h-0 pt-5">
        {isListView === 1 ? <PrivateChatList /> : <PackChatList />}
      </div>
    </div>
  );
};

export default ChatsPage;
