// importing useful Hooks
import { React, useState, useEffect } from "react";
import axios from "axios";
import "./Post.css";

import MoreVertIcon from "@mui/icons-material/MoreVert";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import FavoriteIcon from "@mui/icons-material/Favorite";

// import {format} from "timeago.js";
// import { Link } from "react-router-dom";

function Post({ post }) {
  const [likes, setLikes] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});

  const PublicFolder = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(() => {
    // const TIMELINE_URL = `http://localhost:8800/api/users/${post.userID}`;
    const TIMELINE_URL = `http://localhost:8800/api/users?userID=${post.userID}`;

    const fetchPosts = async () => {
      const response = await axios.get(TIMELINE_URL);
      setUser(response.data);
    };

    fetchPosts();
  }, [post.userID]);

  const likeHandlerFn = () => {
    if (!isLiked) {
      setIsLiked(true);
      setLikes(likes + 1);
    } else if (isLiked) {
      setIsLiked(false);
      setLikes(likes - 1);
    }
  };


  return (
    <div className="Post_Container my-8.6 px-3 py-4 mx-4 rounded-xl text-gray-900">
      <div className="top flex justify-between items-center">
        <div className="top-left flex items-center gap-3 mb-6">
          <a href={`/profile/${user.username}`}>
            <img
              src={user.profile || PublicFolder + "PersonNoAvatar/person-4.svg"}
              className="w-8 h-8 rounded-full object-cover bg-gray-200 p-1"
              alt=""
            />
          </a>

          <span className="username flex gap-2 items-center ">
            <div className=" text-gray-800 font-semibold">{user.username}</div>
          </span>
          <p className="time-display text-xs ">
            <span>{post.createdAt}</span>
          </p>
        </div>
        <div className="vertical-dotes">
          <MoreVertIcon></MoreVertIcon>
        </div>
      </div>

      <div className="desc-container mb-6">
        <p>{post?.description}</p>
      </div>
      <div className="mb-6 flex justify-center">
        <img src={PublicFolder + post.image} className="post" alt="" />
      </div>
      <div className="bottom flex justify-between items-center">
        <div className="icon-container flex gap-6 items-center">
          <div className="icons gap-3 flex">
            <ThumbUpIcon
              onClick={likeHandlerFn}
              className="bg-blue-600 text-white p-2 rounded-full"
              fontSize="medium"
            ></ThumbUpIcon>
            <FavoriteIcon
              onClick={likeHandlerFn}
              className="bg-pink-600 text-white rounded-full p-1"
              fontSize="medium"
            ></FavoriteIcon>
          </div>

          <p className="text-sm">
            <span>{likes}</span> people like it
          </p>
        </div>
        <div className="bottom-comments">
          <p className="comment">
            <span>{post.comments}</span> comments
          </p>
        </div>
      </div>
    </div>
  );
}

export default Post;
