import { React, useContext, useRef, useState } from "react";
// importing style sheet
import "./Share.css";

import PhotoIcon from "@mui/icons-material/Photo";
import LabelIcon from "@mui/icons-material/Label";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import { Cancel } from "@mui/icons-material";

import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

function Share() {
  const { user } = useContext(AuthContext);
  const [file, setFile] = useState(null);
  const description = useRef();
  const PublicFolder = process.env.REACT_APP_PUBLIC_FOLDER;

  // console.log(user._id);
  // console.log(file)

  const fileSubmitHandler = async (evt) => {
    evt.preventDefault();

    const newPost = {
      userID: user._id,
      description: description.current.value,
      image: "",
    };

    if (!file && newPost.description === "") {
      alert("Cannot share empty post!");
      return;
    }

    // */ Forming a random name for images and creating their path to store in the DB and api.  /*/

    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("name", file.name);

      //*/ Making a POST request to upload user file from the device to specific destination /*//
      try {
        const response = await axios.post(
          "http://localhost:8800/api/upload",
          formData
        );

        const {
          data: { path },
        } = response;

        const pathArray = path.split("/");
        const uniqueFileName = pathArray.slice(-2).join("/");

        newPost.image = uniqueFileName;
      } catch (error) {
        console.log(error);
      }
    }

    //*/ Making a POST request to create post of the user in the DB /*//
    try {
      await axios.post("http://localhost:8800/api/posts", newPost);

      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

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
          placeholder={`What's in your mind ${user.username}?`}
          ref={description}
        />
      </div>

      <hr className="my-6 mx-7.5 border-gray-400" />
      {file && (
        <div className="img-preview-container">
          <img src={URL.createObjectURL(file)} className="img-preview" alt="" />
          <Cancel className="cancel" onClick={()=> setFile(null)} />
        </div>
      )}
      <form
        className="share_container flex justify-between items-center px-6 drop-shadow-md gap-2"
        onSubmit={fileSubmitHandler}
      >
        <ul className="share_list flex gap-3 md:gap-7">
          <div className="xl:flex  md:gap-7">
            <label
              htmlFor="file"
              className="md:mb-2 flex items-center cursor-pointer"
            >
              <PhotoIcon className="mr-2  text-red-600" />
              <span className="text-gray-800 font-semibold text-sm ">
                Photo or Video
              </span>
              <input
                type="file"
                id="file"
                accept=".png, .jpeg, .jpg"
                onChange={(evt) => setFile(evt.target.files[0])}
                style={{ display: "none" }}
              />
            </label>
            <li className="md:mb-2 flex items-center">
              <LabelIcon className="mr-2  cursor-pointer text-blue-600" />
              <span className="text-gray-800 font-semibold text-sm">Tag</span>
            </li>
          </div>

          <div className="xl:flex  ">
            <li className="md:mb-2 flex items-center">
              <LocationOnIcon className="mr-2  cursor-pointer text-green-700" />
              <span className="text-gray-800 font-semibold text-sm">
                Location
              </span>
            </li>
            <li className="md:mb-2 flex items-center">
              <EmojiEmotionsIcon className="mr-2  cursor-pointer text-goldenrod" />
              <span className="text-gray-800 font-semibold text-sm">
                Feelings
              </span>
            </li>
          </div>
        </ul>

        <button
          className="px-3 py-1 bg-green-600 hover:bg-green-700 text-whitenWhite font-semibold text-sm rounded-md transition-all duration-300"
          type="submit"
        >
          Share
        </button>
      </form>
    </div>
  );
}

export default Share;
