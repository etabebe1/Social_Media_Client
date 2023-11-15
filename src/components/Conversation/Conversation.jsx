import { useState, useEffect } from "react";
import "./Conversation.css";
import axios from "axios";

function Conversation({ conversation, currentUser }) {
  const [user, setUser] = useState({});
  const PublicFolder = process.env.REACT_APP_PUBLIC_FOLDER;

  // console.log(currentUser);
  // console.log(conversation)
  // if (Object.keys(user).length > 0) {
  //   console.log(user);
  // }

  useEffect(() => {
    const friendID = conversation.members.filter(
      (ID) => ID !== currentUser._id
    );
    const fetchFriend = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8800/api/users?userID=${friendID[0]}`
        );
        setUser(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchFriend();
  }, [conversation, currentUser]);

  return (
    <>
      <div className="chat-list text-gray-900">
        {Object.keys(user).length > 0 && (
          <li>
            <img
              src={
                user.profile
                  ? PublicFolder + user.profile
                  : PublicFolder + "PersonNoAvatar/person-4.svg"
              }
              alt="user-chat"
              className="bg-gray-200"
            />
            <div className="username_message">
              <span className="username">{user.username}</span>
              {
                // TODO: fetch last message of conversation here
              }
              <span className="last-message">Lorem ipsum dolor sit.</span>
            </div>
          </li>
        )}
      </div>
    </>
  );
}

export default Conversation;
