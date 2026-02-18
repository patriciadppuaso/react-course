import { useState } from "react";
import { Chatbot } from "supersimpledev";
import "./ChatInput.css";

export function ChatInput({ chatMessages, setChatMessages }) {
  //useState returns an array with 2 items - the state variable and the function to update the state variable
  const [inputText, setInputText] = useState("");

  function saveInputText(event) {
    setInputText(event.target.value);
  }

  function sendMessage() {
    //console.log(inputText);
    const newChatMessages = [
      ...chatMessages,
      {
        message: inputText,
        sender: "user",
        id: crypto.randomUUID(),
      },
    ];

    setChatMessages(newChatMessages);

    const response = Chatbot.getResponse(inputText);
    setChatMessages([
      ...newChatMessages,
      {
        message: response,
        sender: "chatbot",
        id: crypto.randomUUID(),
      },
    ]);

    setInputText(""); //controlled input
  }

  return (
    <div className="chat-input-container">
      <input
        placeholder="Send a message to chatbot"
        size="30"
        onChange={saveInputText}
        value={inputText}
        className="chat-input"
      />
      <button onClick={sendMessage} className="send-button">
        Send
      </button>
    </div>
  );
}
