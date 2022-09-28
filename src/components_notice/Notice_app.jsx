import React, { useEffect, useState } from "react";
import axios from "axios";
import Notice from "./Notice";
import TableHeader from "./TableHeader";
import Post_List from "./Post_List";
import Paginate from "./Paginate";
import Foot from "../components/Foot";

const Notice_app = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(15); // 한 페이지에 나타낼 글 수
  let pageCount = 5;

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await axios({
          url: "http://localhost:4001/boards",
          method: "GET",
        });
        // console.log(data.data);
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

  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;

  const currentPosts = (posts) => {
    let currentPosts = 0;
    currentPosts = posts.slice(indexOfFirst, indexOfLast);
    return currentPosts;
  };

  return (
    <>
      <body>
        <div className="page_container">
          <Notice>
            <TableHeader>
              <Post_List posts={currentPosts(posts)} />
              <Paginate
                postsPerPage={postsPerPage}
                totalPosts={posts.length}
                paginate={setCurrentPage}
                pageCount={pageCount}
              />
            </TableHeader>
          </Notice>
        </div>
      </body>
      <Foot />
    </>
  );
};

export default Notice_app;

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
