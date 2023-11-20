import { React, useState, useEffect, useContext } from "react";
import "./RightSide.css";

import axios from "axios";
import birthGift from "./images/pink-gift-box-present-birthday-.jpg";
import image from "./images/8.jpg";
import ChatOnline from "../../components/Chat/Online-user";
// import { ONLINE_USERS } from "../../MOCK_DATA_ONLINE";
import { AuthContext } from "../../context/AuthContext";
import { Add } from "@mui/icons-material";
import { Remove } from "@mui/icons-material";

//
function RightSide({ USER }) {
  const [friends, setFriends] = useState([]);
  const { user: currentUser, dispatch } = useContext(AuthContext);
  const [isFollowing, setIsFollowing] = useState(
    currentUser.following.includes(USER?._id)
  );

  // console.log(ONLINE_USERS);

  const PublicFolder = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(() => {
    const fetchFriends = async () => {
      if (USER) {
        try {
          const response = await axios.get(
            `http://localhost:8800/api/users/friends/${USER._id}`
          );
          setFriends(response.data);
        } catch (error) {
          console.log(error);
        }
      }
    };

    fetchFriends();
  }, [USER]);

  const handleFollow = async () => {
    try {
      if (isFollowing) {
        await axios.put(
          `http://localhost:8800/api/users/${USER._id}/unfollow`,
          { userID: currentUser._id }
        );
        dispatch({ type: "UNFOLLOW", payload: USER._id });

        // TODO: check a response data after request
        /*     console.log(resp.data);
        console.log(isFollowing);
        console.log(`Now you unfollowed ${USER.username}`); */
      } else {
        await axios.put(`http://localhost:8800/api/users/${USER._id}/follow`, {
          userID: currentUser._id,
        });
        dispatch({ type: "FOLLOW", payload: USER._id });

        // TODO: check a response data after request
        /*         console.log(resp.data);
        console.log(isFollowing);
        console.log(`Now you started following ${USER.username}`);
 */
      }
    } catch (error) {
      console.log(error);
    }
    setIsFollowing(!isFollowing);
  };

  const HomeRightBar = () => (
    <>
      <div className="notification_container flex items-center ">
        <img src={birthGift} className="w-9.7 " alt="" />
        <div className="describe-notification">
          <p className="font-extralight text-sm">
            <span className="first-person font-semibold">Mikyas Amare</span> and{" "}
            <span className="total-person font-semibold">5</span> other friend
            have a birthday today.
          </p>
        </div>
      </div>
      <div className="image_container">
        <img
          src={image}
          className=" w-15 h-13.5 object-cover rounded-xl my-6"
          alt=""
        />
      </div>
      <div className="online-friend-container">
        <h3 className="font-semibold ">Online Friends</h3>
        <hr className="border-white my-3" />

        <ul className="user_container">
          <ChatOnline></ChatOnline>
        </ul>
      </div>
    </>
  );

  const ProfileRightBar = () => {
    const [relationStatus, setRelationStatus] = useState("");

    useEffect(() => {
      if (USER.relation === 3) {
        return setRelationStatus("Single");
      } else if (USER.relation === 2) {
        return setRelationStatus("-");
      } else if (USER.relation === 1) {
        return setRelationStatus("Married");
      }
    }, []);

    return (
      <>
        <div className="user-info">
          {USER._id !== currentUser._id && (
            <button
              className="follow_unfollow-btn mt-6 mb-3"
              onClick={handleFollow}
            >
              {isFollowing ? "Unfollow" : "Follow"}
              {isFollowing ? <Remove /> : <Add />}
            </button>
          )}
          <h1 className="text-xl font-semibold ">User Information</h1>

          <div className="info-container ">
            <h2 className="font-semibold text-gray-700">
              City: <span className="font-light">{USER.city}</span>
            </h2>
            <h2 className="font-semibold text-gray-700">
              From: <span className="font-light">{USER.from}</span>
            </h2>
            <h2 className="font-semibold text-gray-700">
              Relationship: <span className="font-light">{relationStatus}</span>
            </h2>
          </div>
        </div>
        <div className="close-friends-container">
          <h1 className="text-xl font-semibold mb-4">User Friends</h1>

          <ul className="flex flex-wrap gap-6 text-center">
            {friends.length > 0 &&
              friends.map((friend) => {
                return (
                  <a href={`/profile/${friend.username}`} key={friend._id}>
                    <li>
                      <img
                        src={
                          friend.profile
                            ? `${PublicFolder}/` + friend.profile
                            : PublicFolder + "PersonNoAvatar/person-4.svg"
                        }
                        className="w-11 h-11 object-cover rounded-lg "
                        alt=""
                      />
                      <span className="username ">{friend.username}</span>
                    </li>
                  </a>
                );
              })}
          </ul>
        </div>
      </>
    );
  };

  return (
    <div className="right-container  p-6 text-gray-800">
      <div className="right-wrapper">
        {USER ? (
          <ProfileRightBar></ProfileRightBar>
        ) : (
          <HomeRightBar></HomeRightBar>
        )}
      </div>
    </div>
  );
}

export default RightSide;
