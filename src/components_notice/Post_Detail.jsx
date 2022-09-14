import React from "react";
import "../notice_styles/Post_Detail.scss";
import axios from "axios";

const onDetail = async (id, posts, setPosts, setError) => {
  try {
    const data = await axios({
      url: `http://localhost:4001/boards/${id}`,
      method: "GET",
    });
    console.log(data);
    setPosts((posts) => posts.filter((post) => post.id === id));
    if (posts.length === 1) {
      return posts[0];
    }
    return null;
  } catch (e) {
    setError(e);
  }
};

const Post_Detail = () => {
  return (
    <div>
      <h1>상세페이지 : 번 게시글</h1>
      {/* <div>
        <h1>상세페이지 ${id}번</h1>
      </div>
      <div>
        <h2>제목 : {title}</h2>
      </div>
      <div>
        <h2>내용 : {content}</h2>
      </div>
      <div>
        <h2>작성일자 : {perform_date}</h2>
      </div> */}
    </div>
  );
};

export default Post_Detail;
