import React from "react";

import Banner from "components/Banner";
import styles from "./styles.module.css";
import posts from "json/posts.json";
import Post from "components/Post";

const handleLoadingPosts = () => {
  return posts.map((post) => (
    <li key={post.id}>
      <Post post={post} />
    </li>
  ));
};

const Home = () => {
  return <ul className={styles.posts}>{handleLoadingPosts()}</ul>;
};

export default Home;
