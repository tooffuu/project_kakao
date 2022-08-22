import React from "react";
import "../styles/Content9.scss";

const Content9 = () => {
  const home_it = "/images/images/home_it.png";

  return (
    <nav className="content9">
      <div className="text_bar_line"></div>
      <div className="content9-0">
        <div className="text9">
          <h2>
            IT 기술로 카카오뱅크를 <br />
            만들어 갑니다.
          </h2>
          <div className="text_bar"></div>
        </div>
        <div className="home_it">
          <img src={home_it} alt="" />
          <ul className="last_text">
            <li className="last_1">
              <strong>간결하고, 유려하게</strong>
              <p>
                작은 모바일 화면에 적합하도록 <br />
                복잡함을 덜어낸 <br />
                유려하고 친화적인 UX
              </p>
            </li>
            <li className="last_1">
              <strong>간편한 인증, 철저한 보안</strong>
              <p>
                지문, 비밀번호로 간편한 인증 <br />
                IT 기술의 강력한 보안 검증과 <br />
                데이터 암호화
              </p>
            </li>
            <li></li>
            <li className="last_1">
              <strong>Mobile First, One App</strong>
              <p>
                모바일에서 뱅킹이 더 쉽고 편리하게
                <br />
                여러 앱을 설치할 필요 없이
                <br />
                하나의 앱으로
              </p>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Content9;
