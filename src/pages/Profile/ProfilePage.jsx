import { React, useState, useEffect } from "react";
// cannot found dependency
import { useParams } from "react-router";
import axios from "axios";
import NavBar from "../../components/NavForApp/Navbar";
import SideBar from "../../components/sideBar/SideBar";
import Feeds from "../../components/feed/Feed";
import Right from "../../components/rightBar/RightSide";
// import UserProfile from "../../components/CurrentUserProfile/UserProfile";

import "./ProfilePage.css";

function Profile() {
  const { username } = useParams();
  const [user, setUser] = useState({});

  const PublicFolder = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8800/api/users?username=${username}`
        );
        setUser(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUser();
  }, [username]);

  // Here we gonna apply/use the process.env for the <UserProfile></UserProfile> and <Right></Right> components respectively as the former contains ((profile)) and ((cover image)) && latter contains ((USER-Friends)) rendered from ProfileRightBar--> function

  return (
    <div className="effect_filter">
      <NavBar></NavBar>
      <div className="profile flex">
        <SideBar />
        <div className="profile-container">
          <div className="profile-container-top ">
            <div className="cover-picture ">
              <img
                src={
                  user.coverPicture
                    ? PublicFolder + user.coverPicture
                    : PublicFolder + "PersonNoAvatar/default-cover.png"
                }
                className="h-13 w-full object-cover"
                alt=""
              />
              <div className="profile-picture flex flex-col justify-center items-center gap-5 -mt-11 ">
                <img
                  src={
                    user.profile
                      ? PublicFolder + user.profile
                      : PublicFolder + "PersonNoAvatar/person-4.svg"
                  }
                  className="h-12 w-12 rounded-full border-4 border-white bg-gray-200"
                  alt=""
                />

                <div className="flex flex-col justify-center items-center gap-3 text-gray-800">
                  <h1 className="font-bold text-3xl ">{user.username}</h1>
                  <p>{user.description}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="profile-container-bottom flex">
            <Feeds username={user.username} />
            {Object.keys(user).length > 0 && <Right USER={user} />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
