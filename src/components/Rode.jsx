/* global kakao */
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Foot from "./Foot";
import "../styles/Rode.scss";

const { kakao } = window;

const Rode = () => {
  useEffect(() => {
    var container = document.getElementById("map");
    var options = {
      center: new window.kakao.maps.LatLng(
        37.39545057333142,
        127.11217004159914
      ),
      level: 3,
    };
    var map = new window.kakao.maps.Map(container, options);

    var markerPosition = new window.kakao.maps.LatLng(
      37.39545057333142,
      127.11217004159914
    );
    var marker = new window.kakao.maps.Marker({
      position: markerPosition,
    });
    marker.setMap(map);
  }, []);

  useEffect(() => {
    var container = document.getElementById("map2");
    var options = {
      center: new kakao.maps.LatLng(37.52707902387554, 126.92780578416111),
      level: 3,
    };
    var map = new kakao.maps.Map(container, options);

    var markerPosition = new kakao.maps.LatLng(
      37.52707902387554,
      126.92780578416111
    );
    var marker = new kakao.maps.Marker({
      position: markerPosition,
    });
    marker.setMap(map);
  }, []);

  return (
    <>
      <nav className="menu-bar rode_bar">
        <div className="menu-bar-1">
          <a href="/">
            <img
              src="https://www.kakaobank.com/static/images/web/logo_white.svg"
              alt=""
            />
          </a>
          <nav className="items rode_items">
            <ul className="nav-item">
              <li>
                <a href="#">은행소개</a>
                <div className="menu-2 rode-menu">
                  <div>
                    <ul>
                      <li>
                        <a href="#">카카오뱅크</a>
                        <ul>
                          <li>
                            <a href="#">브랜드</a>
                          </li>
                          <li>
                            <a href="#">주주사 소개</a>
                          </li>
                          <li>
                            <Link to="/rodemap">오시는 길</Link>
                          </li>
                          <li>
                            <a href="#">제휴문의</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">윤리경영</a>
                        <ul>
                          <li>
                            <a href="#">윤리강령</a>
                          </li>
                          <li>
                            <a href="#">임직원행동기준</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">인재영입 ></a>
                      </li>
                      <li>
                        <a href="#">새소식</a>
                        <ul>
                          <li>
                            <Link to="/notice">공지사항</Link>
                          </li>
                          <li>
                            <a href="#">보도자료</a>
                          </li>
                          <li>
                            <a href="#">입찰공고</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
            <ul className="nav-item">
              <li>
                <a href="#">IR투자정보</a>
                <div className="menu-2 rode-menu">
                  <div>
                    <ul>
                      <li>
                        <a href="#">공시정보</a>
                        <ul>
                          <li>
                            <a href="#">전자공시</a>
                          </li>
                          <li>
                            <a href="#">경영공시</a>
                          </li>
                          <li>
                            <a href="#">바젤공시</a>
                          </li>
                          <li>
                            <a href="#">기타공시</a>
                          </li>
                          <li>
                            <a href="#">공시규정</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">경영정보</a>
                        <ul>
                          <li>
                            <a href="#">이사회</a>
                          </li>
                          <li>
                            <a href="#">지속가능경영</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">재무정보</a>
                        <ul>
                          <li>
                            <a href="#">재무제표</a>
                          </li>
                          <li>
                            <a href="#">감사보고서</a>
                          </li>
                          <li>
                            <a href="#">영업보고서</a>
                          </li>
                          <li>
                            <a href="#">신용등급</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">IR자료실</a>
                        <ul>
                          <li>
                            <a href="#">실적발표</a>
                          </li>
                          <li>
                            <a href="#">주가정보</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">IR일정</a>
                        <ul>
                          <li>
                            <a href="#">IR행사</a>
                          </li>
                          <li>
                            <a href="#">IR미팅예약</a>
                          </li>
                          <li>
                            <a href="#">주주총회</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">공고</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
            <ul className="nav-item">
              <li>
                <a href="#">상품안내</a>
                <div className="menu-2 rode-menu">
                  <div>
                    <ul>
                      <li>
                        <a href="#">예적금</a>
                        <ul>
                          <li>
                            <a href="#">입출금통장</a>
                          </li>
                          <li>
                            <a href="#">모임통장</a>
                          </li>
                          <li>
                            <a href="#">세이프박스</a>
                          </li>
                          <li>
                            <a href="#">저금통</a>
                          </li>
                          <li>
                            <a href="#">정기예금</a>
                          </li>
                          <li>
                            <a href="#">자유적금</a>
                          </li>
                          <li>
                            <a href="#">26주적금</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">대출</a>

                        <ul>
                          <li>
                            <a href="#">비상금대출</a>
                          </li>
                          <li>
                            <a href="#">마이너스 통장대출</a>
                          </li>
                          <li>
                            <a href="#">신용대출</a>
                          </li>
                          <li>
                            <a href="#">개인사업자 대출</a>
                          </li>
                          <li>
                            <a href="#">전월세보증금 대출</a>
                          </li>
                          <li>
                            <a href="#">주택담보대출</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">서비스</a>
                        <ul>
                          <li>
                            <a href="#">내 신용정보</a>
                          </li>
                          <li>
                            <a href="#">해외송금 보내기</a>
                          </li>
                          <li>
                            <a href="#">해외송금 받기</a>
                          </li>
                          <li>
                            <a href="#">프렌즈 체크카드</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">제휴서비스</a>
                        <ul>
                          <li>
                            <a href="#">증권사 주식계좌</a>
                          </li>
                          <li>
                            <a href="#">제휴 신용카드</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">mini</a>
                        <ul>
                          <li>
                            <a href="#">카카오뱅크 mini</a>
                          </li>
                          <li>
                            <a href="#">mini카드</a>
                          </li>
                          <li>
                            <a href="#">mini 26일저금</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
            <ul className="nav-item">
              <li>
                <a href="#">고객센터</a>
                <div className="menu-2 rode-menu">
                  <div>
                    <ul>
                      <li>
                        <a href="#">이용안내</a>
                        <ul>
                          <li>
                            <a href="#">자주 묻는 질문</a>
                          </li>
                          <li>
                            <a href="#">이용시간 안내</a>
                          </li>
                          <li>
                            <a href="#">ATM 이용안내</a>
                          </li>
                          <li>
                            <a href="#">금리안내</a>
                          </li>
                          <li>
                            <a href="#">금리인하요구권 안내</a>
                          </li>
                          <li>
                            <a href="#">수수료안내</a>
                          </li>
                          <li>
                            <a href="#">상담안내</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">상담하기</a>
                        <ul>
                          <li>
                            <a href="#">고객의 소리</a>
                          </li>
                          <li>
                            <a href="#">1:1 문의</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">소비자보호</a>
                        <ul>
                          <li>
                            <a href="#">소비자보호체계</a>
                          </li>
                          <li>
                            <a href="#">소비자보호 우수사례</a>
                          </li>
                          <li>
                            <a href="#">전자민원</a>
                          </li>
                          <li>
                            <a href="#">소비자보호공시</a>
                          </li>
                          <li>
                            <a href="#">민원사무편람</a>
                          </li>
                          <li>
                            <a href="#">금융정보</a>
                          </li>
                          <li>
                            <a href="#">금융사기 관련공시</a>
                          </li>
                          <li>
                            <a href="#">보안취약점 신고 안내</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">증명서</a>
                        <ul>
                          <li>
                            <a href="#">나의 증명서 발급내역</a>
                          </li>
                          <li>
                            <a href="#">증명서 진위 확인</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">약관 ・ 서식</a>
                        <ul>
                          <li>
                            <a href="#">약관</a>
                          </li>
                          <li>
                            <a href="#">서식</a>
                          </li>
                          <li>
                            <a href="#">상품설명서</a>
                          </li>
                          <li>
                            <a href="#">상품공시</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
            <ul className="nav-item">
              <li>
                <a href="#">이벤트</a>
              </li>
            </ul>
            <nav className="nav-item submit">
              <li>
                <a href="#">서류제출하기</a>
              </li>
            </nav>
          </nav>
        </div>
      </nav>
      <div className="rode_content">
        <div className="rode_body">
          <div className="rode_con">
            <div className="tit_cont" id="wrapper">
              <h2>
                <br />
                오시는 길
              </h2>
              <div className="rode_api">
                <h3>판교오피스</h3>
                <br />
                <div className="address">
                  <span>
                    <strong>주소&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong>
                    경기도 성남시 분당구 분당내곡로 131, 11층(백현동,
                    판교테크원)
                  </span>
                  <br />
                  <br />
                  <span>
                    <strong>전화&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong>
                    02-6288-6000
                  </span>
                </div>
              </div>
              <div className="map" id="map"></div>
              <div className="rode_api rode_api_2">
                <h3>서울오피스 (고객센터)</h3>
                <br />
                <div className="address">
                  <span>
                    <strong>주소&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong>
                    서울특별시 영등포구 여의대로 108 파크원 타워 2 35층
                  </span>
                  <br />
                  <br />
                  <span>
                    <strong>전화&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong>
                    1599-3333
                  </span>
                </div>
              </div>
              <div className="map" id="map2"></div>
            </div>
          </div>
        </div>
        <div className="footer">
          <Foot />
        </div>
      </div>
    </>
  );
};

export default Rode;
