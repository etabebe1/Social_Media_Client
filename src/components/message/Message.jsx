import { useState, useEffect } from "react";
import "./Message.css";
import axios from "axios";
// import { format } from "timeago.js";

function Message({ own, message }) {
  const [user, setUser] = useState({});
  const PublicFolder = process.env.REACT_APP_PUBLIC_FOLDER;

  // console.log(message);
  // console.log(user);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8800/api/users?userID=${message.senderID}`
        );
        setUser(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUser();
  }, [message]);

  return (
    <>
      <div className={own ? "img_message-wrapper own" : "img_message-wrapper"}>
        {Object.keys(user).length > 0 && (
          <img
            src={
              user.profile
                ? PublicFolder + user.profile
                : PublicFolder + "PersonNoAvatar/person-4.svg"
            }
            alt=""
          />
        )}
        <div className="message-container">
          <p className="user-message">{message.text}</p>
          <span className="time-ago">{message.createdAt}</span>
        </div>
      </div>
    </>
  );
}

export default Message;
