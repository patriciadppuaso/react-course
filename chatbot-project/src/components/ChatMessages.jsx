import { useRef, useEffect } from "react";
import { ChatMessage } from "./ChatMessage";
import "./ChatMessages.css";

function ChatMessages({ chatMessages }) {
  // function sendMessage(){
  //   //console.log('send message');
  //   // chatMessages.push({
  //   //   message: 'test',
  //   //   sender: 'user',
  //   //   //id: 'id' + (chatMessages.length + 1),
  //   //   id: crypto.randomUUID(),
  //   // });

  //   console.log(chatMessages);
  //   setChatMessages([
  //     ...chatMessages,
  //     {
  //       message: 'test',
  //       sender: 'user',
  //       id: crypto.randomUUID(),
  //     }
  //   ]);
  // }
  const chatMessagesRef = useRef(null);
  useEffect(() => {
    const containerElem = chatMessagesRef.current;
    if (containerElem) {
      containerElem.scrollTop = containerElem.scrollHeight;
    }
  }, [chatMessages]);
  return (
    <div className="chat-messages-container" ref={chatMessagesRef}>
      {chatMessages.map((chatMessage) => {
        return (
          <ChatMessage
            message={chatMessage.message}
            sender={chatMessage.sender}
            key={chatMessage.id}
          />
        );
      })}
    </div>
  );
}

export default ChatMessages;
