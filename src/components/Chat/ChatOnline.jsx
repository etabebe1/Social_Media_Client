import "./ChatOnline.css";
import image from "./image.jpg";

function ChatOnline() {
  return (
    <>
      <div className="online-user-wrapper">
        <div className="img_indicator">
          <img src={image} alt="" />
          <div className="online-indicator"></div>
        </div>
        <span className="username">Naol Fekadu</span>
      </div>
    </>
  );
}

export default ChatOnline;
