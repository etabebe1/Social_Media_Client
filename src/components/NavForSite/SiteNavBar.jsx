import React from "react";

// import SearchIcon from "@mui/icons-material/Search";
import DarkModeIcon from "@mui/icons-material/DarkMode";
// import LightModeIcon from "@mui/icons-material/LightMode";

import "./SiteNavBar.css";

function SiteNavBar() {
  return (
    <div className="navbar-container h-9.1 w-full flex   justify-around items-center bg-gray-100">
      <section className="logo-container">
        <a
          href="www.vibeverse.com"
          className="logo text-3xl font-semibold text-gray-700"
        >
          VibeVerse
        </a>
      </section>

      <section className="icons_nav_container flex gap-6">
        <div className="links flex ">
          <a
            href="Home"
            className="link text-gray-700 text-base hover:text-orange-500  border-orange-500 flex items-center px-3 duration-50 outline-none duration-100"
          >
            Home
          </a>
          <a
            href="Services"
            className="link text-gray-700 text-base hover:text-orange-500  border-orange-500 flex items-center px-3 duration-50 outline-none duration-100"
          >
            Services
          </a>
          <a
            href="Learn"
            className="link text-gray-700 text-base hover:text-orange-500  border-orange-500 flex items-center px-3 duration-50 outline-none duration-100"
          >
            Learn More
          </a>
          <a
            href="About"
            className="link text-gray-700 text-base hover:text-orange-500  border-orange-500 flex items-center px-3 duration-50 outline-none duration-100"
          >
            About Us
          </a>
          <a
            href="Contact"
            className="link text-gray-700 text-base hover:text-orange-500  border-orange-500 flex items-center px-3 duration-50 outline-none duration-100"
          >
            Contact
          </a>
        </div>
        <div className="icon flex items-center">
          <DarkModeIcon className="text-gray-700 cursor-pointer"></DarkModeIcon>
        </div>
      </section>
    </div>
  );
}

export default SiteNavBar;
