import React from "react";
import "../notice_styles/Pagination.scss";

const Pagination = ({ postsPerPage, paginate, totalPosts }) => {
  const pageNumbers = [];
  for (let i = 1; i < Math.ceil(totalPosts / postsPerPage) + 1; i++) {
    // Math.ceil : 올림 <
    pageNumbers.push(i); //.push 배열에 요소 추가
  }

  return (
    <div className="page_div">
      <nav>
        <ul className="pagination">
          {pageNumbers.map((number) => (
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
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
