import "./Message.css";
import userImage from "./image.jpg";

function Message({ own }) {
  return (
    <>
      <div className={own ? "message-container own" : "message-container"}>
        <div className="profile-message-wrapper">
          <img src={userImage} alt="" />
          <p className="user-message">ya </p>
        </div>
        <span className="time-ago">1 hour ago</span>
      </div>
    </>
  );
}

export default Message;
