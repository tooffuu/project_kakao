import axios from "axios";

import React, { useState } from "react";
import { Link } from "react-router-dom";
import Notice from "../components_notice/Notice";
import "../notice_styles/Post_Write.scss";

const Post_Write = () => {
  const initialInput = { title: "", content: "" };
  const [input, setInput] = useState(initialInput);

  const { title, content } = input;

  const onChange = (e) => {
    const { value, name } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const onInsert = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4001/boards/insert", {
        title: input.title,
        content: input.content,
      })
      .then(() => {
        alert("등록 완료 !!");
        window.location.href = `http://localhost:3000/notice`;
      });
  };

  // const onInsert = async (e, title, content) => {
  //   e.preventDefault();
  //   const data = await axios({
  //     url: `http://localhost:4001/boards/insert`,
  //     method: "POST",
  //     data: title,
  //     content,
  //   }).then(() => {
  //     // alert("등록완료 !");
  //     console.log(data.data);
  //   });
  // };

  // const onInsert = async (title, content) => {
  //   try {
  //     const data = await axios({
  //       url: `http://localhost:4001/boards/insert`,
  //       method: "POST",
  //       data: title,
  //       content,
  //     });
  //     e.preventDefault();
  //     console.log(data);
  //     setPosts((posts) => [...posts, data.data]);
  //   } catch (e) {
  //     setError(e);
  //   }
  // };

  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   setInput(initialInput);
  //   onInsert(input);
  // };

  // const onFinish = (input, e) => {
  //   e.preventDefault();
  //   console.log("Success", input);
  // };

  return (
    <>
      <Notice>
        <Link to="/notice">
          <button className="button_1">목록</button>
        </Link>
        <div className="write_home">
          {/* <form className="tableinput" action="/boards" method="POST"> */}
          <form className="tableinput">
            <input
              onChange={onChange}
              name="title"
              value={title}
              placeholder="제목을 입력하세요"
              autocomplete="off"
            />
            <textarea
              className="write_content"
              onChange={onChange}
              name="content"
              value={content}
              placeholder="내용을 입력하세요"
              autocomplete="off"
            />
            <button type="submit" onClick={onInsert} className="write_sub">
              게시글 등록
            </button>
          </form>
        </div>
      </Notice>
    </>
  );
};

export default Post_Write;
