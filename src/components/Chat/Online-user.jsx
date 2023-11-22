import { useEffect, useState } from "react";
import axios from "axios";
import { FormatUnderlinedSharp } from "@mui/icons-material";

function OnlineUser({ onlineUsers, currentUserID, setCurrentChat }) {
  const [friends, setFriends] = useState([]);
  const [currentlyOnline, setCurrentlyOnline] = useState([]);
  const PublicFolder = process.env.REACT_APP_PUBLIC_FOLDER;

  // LOGS
  // console.log(onlineUsers);
  // console.log(currentUserID);
  useEffect(() => {
    // onlineUsers.length > 0 && console.log(onlineUsers);
    currentlyOnline.length > 0 && console.log(currentlyOnline);
  }, [onlineUsers, currentlyOnline]);

  //

  useEffect(() => {
    const getUsersFriends = async () => {
      if (currentUserID) {
        const getUsersFriends = await axios.get(
          `http://localhost:8800/api/users/friends/${currentUserID}`
        );
        setFriends(getUsersFriends.data);
      }
    };
    getUsersFriends();
  }, [currentUserID]);

  useEffect(() => {
    if (friends.length > 0) {
      // LOGS
      // console.log(friends);
      // console.log(onlineUsers);

      const filteredFriends = friends.filter((friend) => {
        return onlineUsers.some(
          (OnlineUser) => OnlineUser.userID === friend._id
        );
      });

      setCurrentlyOnline(filteredFriends);
    }
  }, [friends, onlineUsers]);

  // console.log(currentlyOnline);

  const handleClick = (user) => {
    console.log(user);
  };

  return (
    <>
      {currentlyOnline &&
        currentlyOnline.map((onlineFriend) => (
          <li
            className="individual_user flex gap-4 items-center my-2 cursor-pointer"
            key={onlineFriend._id}
            onClick={() => handleClick(onlineFriend)}
          >
            <div className="user-status">
              <div className="status w-3.8 h-3.8 bg-green-600 rounded-full absolute translate-x-7 border-white border-2"></div>

              <img
                src={
                  onlineFriend.profile
                    ? PublicFolder + onlineFriend.profile
                    : PublicFolder + "PersonNoAvatar/person-4.svg"
                }
                className="rounded-full object-cover w-8.6 h-8.6"
                alt="Online-Friend"
              />
            </div>
            <span className="">{onlineFriend.username}</span>
          </li>
        ))}
    </>
  );
}

export default OnlineUser;
