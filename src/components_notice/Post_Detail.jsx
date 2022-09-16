import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../notice_styles/Post_Detail.scss";
import Notice from "./Notice";

const Post_Detail = () => {
  const [postItem, setPostItem] = useState([]);
  const [error, setError] = useState(null);
  const { id } = useParams();

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
        <div className="post_detail_back">
          <div className="post_list">
            <div className="PostId">{postItem.id}번 게시글</div>
            <div className="PostTitle">제목 : {postItem.title}</div>
            <div className="PostContent">내용 : {postItem.content}</div>
            <div className="PostDate">작성 일자 :</div>
          </div>
        </div>
      </Notice>
    </>
  );
};

export default Post_Detail;

// const Post_Detail = () => {
//   const [postItem, setPostItem] = useState([]);
//   const [error, setError] = useState(null);
//   const { id } = useParams();

//   useEffect(() => {
//     getPostItem(id);
//   }, [id]);

//   const getPostItem = async (id) => {
//     try {
//       const data = await axios.get(`http://localhost:4001/boards/${id}`);
//       setPostItem(data.data);
//     } catch (e) {
//       setError(e);
//     }
//   };

//   return (
//     <>
//       <div>{postItem.id}번 게시글</div>
//       <div>제목 : {postItem.title}</div>
//       <div>내용 : {postItem.content}</div>
//     </>
//   );
// };

// export default Post_Detail;
