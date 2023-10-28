// import { Link } from "react-router-dom";

import "./Navbar.css";

import SearchIcon from "@mui/icons-material/Search";
import DarkModeIcon from "@mui/icons-material/DarkMode";
// import LightModeIcon from "@mui/icons-material/LightMode";
import MessageIcon from "@mui/icons-material/Message";
import PersonIcon from "@mui/icons-material/Person";
import NotificationsIcon from "@mui/icons-material/Notifications";

import image from "./pictures/image.jpg";

function NavBar() {
  // console.log(user._id);

  return (
    <div className="navbar-container   flex justify-around items-center px-10 py-3 w-full bg-gray-300">
      <section className="nav_left">
        <div className="flex gap-4">
          <div className="pr-2">
            <a
              href="/"
              className="logo font-bold text-2xl text-gray-700 tracking-wider cursor-pointer"
            >
              VibeVerse
            </a>
          </div>
          <div className="search_bar flex items-center bg-white rounded-md w-14">
            <SearchIcon
              fontSize="medium"
              className="searchIcon text-sky-600 mx-3 transition-all delay-100 ease-in-out duration-500 hover:text-red-500"
            />

            <input
              className="w-14 outline-none"
              type="search"
              name=""
              id=""
              placeholder="Search for friend, post or video"
            />
          </div>
        </div>
      </section>

      <section className="nav_center">
        <div className="links flex gap-5">
          <span className="text-base text-gray-700 hover:text-orange-500 duration-500">
            <a href="/home">Homepage</a>
          </span>
          <span className="text-base text-gray-700 hover:text-orange-500 duration-500">
            <a href="google.com">Timeline</a>
          </span>
        </div>
      </section>

      <section className="icons_profile_container w-1/3">
        <div className="icons_profile flex items-center justify-end">
          <div className="icons flex justify-start  gap-8">
            <span className="text-gray-700 relative cursor-pointer hover:text-orange-500 duration-500">
              <DarkModeIcon />
            </span>
            <span className="text-gray-700 relative cursor-pointer hover:text-orange-500 duration-500">
              <PersonIcon />
              <div className="w-4 h-4 bg-red-600 rounded-full absolute -translate-y-7.6 translate-x-3.8 flex justify-center items-center text-sm">
                1
              </div>
            </span>
            <span className="text-gray-700 relative cursor-pointer hover:text-orange-500 duration-500">
              <MessageIcon />
              <div className="w-4 h-4 bg-red-600 rounded-full absolute -translate-y-7.6 translate-x-3.8 flex justify-center items-center text-sm">
                2
              </div>
            </span>
            <span className="text-gray-700 relative cursor-pointer hover:text-orange-500 duration-500">
              <NotificationsIcon />
              <div className="w-4 h-4 bg-red-600 rounded-full absolute -translate-y-7.6 translate-x-3.8 flex justify-center items-center text-sm">
                1
              </div>
            </span>
          </div>

          <div className="profile ml-10">
            <a href={`profile/Jeremiah A.`}>
              <img
                src={image}
                className="w-8 rounded-full cursor-pointer "
                alt=""
              />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default NavBar;
