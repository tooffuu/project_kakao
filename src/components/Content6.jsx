import React, { useEffect } from "react";
import "../styles/Content6.scss";
import AOS from "aos";
import "aos/dist/aos.css";

const Content4 = () => {
  const imgFor = "/images/images/main-foreign-new.png";
  const imgArr = "/images/icons/home_arr.ico";
  const imgMap = "/images/images/home_map.png";

  useEffect(() => {
    AOS.init();
  });

  return (
    <nav className="content6">
      <img src={imgMap} alt="" />
      <div className="content6-0">
        <div className="content6-1">
          <img
            data-aos="fade-up"
            data-aos-duration="1300"
            data-aos-once="true"
            data-aos-offset="50%"
            src={imgFor}
            alt=""
          />
          <div className="con2_text">
            <h2>
              해외계좌송금과
              <br />
              WU빠른해외송금을
              <br />더 쉽고, 저렴하게
            </h2>
            <p className="con6_bodytext">
              해외계좌송금이 가능한 22개국을 포함하여
              <br />
              전세계 200여개국으로 <br />
              WU빠른해외송금이 가능합니다.
            </p>
            <div className="link_bank2">
              <a href="#">
                해외송금
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
