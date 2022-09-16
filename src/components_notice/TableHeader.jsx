import React from "react";
import "../notice_styles/TableHeader.scss";

const TableHeader = ({ children }) => {
  return (
    <>
      <div className="all_a">
        <button
          className="button_1"
          onClick={() => {
            document.location.href = "/write";
          }}
        >
          작성
        </button>
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
