import React from "react";
import "../styles/Content1.scss";

const content1 = () => {
  const imgUrl = "/images/images/main-1.png";
  const imgUrl2 = "/images/icons/google_play.ico";
  const imgUrl3 = "/images/icons/apple_store.ico";

  return (
    <nav className="content">
      <div className="content-0">
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
                  <a
                    href="https://play.google.com/store/apps/details?id=com.kakaobank.channel"
                    target="_blank" // 새 창으로 열기
                  >
                    <img src={imgUrl2} alt="" />
                    Google Play
                  </a>
                </li>
              </ul>
              <ul className="download-button">
                <li>
                  <a
                    href="https://apps.apple.com/kr/app/id1258016944"
                    target="_blank"
                  >
                    <img src={imgUrl3} alt="" />
                    App Store
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default content1;
