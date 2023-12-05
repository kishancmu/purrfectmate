import React, { useState, useEffect } from "react";
import SecondaryTopbar from "../../components/secondary-topbar/SecondaryTopbar";
import { Input, Button, List, Card } from "antd";
import { useParams } from "react-router-dom";
import { BsFillSendFill } from "react-icons/bs";
import moment from "moment-timezone";

const { TextArea } = Input;

function ChattingScreen() {
  const { chatID } = useParams();
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  // Load messages from localStorage when the component mounts
  useEffect(() => {
    const storedMessages = JSON.parse(localStorage.getItem(`messages_${chatID}`)) || [];
    setMessages(storedMessages);
  }, [chatID]);

  // Handle sending messages
  const sendMessage = () => {
    if (!message.trim()) return;

    const newMessage = {
      text: message,
      timestamp: new Date().toISOString()
    };

    const newMessages = [...messages, newMessage];
    setMessages(newMessages);
    localStorage.setItem(`messages_${chatID}`, JSON.stringify(newMessages));
    setMessage('');
  };

  return (
    <div className="h-full w-full flex flex-col overflow-x-hidden">
      <SecondaryTopbar title={chatID} showBackButton={true} />

      <div className="flex-grow overflow-y-auto px-4 py-2">
        <List
          dataSource={messages}
          renderItem={(item, index) => (
            <List.Item key={index} className="mb-2">
              <Card className="w-full">
                <p>{item.text}</p>
                <div className="text-right text-sm text-gray-500">
                  <div>{moment(item.timestamp).tz('America/Los_Angeles').format('MM/DD/YYYY')}</div>
                  <div>{moment(item.timestamp).tz('America/Los_Angeles').format('HH:mm:ss')}</div>
                </div>
              </Card>
            </List.Item>
          )}
        />
      </div>

      <div className="flex p-4 items-center">
        <TextArea
          placeholder="Type your message"
          size="large"
          className="flex-grow rounded-tr-none rounded-br-none"
          autoSize={{ minRows: 1, maxRows: 5 }}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button
          type="primary"
          icon={<BsFillSendFill className="text-xl" />}
          size="large"
          className="ml-2 w-16 rounded-tl-none rounded-bl-none"
          onClick={sendMessage}
        />
      </div>
    </div>
  );
}

export default ChattingScreen;
