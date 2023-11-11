import "./Message.css";
import userImage from "./image.jpg";

function Message({ own }) {
  return (
    <>
      <div className={own ? "img_message-wrapper own" : "img_message-wrapper"}>
        <img src={userImage} alt="" />

        <div className="message-container">
          <p className="user-message">ya Lorem ipsum dolor sit amet consectetur.</p>
          <span className="time-ago">1 hour ago</span>
        </div>
      </div>
    </>
  );
}

export default Message;
