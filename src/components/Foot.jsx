import React from "react";
import "../styles/Foot.scss";

const Foot = () => {
  return (
    <nav className="foot">
      <div className="inner_foot">
        <div className="footer_info">
          <a href="#">모바일뱅킹 서비스 이용약관</a>
          <span className="txt_bar"></span>
          <a href="#">전자금융거래 기본약관</a>
          <span className="txt_bar"></span>
          <a className="link_bold" href="#">
            위치기반 서비스 이용약관
          </a>
          <span className="txt_bar"></span>
          <a className="link_bold" href="#">
            개인정보처리방침
          </a>
          <span className="txt_bar"></span>
          <a className="link_bold" href="#">
            전자민원접수
          </a>
          <span className="txt_bar"></span>
          <a href="#">보호금융상품등록부</a>
          <span className="txt_bar"></span>
          <a href="#">상품공시실</a>
          <span className="txt_bar"></span>
          <a href="#">경영공시</a>
          <span className="txt_bar"></span>
          <a href="#">공지사항</a>
          <span className="txt_bar_2">
            <br />
          </span>
          <a href="#">전자서명인증업무준칙</a>
          <span className="txt_bar"></span>
          <a href="#">카카오뱅크 인증서 서비스 이용약관</a>
          <span className="txt_bar"></span>
          <a href="#">카카오뱅크 인증서 서비스 개인정보처리방침</a>
        </div>
        <div className="foot_bar">
          <br />
          <span className="text_tel">
            (주)카카오뱅크∙윤호영∙사업자번호 375-88-00197
          </span>
          <span className="text_tel text_tel_2">&nbsp;대표전화 1599-3333</span>
          <span className="text_tel">&nbsp;(해외 +82-2-6420-3333) </span>
          <br />
          <span className="text_tel cop">
            Copyright © KakaoBank Corp. All rights reserved.
          </span>
          <br />
          <div className="last_bar">
            <a href="#">
              <img
                src="https://www.kakaobank.com/static/images/web/footer/webaccessibility.png"
                alt=""
              />
              <span>웹 접근성 품질인증</span>
            </a>
            <div className="sns_bar">
              <ul>
                <li>
                  <img src="" alt="" />
                </li>
              </ul>
              <ul>
                <li>
                  <img src="" alt="" />
                </li>
              </ul>
              <ul>
                <li>
                  <img src="" alt="" />
                </li>
              </ul>
              <ul>
                <li>
                  <img src="" alt="" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Foot;
