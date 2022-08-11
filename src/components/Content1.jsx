import React from "react";
import "../styles/Content1.scss";

const content1 = () => {
  const imgUrl = "/images/main-1.png";
  const imgUrl2 = "/images/icons/google_play.ico";
  const imgUrl3 = "/images/icons/apple_store.ico";

  return (
    <nav className="content-0">
      <div class="content-1">
        <img src={imgUrl} alt="" />
        <div class="text">
          <h2>
            이미 모두의 은행
            <br />
            지금은 카카오뱅크
          </h2>
          <p className="body-text">
            한 사람, 한 사람을 위해 시작한 은행이
            <br />더 많은 사람들이 찾는 모두의 은행이 되었습니다.
          </p>
          <p className="body-text">
            보내고, 받고, 모으고, 쓰는
            <br />
            당신의 모든 일이 바뀌고 있습니다.
          </p>
          <div className="button">
            <ul className="download-button">
              <li>
                <img src={imgUrl2} alt="" />
                <a href="#">Google Play</a>
              </li>
            </ul>
            <ul className="download-button">
              <li>
                <img src={imgUrl3} alt="" />
                <a href="#">App Store</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default content1;
