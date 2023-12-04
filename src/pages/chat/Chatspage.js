import { Segmented, Modal, Button } from "antd";
import { useEffect, useState } from "react";
import { useContext } from "react";
import appContext from "../../utils/appContext";
import PrivateChatList from "./PrivateChatList";
import PackChatList from "./PackChatList";

const ChatsPage = () => {
  const { chatPageTab, setChatPageTab } = useContext(appContext);
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setOpen(false);
  };
  const handleCancel = () => {
    setOpen(false);
  };

  useEffect(() => {
    showModal();
  }, []);

  return (
    <div className="h-full w-full flex flex-col p-4">
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
          Our amazing team is working on Chat feature and will be ready within a
          few days. Till then you can get familiar with the page but
          functionality will be limited.
        </p>
      </Modal>
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
    </div>
  );
};

export default ChatsPage;
