import { React, useState, useEffect } from "react";

import axios from "axios";

import Share from "../share/Share";
import Post from "../post/Post";

import "./Feed.css";

function Feeds({ username }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const PROFILE_URL = `http://localhost:8800/api/posts/profile/${username}`;

///* TODO: userID substitute by the real one *//
    // here for now we gonna use static userID until we start to use login system to pass userID using context api ((65250b8fc436fa61becdc210))---> endpoint userID | TIMELINE_URL
    const TIMELINE_URL = `http://localhost:8800/api/posts/timeline/65250b8fc436fa61becdc210`;

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
  }, [username]);

  return (
    <div className="feed-container">
      <Share></Share>
      {posts.map((availablePost) => {
        return <Post key={availablePost._id} post={availablePost}></Post>;
      })}
    </div>
  );
}

export default Feeds;
