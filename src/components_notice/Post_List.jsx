import React from "react";
import PostListItem from "../components_notice/PostListItem";
import "../notice_styles/Post_List.scss";

const Post_List = ({ posts, onRemove }) => {
  return (
    <div className="post_list_back">
      <div className="post_list">
        {posts.map((post, index) => (
          <PostListItem post={post} key={index} onRemove={onRemove} />
        ))}
      </div>
    </div>
  );
};

export default Post_List;
