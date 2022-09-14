import React from "react";
import { Link } from "react-router-dom";
import "../notice_styles/TableHeader.scss";

const TableHeader = ({ children }) => {
  return (
    <>
      <div className="all_a">
        <Link to="/write">
          <button className="button_1">글쓰기</button>
        </Link>
        <table className="notice_top">
          <thead className="header">
            <tr>
              <th>No</th>
              <th>제목</th>
              <th>등록일</th>
              <th>🎃</th>
            </tr>
          </thead>
        </table>
        <div className="post_box">{children}</div>
      </div>
    </>
  );
};

export default TableHeader;
