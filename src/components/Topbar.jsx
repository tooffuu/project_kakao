import React from "react";
import "../styles/Topbar.scss";

const Topbar = () => {
  return (
    <>
      <head>
        <title>카카오뱅크</title>
      </head>

      <body>
        <nav className="menu-bar">
          <div className="menu-bar-1">
            <ul className="logo-1">
              <li className="kakaoimage">
                <a href="#">
                  <img
                    src="https://www.kakaobank.com/static/images/web/logo_black.svg"
                    alt=""
                  />
                </a>
              </li>
              <li className="nav-item">
                <a href="#">은행소개</a>
              </li>
              <li className="nav-item">
                <a href="#">IR투자정보</a>
              </li>
              <li className="nav-item">
                <a href="#">상품안내</a>
              </li>
              <li className="nav-item">
                <a href="#">고객센터</a>
              </li>
              <li className="nav-item">
                <a href="#">이벤트</a>
              </li>
              <li className="nav-item submit">
                <a href="#">서류제출하기</a>
              </li>
            </ul>
          </div>
        </nav>
      </body>
    </>
  );
};

export default Topbar;
