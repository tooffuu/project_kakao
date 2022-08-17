import React, { useEffect } from "react";
import "../styles/Content3.scss";
import AOS from "aos";
import "aos/dist/aos.css";

const Content3 = () => {
  const imgArr = "/images/icons/home_arr.ico";
  const imgSvg = "/images/images/main-savings.png";
  const imgSvg2 = "/images/images/main-savings-money.png";

  useEffect(() => {
    AOS.init();
  });

  return (
    <nav className="content3">
      <div className="content3-0">
        <div className="con3_text">
          <h2>
            우대조건 없이
            <br />
            합리적인 예금과 적금
          </h2>
          <p className="con3_bodytext">
            기대했던 금리와 다르게 복잡한 우대조건에 실망한 적이 있었나요?
            <br />
            카카오뱅크의 예금, 적금은 숨겨진 우대조건 없이 누구에게나 편리하고
            합리적입니다.
          </p>
          <div className="savingButton">
            <a href="#">
              정기예금
              <img src={imgArr} alt="" />
            </a>
          </div>
          <div className="savingButton">
            <a href="#">
              자유적금
              <img src={imgArr} alt="" />
            </a>
          </div>
          <div className="con3-money">
            <img src={imgSvg2} alt="" />
          </div>
        </div>
        <div
          className="con3-saving"
          data-aos="fade-left"
          data-aos-duration="1500"
        >
          <img src={imgSvg} alt="" />
        </div>
      </div>
    </nav>
  );
};

export default Content3;
