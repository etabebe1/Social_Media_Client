import { useEffect, useState } from "react";
import axios from "axios";

function OnlineUser({ onlineUsers, currentUserID, setCurrentChat }) {
  const [friends, setFriends] = useState([]);
  const [currentlyOnline , setCurrentlyOnline] = useState([]) 
  const PublicFolder = process.env.REACT_APP_PUBLIC_FOLDER;

  // LOGS
  console.log(onlineUsers );
  // friends.length > 0 && console.log(friends);

  useEffect(() => {
    const getUsersFriends = async () => {
      const getUsersFriends = await axios.get(
        `http://localhost:8800/api/users/friends/${currentUserID}`
      );

      setFriends(getUsersFriends.data);
    };
    getUsersFriends();
  }, [currentUserID]);


//   useEffect(() => {
// friends.filter((friend => ))
//   },[friends])

  return (
    <>
      <li className="individual_user flex gap-4 items-center my-5">
        <div className="user-status">
          <div className="status w-3.8 h-3.8 bg-green-600 rounded-full absolute translate-x-7 border-white border-2"></div>

          <img
            src={PublicFolder + "PersonNoAvatar/person-4.svg"}
            className="rounded-full object-cover w-8.6 h-8.6"
            alt="Online-Friend"
          />
        </div>
        <span className="">Jeremiah</span>
      </li>
    </>
  );
}

export default OnlineUser;
