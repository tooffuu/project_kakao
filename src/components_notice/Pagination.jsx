import React from "react";
import "../notice_styles/Pagination.scss";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i < Math.ceil(totalPosts / postsPerPage) + 1; i++) {
    pageNumbers.push(i);
  }
  return (
    <div>
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
