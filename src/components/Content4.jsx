import React from "react";
import "../styles/Content4.scss";

const Content4 = () => {
  const imgUrl5 = "/images/images/main-moim.png";
  const imgArr = "/images/icons/home_arr.ico";

  return (
    <nav className="content2">
      <div className="content2-0">
        <div className="content2-1">
          <img src={imgUrl5} alt="" />
          <div className="con2_text">
            <h2>
              함께 쓰고 같이 보는
              <br />
              모임통장
            </h2>
            <p className="con2_bodytext">
              카카오톡 친구를 바로 모임통장으로 초대하고 <br />
              친구들과 함께 잔액과 입출금 현황을 확인할 수 있습니다. <br />
              재미있는 메시지 카드로 회비 입금 요청도 해보세요.
            </p>
            <div className="link_bank2">
              <a href="#">
                모임통장
                <img src={imgArr} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Content4;
