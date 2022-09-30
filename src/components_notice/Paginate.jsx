import React, { useState } from "react";
import "../notice_styles/Paginate.scss";
import Pagination from "react-js-pagination";

const Paginate = ({ postsPerPage, paginate, totalPosts }) => {
  // const pageNumbers = [];
  // for (let i = 1; i < Math.ceil(totalPosts / postsPerPage) + 1; i++) {
  //   // Math.ceil : 올림 <
  //   pageNumbers.push(i); //.push 배열에 요소 추가
  // }
  const [page, setPage] = useState(1);

  const handlePageChange = (page) => {
    setPage(page);
    console.log(page);
  };

  return (
    <div className="page_div">
      <nav>
        <ul className="pagination">
          <Pagination
            activePage={page}
            itemsCountPerPage={15}
            totalItemsCount={totalPosts}
            pageRangeDisplayed={5}
            prevPageText={"<"}
            nextPageText={">"}
            onChange={handlePageChange}
            onClick={paginate(page)}
          ></Pagination>
          {/* {pageNumbers.map((number) => (
            <li key={number} className="page_item">
              <span
                className="page-link"
                onClick={() => {
                  paginate(number);
                }}
              >
                {number}
              </span>
            </li>
          ))} */}
        </ul>
      </nav>
    </div>
  );
};

export default Paginate;
