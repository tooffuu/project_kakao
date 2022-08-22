import React from "react";
import "../styles/Content7.scss";

const Content7 = () => {
  const imgArr2 = "/images/icons/home_arr2.png";
  const main_loan = "/images/images/main-loan.png";

  return (
    <nav className="content7">
      <span className="ico_star ico_star1"></span>
      <span className="ico_star ico_star2"></span>
      <span className="ico_star ico_star3"></span>
      <span className="ico_star ico_star4"></span>
      <span className="ico_star ico_star5"></span>
      <span className="ico_star ico_star6"></span>
      <span className="ico_star ico_star7"></span>
      <span className="ico_star ico_star8"></span>
      <div className="sky">
        <div className="content7-0">
          <span className="moon">
            <span className="moon_original"></span>
            <span className="moon_shadow"></span>
          </span>
          <div className="content7-1">
            <div className="con7_text">
              <h2>복잡한 서류 제출을 간편하게, 내가 원하는 시간에</h2>
              <p className="con7_bodytext">
                이사 날짜가 주말이나 공휴일이어도 전월세보증금 대출을 신청할 수
                있습니다.
              </p>
              <div className="link_bank3">
                <a href="#">
                  마이너스 통장대출
                  <img src={imgArr2} alt="" />
                </a>
                <a href="#">
                  신용대출
                  <img src={imgArr2} alt="" />
                </a>
                <a href="#">
                  개인사업자 대출
                  <img src={imgArr2} alt="" />
                </a>
                <a href="#">
                  전월세보증금 대출
                  <img src={imgArr2} alt="" />
                </a>
              </div>
            </div>
          </div>
          <div className="loanImage">
            <img src={main_loan} alt="" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Content7;
