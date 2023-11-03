// importing style sheet
import "./Share.css";


import PhotoIcon from "@mui/icons-material/Photo";
import LabelIcon from "@mui/icons-material/Label";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";

function Share({ user }) {
  // console.log(user);

  const PublicFolder = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div className="Share_Post px-3 pt-4 pb-8  rounded-xl mt-6 mb-7 mx-4">
      <div className="profile_container flex items-center gap-4">
        <img
          src={
            user.profile
              ? PublicFolder + user.profile
              : PublicFolder + "PersonNoAvatar/person-4.svg"
          }
          className="w-8.9 h-8.9 rounded-full"
          alt="user_profile"
        />
        <input
          type="text"
          className="idea text-gray-600 w-full px-3 mr-7 h-8.6 outline-none border-none "
          placeholder="What's in your mind Jeremiah?"
        />
      </div>

      <hr className="my-6 mx-7.5 border-gray-400" />

      <div className="info_container flex justify-between items-center px-6 drop-shadow-md gap-9">
        <ul className="info_list flex gap-5">
          <li className="info_item flex items-center">
            <PhotoIcon className="mr-2 text-red-600" />
            <span className="text-gray-800 font-semibold text-sm">
              Photo or Video
            </span>
          </li>
          <li className="info_item flex items-center">
            <LabelIcon className="mr-2 text-blue-600" />
            <span className="text-gray-800 font-semibold text-sm">Tag</span>
          </li>
          <li className="info_item flex items-center">
            <LocationOnIcon className="mr-2 text-green-700" />
            <span className="text-gray-800 font-semibold text-sm">
              Location
            </span>
          </li>
          <li className="info_item flex items-center">
            <EmojiEmotionsIcon className="mr-2 text-goldenrod" />
            <span className="text-gray-800 font-semibold text-sm">
              Feelings
            </span>
          </li>
        </ul>

        <button className="p-2 bg-green-600 hover:bg-green-700 text-whitenWhite font-semibold text-sm rounded-md transition-all duration-300">
          Share
        </button>
      </div>
    </div>
  );
}

export default Share;
