import React, { useEffect, useState } from "react";
import axios from "axios";
import Notice from "./Notice";
import TableHeader from "./TableHeader";
import Post_List from "./Post_List";

const Notice_app = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  // const nextId = useRef(1);

  // onInsert 다른 컴포넌트에서도 사용하기 위해 app에서 정의함
  // const onInsert = (title, content) => {
  //   const post = {
  //     id: nextId,
  //     title: title,
  //     content: content,
  //   };
  //   setPosts((posts) => posts.concat(post));
  //   nextId.current++;
  // };

  // const onInsert = async (title, content) => {
  //   try {
  //     const data = await axios({
  //       url: `http://localhost:4001/boards/insert`,
  //       method: "POST",
  //       data: title,
  //       content,
  //     });
  //     console.log(data);
  //     setPosts((posts) => [...posts, data.data]);
  //   } catch (e) {
  //     setError(e);
  //   }
  // };

  const onRemove = async (id) => {
    try {
      await axios({
        url: `http://localhost:4001/boards/${id}`,
        method: "DELETE",
      });
      setPosts((posts) => posts.filter((post) => post.id !== id));
    } catch (e) {
      setError(e);
    }
    alert("게시글이 삭제됩니다.");
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await axios({
          url: "http://localhost:4001/boards",
          method: "GET",
        });
        // console.log(data);
        setPosts(data.data);
        setIsLoading(false);
      } catch (e) {
        setError(e);
      }
    };
    getData();
  }, []);

  if (error) {
    return <>에러 : {error.message}</>;
  }

  if (isLoading) {
    return <>LOADING ...</>;
  }

  return (
    <>
      <Notice>
        <TableHeader>
          <Post_List posts={posts} onRemove={onRemove} />
        </TableHeader>
      </Notice>
    </>
  );
};

export default Notice_app;
