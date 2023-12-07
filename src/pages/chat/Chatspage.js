import { Segmented, Modal, Button, Typography } from "antd";
import { useEffect, useState } from "react";
import { FaDog } from "react-icons/fa";
import { useContext } from "react";
import appContext from "../../utils/appContext";
import PrivateChatList from "./PrivateChatList";
import PackChatList from "./PackChatList";
const { Title } = Typography;

const ChatsPage = () => {
  const { chatPageTab, setChatPageTab } = useContext(appContext);

  return (
    <div className="h-full w-full flex flex-col p-4 relative">
      <div className="w-[220px] mx-auto">
        <Segmented
          options={[
            { label: "Private", value: 1 },
            { label: "Pack", value: 2 },
          ]}
          onChange={(value) => setChatPageTab({ currentTab: value })}
          size="large"
          block
          defaultValue={chatPageTab.currentTab}
        />
      </div>
      <div className="flex-grow min-h-0 pt-5">
        {chatPageTab.currentTab === 1 ? <PrivateChatList /> : <PackChatList />}
      </div>
      <div className="h-full w-full flex justify-center items-center absolute top-0 left-0 bg-[#ffffffd3]">
        <div className="flex flex-col justify-center items-center">
          <FaDog className="text-9xl text-blue-500" />
          <Title level={2} className="text-gray-600">
            Feature coming soon!
          </Title>
        </div>
      </div>
    </div>
  );
};

export default ChatsPage;
