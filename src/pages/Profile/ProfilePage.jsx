import { React, useState, useEffect } from "react";
import { useParams } from "react-router";

import NavBar from "../../components/NavForApp/Navbar";
import SideBar from "../../components/sideBar/SideBar";
import Feeds from "../../components/feed/Feed";
import Right from "../../components/rightBar/RightSide";
import UserProfile from "../../components/CurrentUserProfile/UserProfile";

import "./ProfilePage.css";

function Profile() {
  const [user, setUser] = useState({});

  const username = useParams().username;

  useEffect(() => {
    // here PROFILE_URL end-point is used for test, ASA the login system established for the app, we gonna use CONTEXT API to get username || userID for our user
    const PROFILE_URL = `http://localhost:8800/api/users?username=${username}`;

    const fetchUser = async () => {
      await fetch(PROFILE_URL)
        .then((resp) => {
          return resp.json();
        })
        .then((data) => {
          setUser(data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchUser();
  }, [username]);

  // Here we gonna apply/use the process.env for the <UserProfile></UserProfile> and <Right></Right> components respectively as the former contains ((profile)) and ((cover image)) && latter contains ((User-Friends)) rendered from ProfileRightBar--> function

  return (
    <div className="effect_filter">
      <NavBar />
      <div className="profile flex">
        <SideBar />
        <div className="profile-container ">
          <UserProfile currentUser={user} />
          <div className="profile-container-bottom flex">
            <Feeds username={username} />
            <Right User={user} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
