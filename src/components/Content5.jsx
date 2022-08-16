import React from "react";
import "../styles/Content5.scss";

const Content5 = () => {
  const imgArr = "/images/icons/home_arr.ico";
  const imgSvg6 = "/images/images/main-26weeks.png";

  return (
    <nav className="content3">
      <div className="content3-0">
        <div className="con3_text">
          <h2>
            함께 도전해서
            <br />
            재미있는 26주적금
          </h2>
          <p className="con3_bodytext">
            26주동안 변화하는 재미에 빠져있는 사이
            <br />
            어느덧 만기 달성 경험을 맛보게 됩니다.
          </p>
          <div className="savingButton">
            <a href="#">
              정기예금
              <img src={imgArr} alt="" />
            </a>
          </div>
        </div>
        <div className="con5-saving">
          <img src={imgSvg6} alt="" />
        </div>
      </div>
    </nav>
  );
};

export default Content5;
