import React, { useContext, useEffect } from "react";
import { postContext } from "../../postContext";
import PaginationControlled from "../Pagination/Pagination";
import Post from "../Post/Post";
import "./PostList.css";

const PostList = () => {
  const { getPosts, posts } = useContext(postContext);
  useEffect(() => {
    getPosts();
  }, []);
  console.log(posts);
  return (
    <div className="content">
      <div className="posts-list">
        {posts.map((item) => (
          <Post key={item.id} card={item} />
        ))}
      </div>
      <PaginationControlled />
    </div>
  );
};

export default PostList;
