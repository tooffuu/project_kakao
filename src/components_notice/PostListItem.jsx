import React from "react";
import "../notice_styles/PostListItem.scss";

const PostListItem = ({ post }) => {
  const { title, id, perform_date } = post;
  const data = perform_date.split("T");

  return (
    <>
      <div className="list_item_back">
        <li className="PostListItem">
          <div className="Header_1">
            <div className="boardId">{id}</div>
            <div className="boardtext_1">
              <div
                className="boardtext"
                onClick={() => {
                  document.location.href = `/notice/${id}`;
                }}
              >
                {title}
              </div>
            </div>
            <div className="register_date">{data[0]}</div>
          </div>
        </li>
      </div>
    </>
  );
};

export default PostListItem;
