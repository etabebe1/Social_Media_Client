
// material ui icons
import { Instagram } from "@mui/icons-material";
import { Telegram } from "@mui/icons-material";
import { LinkedIn } from "@mui/icons-material";
import { Twitter } from "@mui/icons-material";
import { Facebook } from "@mui/icons-material";

import "./Footer.css";

function Footer() {
  return (
    <div className="section-container bg-gray-300 ">
      <div className="conditions">
        <div className="upper flex justify-around pt-7 mb-4">
          <div className="navLinks text-center">
            <h1 className="text-xl font-semibold mb-4">Useful Links</h1>
            <div className="flex flex-col gap-3">
              <a className="text-sm text-gray-800" href="www.vibeverse.com">
                Home
              </a>
              <a className="text-sm text-gray-800" href="testimonials">
                User Testimonial
              </a>
              <a className="text-sm text-gray-800" href="/contactUs">
                Contact Us
              </a>
              <a className="text-sm text-gray-800" href="/aboutUs">
                About Us
              </a>
              <a className="text-sm text-gray-800" href="Terms">
                Terms and Agreements
              </a>
              <a className="text-sm text-gray-800" href="Privacy">
                Privacy Policy
              </a>
              <a className="text-sm text-gray-800" href="Blog">
                Blog
              </a>
            </div>
          </div>

          <div className="Services text-center">
            <h1 className="text-xl font-semibold mb-4">Services</h1>
            <div className="flex flex-col gap-3">
              <a className="text-sm text-gray-800" href="/mernStack">
                MERN/MEAN Stack Development
              </a>
              <a className="text-sm text-gray-800" href="/maintenance">
                Website maintenance and adjustment
              </a>
              <a className="text-sm text-gray-800" href="/blockchain">
                Blockchain Development
              </a>
              <a className="text-sm text-gray-800" href="/forex">
                FOREX trading courses
              </a>
            </div>
          </div>
          <div className="platforms text-center">
            <h1 className="text-xl font-semibold mb-4">
              Connect with through us
            </h1>
            <div className="flex justify-center gap-6">
              <a className="text-lg text-gray-800" href="/twitter">
                <Twitter className="hover:text-sky-500 text-xl transition-all"></Twitter>
              </a>
              <a className="text-lg text-gray-800" href="/twitter">
                <Telegram className="hover:text-sky-500 text-xl transition-all"></Telegram>
              </a>
              <a className="text-lg text-gray-800" href="/twitter">
                <Instagram className="hover:text-red-600 text-xl transition-all"></Instagram>
              </a>
              <a className="text-lg text-gray-800" href="/twitter">
                <LinkedIn className="hover:text-blue-700 text-xl transition-all"></LinkedIn>
              </a>
              <a className="text-lg text-gray-800" href="/twitter">
                <Facebook className="hover:text-blue-700 text-xl transition-all"></Facebook>
              </a>
            </div>
          </div>
          {/* <div className=""></div> */}
        </div>
        <hr className="border-1 border-purple-300 mx-10 mt-6 mb-3 " />
        <div className="lower">
          <p className="text-sm text-center text-gray-800 pb-4">
            &copy; Reserved 2023 VibeVerse. All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
