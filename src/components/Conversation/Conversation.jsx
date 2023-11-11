import "./Conversation.css";
import image from "./4.jpg";

function Conversation() {
  return (
    <>
      <div className="chat-list">
        <li>
          <img src={image} alt="user-chat" />
          <span className="username">David Habtish</span>
        </li>
      </div>
    </>
  );
}

export default Conversation;
