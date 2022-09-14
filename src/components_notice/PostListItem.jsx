import React from "react";
import { Link } from "react-router-dom";
import "../notice_styles/PostListItem.scss";
import Post_Detail from "./Post_Detail";

const PostListItem = ({ post, onRemove }) => {
  const { title, id, perform_date, content } = post;
  const data = perform_date.split("T");

  return (
    <>
      <li className="PostListItem">
        <div className="Header_1">
          <div className="boardId">{id}</div>
          <div className="boardtext_1">
            <Link to={`/notice/${id}`}>
              <div className="boardtext">{title}</div>
            </Link>
          </div>
          <div className="register_date">{data[0]}</div>
          <div className="changeitem">
            <div className="edit" onClick={() => {}}>
              수정
            </div>
            <div
              className="remove"
              onClick={() => {
                onRemove(id);
              }}
            >
              삭제
            </div>
          </div>
        </div>
        <div className="boardcont">
          <div>{content}</div>
        </div>
      </li>
    </>
  );
};

export default PostListItem;
