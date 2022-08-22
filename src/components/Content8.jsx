import React from "react";
import "../styles/Content8.scss";

const Content8 = () => {
  const imgArr = "/images/icons/home_arr.ico";
  const card_1 = "/images/images/card-1.png";
  const card_2 = "/images/images/card-2.png";
  const card_3 = "/images/images/card-3.png";
  const card_4 = "/images/images/card-4.png";
  const card_5 = "/images/images/card-5.png";

  return (
    <nav className="content8">
      <div className="content8-0">
        <div className="con8_text">
          <h2>
            프렌즈 체크카드,
            <br />
            내가 고르는 선택의 즐거움
          </h2>
          <p className="con8_bodytext">
            프렌즈 디자인부터 멋스러운 블랙 컬러 카드까지 원하는 디자인과 기능을
            선택할 수 있습니다.
          </p>
          <div className="link_bank8">
            <a href="#">
              카카오뱅크 프렌즈 체크카드
              <img src={imgArr} alt="" />
            </a>
          </div>
        </div>
        <div>
          {/* <img src={card_1} alt="믿음직스러운 사자, 라이언 체크카드" />
          <img src={card_2} alt="애교만점 복숭아, 어피치 체크카드" />
          <img src={card_3} alt="토끼 옷을 입은, 무지 체크카드" />
          <img src={card_4} alt="작은 악어를 닮은, 콘 체크카드" />
          <img src={card_5} alt="캐릭터 없이 시크한, 블랙 체크카드" /> */}
        </div>
      </div>
    </nav>
  );
};

export default Content8;
