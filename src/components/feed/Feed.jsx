import { React, useState, useEffect, useContext } from "react";
import axios from "axios";
import Share from "../share/Share";
import Post from "../post/Post";
import { AuthContext } from "../../context/AuthContext";

import "./Feed.css";

function Feeds({ username }) {
  const [posts, setPosts] = useState([]);
  const { user } = useContext(AuthContext);
  // console.log(user);
  // console.log(posts)

  useEffect(() => {
    const PROFILE_URL = `http://localhost:8800/api/posts/profile/${username}`;

    const TIMELINE_URL = `http://localhost:8800/api/posts/timeline/${user._id}`;

    const fetchPosts = async () => {
      if (username) {
        const response = await axios.get(PROFILE_URL);
        setPosts(response.data);
      } else {
        const response = await axios.get(TIMELINE_URL);
        setPosts(response.data);
      }
    };

    fetchPosts();
  }, [username, user._id]);

  return (
    <div className="feed-container">
      {!username || username === user.username ? (
        <Share user={user}></Share>
      ) : (
        ""
      )}

      {posts.map((availablePost) => {
        return <Post key={availablePost._id} post={availablePost}></Post>;
      })}
    </div>
  );
}

export default Feeds;
