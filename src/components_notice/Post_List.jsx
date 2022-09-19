import React from "react";
import PostListItem from "../components_notice/PostListItem";
import "../notice_styles/Post_List.scss";

const Post_List = ({ posts }) => {
  return (
    <>
      <div className="post_list_back">
        <div className="post_list">
          {posts.map((post, index) => (
            <PostListItem post={post} key={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Post_List;
