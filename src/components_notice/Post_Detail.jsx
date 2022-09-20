import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "../notice_styles/Post_Detail.scss";
import Notice from "./Notice";

const Post_Detail = () => {
  const [postItem, setPostItem] = useState([]);
  const [error, setError] = useState(null);
  const { id } = useParams();

  const date = (postItem.perform_date || "").split("T");

  const onRemove = async (id) => {
    try {
      await axios({
        url: `http://localhost:4001/boards/${id}`,
        method: "DELETE",
      });
      setPostItem((postItem) => postItem.filter((postit) => postit.id !== id));
    } catch (e) {
      setError(e);
    }
    alert("게시글이 삭제됩니다.");
    window.location.href = `http://localhost:3000/notice`;
  };

  useEffect(() => {
    const getPostItem = async (id) => {
      try {
        const data = await axios({
          url: `http://localhost:4001/boards/${id}`,
          method: "GET",
        });
        setPostItem(data.data);
      } catch (e) {
        setError(e);
      }
    };
    getPostItem(id);
  }, [id]);

  return (
    <>
      <Notice>
        <button
          className="button_1"
          onClick={() => {
            document.location.href = "/notice";
          }}
        >
          목록
        </button>
        <div className="post_detail_back_2">
          <div className="post_list_2">
            <div className="postHeader">
              <div className="postId">{postItem.id}</div>
              <div className="postTitle">{postItem.title}</div>
              <div className="postDate">{date[0]}</div>
            </div>
            <div className="postContent">{postItem.content}</div>
          </div>
        </div>
        <div className="content_edit">
          <button
            className="content_delete"
            onClick={() => {
              onRemove(id);
            }}
          >
            삭제
          </button>
          <button
            className="content_update"
            onClick={() => {
              document.location.href = `/notice/edit/${id}`;
            }}
          >
            수정
          </button>
        </div>
      </Notice>
    </>
  );
};

export default Post_Detail;
