import React from "react";
import "../styles/Content2.scss";

const Content2 = () => {
  const imgUrl4 = "/images/images/main-withdrawal.png";
  const imgArr = "/images/icons/home_arr.ico";

  return (
    <nav className="content2">
      <div className="content2-0">
        <div className="content2-1">
          <img src={imgUrl4} alt="" />
          <div className="con_text">
            <h2>
              모바일로 더 손쉬운
              <br />
              계좌 개설, 간편한 이체
            </h2>
            <p className="con_bodytext">
              인증서, OTP 없이 계좌 개설이 간편합니다. <br />
              여러 건의 이체도 몇 번의 터치로 손쉽게 보낼 수 있습니다.
            </p>
            <div className="link_bank">
              <a href="#">
                카카오뱅크 입출금통장
                <img className="ico" src={imgArr} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Content2;
