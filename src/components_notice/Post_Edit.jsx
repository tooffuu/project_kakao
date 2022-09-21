import React, { useState, useEffect } from "react";
import axios from "axios";
import Notice from "./Notice";
import { useParams } from "react-router-dom";
import "../notice_styles/Post_Edit.scss";

const Post_Edit = () => {
  const [postItem, setPostItem] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState(null);
  const { id } = useParams();

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
    // console.log(e.target.value);
  };

  const onChangeContent = (e) => {
    setContent(e.target.value);
    // console.log(e.target.value);
  };

  useEffect(() => {
    const getPostItem = async (id) => {
      try {
        const data = await axios({
          url: `http://localhost:4001/boards/${id}`,
          method: "GET",
        });
        setPostItem(data.data);
        setTitle(data.data.title);
        setContent(data.data.content);
      } catch (e) {
        setError(e);
      }
    };
    getPostItem(id);
  }, [id]);

  //   const onInsertToggle = () => {
  //     setInsertToggle((prev) => !prev);
  //   };

  const onUpdate = async (title, content) => {
    try {
      const data = await axios({
        url: `http://localhost:4001/boards/${id}`,
        method: "PATCH",
        data: { title, content },
      });
      setPostItem(data.data);

      //   onInsertToggle();
    } catch (e) {
      setError(e);
    }
  };

  console.log(postItem.title);
  console.log(postItem.content);

  const onSubmit = (e) => {
    e.preventDefault();
    onUpdate(title, content);
    // setTitle(title);
    // setContent(content);
  };

  // useEffect(() => {
  //   setTitle(title);
  //   setContent(content);
  // }, [title, content]);

  // useEffect(() => {
  //   if ((title, content)) {
  //     setTitle(title);
  //     setContent(content);
  //   }
  // }, [title, content]);

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
        <div className="write_home">
          <form className="tableinput" onSubmit={onSubmit}>
            <div className="input_write">
              <input
                onChange={onChangeTitle}
                name="title"
                value={title}
                placeholder={title}
                autocomplete="off"
              />
            </div>
            <div className="text_write">
              <textarea
                className="write_content"
                onChange={onChangeContent}
                name="content"
                value={content}
                placeholder={content}
                autocomplete="off"
              />
            </div>
            <button
              type="submit"
              className="write_sub_2"
              onClick={() => {
                alert("수정되었습니다.");
                window.location.href = `http://localhost:3000/notice/${id}`;
              }}
            >
              수정
            </button>
          </form>
        </div>
      </Notice>
    </>
  );
};

export default Post_Edit;
