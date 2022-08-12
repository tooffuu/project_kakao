import React from "react";
import "../styles/Topbar.scss";

const Topbar = () => {
  return (
    <>
      <head>
        <title>카카오뱅크</title>
      </head>

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
          </ul>
          <div className="items">
            <ul className="nav-item">
              <li>
                <a href="#">은행소개</a>
                <div>
                  <div>
                    <ul>
                      <li>
                        <a href="#">2차 아이템</a>
                        <ul>
                          <li>
                            <a href="#">3차 아이템</a>
                          </li>
                          <li>
                            <a href="#">3차 아이템</a>
                          </li>
                          <li>
                            <a href="#">3차 아이템</a>
                          </li>
                          <li>
                            <a href="#">3차 아이템</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">2차 아이템</a>
                        <ul>
                          <li>
                            <a href="#">3차 아이템</a>
                          </li>
                          <li>
                            <a href="#">3차 아이템</a>
                          </li>
                          <li>
                            <a href="#">3차 아이템</a>
                          </li>
                          <li>
                            <a href="#">3차 아이템</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">2차 아이템</a>
                        <ul>
                          <li>
                            <a href="#">3차 아이템</a>
                          </li>
                          <li>
                            <a href="#">3차 아이템</a>
                          </li>
                          <li>
                            <a href="#">3차 아이템</a>
                          </li>
                          <li>
                            <a href="#">3차 아이템</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">2차 아이템</a>
                        <ul>
                          <li>
                            <a href="#">3차 아이템</a>
                          </li>
                          <li>
                            <a href="#">3차 아이템</a>
                          </li>
                          <li>
                            <a href="#">3차 아이템</a>
                          </li>
                          <li>
                            <a href="#">3차 아이템</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
            <ul className="nav-item">
              <li>
                <a href="#">IR투자정보</a>
              </li>
            </ul>
            <ul className="nav-item">
              <li>
                <a href="#">상품안내</a>
              </li>
            </ul>
            <ul className="nav-item">
              <li>
                <a href="#">고객센터</a>
              </li>
            </ul>
            <ul className="nav-item">
              <li>
                <a href="#">이벤트</a>
              </li>
            </ul>
            <ul className="nav-item submit">
              <li>
                <a href="#">서류제출하기</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Topbar;
