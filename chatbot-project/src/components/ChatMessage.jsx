import ChatbotProfileImage from '../assets/chatbot.png';
import UserProfileImage from '../assets/profile.png';
import "./ChatMessage.css";

export function ChatMessage({ message, sender }) {
  //const message = props.message;
  //const sender = props.sender;
  //const {message, sender} = props;

  // if (sender === 'chatbot'){
  //     return (
  //         <div>
  //             <img src="chatbot.png" width="50"/>
  //             {message}
  //         </div>
  //     );
  // }

  return (
    <div
      className={
        sender === "user" ? "chat-message-user" : "chat-message-chatbot"
      }
    >
      {sender === "chatbot" && (
        <img src={ChatbotProfileImage} className="chat-message-profile" />
      )}
      <div className="chat-message-text">{message}</div>
      {sender === "user" && (
        <img src={UserProfileImage} className="chat-message-profile" />
      )}
    </div>
  );
}