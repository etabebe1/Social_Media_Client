import { React, useState, useEffect } from "react";

import birthGift from "./images/pink-gift-box-present-birthday-.jpg";
import image from "./images/8.jpg";

import OnlineUser from "../online_users/Onlineuser";
import { ONLINE_USERS } from "../../MOCK_DATA_ONLINE";

import "./RightSide.css";

function RightSide({ User }) {
  const PublicFolder = process.env.REACT_APP_PUBLIC_FOLDER;
  // const [onlineFriends, setOnlineFriends] = useState({});

  const HomeRightBar = () => {
    return (
      <>
        <div className="notification_container flex items-center ">
          <img src={birthGift} className="w-9.7 " alt="" />
          <div className="describe-notification">
            <p className="font-extralight text-sm">
              <span className="first-person font-semibold">Mikyas Amare</span>{" "}
              and <span className="total-person font-semibold">5</span> other
              friend have a birthday today.
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
            {ONLINE_USERS.map((individual) => {
              return (
                <OnlineUser key={individual.id} user={individual}></OnlineUser>
              );
            })}
          </ul>
        </div>
      </>
    );
  };

  const ProfileRightBar = () => {
    const [relationStatus, setRelationStatus] = useState("");

    useEffect(() => {
      if (User.relation === 3) {
        return setRelationStatus("Single");
      } else if (User.relation === 2) {
        return setRelationStatus("-");
      } else if (User.relation === 1) {
        return setRelationStatus("Married");
      }
    }, []);

    return (
      <>
          <div className="user-info mb-7">
            <h1 className="text-xl font-semibold mb-4">User Information</h1>

            <div className="info-container ">
              <h2 className="font-semibold text-gray-700">
                City: <span className="font-light">{User.city}</span>
              </h2>
              <h2 className="font-semibold text-gray-700">
                From: <span className="font-light">{User.from}</span>
              </h2>
              <h2 className="font-semibold text-gray-700">
                Relationship:{" "}
                <span className="font-light">{relationStatus}</span>
              </h2>
            </div>
          </div>
          <div className="close-friends-container">
            <h1 className="text-xl font-semibold mb-4">User Friends</h1>

            <ul className="flex flex-wrap gap-6 text-center">
              <li>
                <img
                  src={`${PublicFolder}/posts/5.jpg`}
                  className="w-11 h-11 object-cover rounded-lg "
                  alt=""
                />

                <span className="username ">Ruth Befikadu</span>
              </li>
              <li>
                <img
                  src={`${PublicFolder}/posts/6.jpg`}
                  className="w-11 h-11 object-cover rounded-lg "
                  alt=""
                />

                <span className="username ">Elias Zeleke</span>
              </li>
              <li>
                <img
                  src={`${PublicFolder}/posts/8.jpg`}
                  className="w-11 h-11 object-cover rounded-lg "
                  alt=""
                />

                <span className="username ">Lidya Fekadu</span>
              </li>
              <li>
                <img
                  src={`${PublicFolder}/posts/9.jpg`}
                  className="w-11 h-11 object-cover rounded-lg "
                  alt=""
                />

                <span className="username ">David Habtish </span>
              </li>
              <li>
                <img
                  src={`${PublicFolder}/posts/10.jpg`}
                  className="w-11 h-11 object-cover rounded-lg "
                  alt=""
                />

                <span className="username ">Naol Fekadu</span>
              </li>
              <li>
                <img
                  src={`${PublicFolder}/posts/15.jpg`}
                  className="w-11 h-11 object-cover rounded-lg "
                  alt=""
                />

                <span className="username ">Jale Abeya</span>
              </li>
            </ul>
          </div>
      </>
    );
  };

  return (
    <div className="right-container  p-6 text-gray-800">
      <div className="right-wrapper">
        {User ? (
          <ProfileRightBar></ProfileRightBar>
        ) : (
          <HomeRightBar></HomeRightBar>
        )}
      </div>
    </div>
  );
}

export default RightSide;
