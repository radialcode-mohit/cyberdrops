import React, { useState } from "react";
import { Container } from "react-bootstrap";
import pagelogo from "../assets/images/img/pagelogo.png";
import firstimg from "../assets/images/svg/nav1st.svg";
import secondimg from "../assets/images/svg/nav2nd.svg";
import thirdimg from "../assets/images/svg/nav3rd.svg";
import foruthimg from "../assets/images/svg/nav4rth.svg";
import close from "../assets/images/img/navicons/close.png";
const MyNav = () => {
  const [first, setfirst] = useState(true);
  if (first) {
    document.body.classList.remove("overflow-hidden");
  } else {
    document.body.classList.add("overflow-hidden");
  }
  return (
    <nav className="bg-black py-1">
      <Container>
        <div className="d-flex justify-content-between align-items-center">
          <a href="#">
            <img src={pagelogo} alt="pagelogo" />
          </a>

          <ul
            className={
              first
                ? "d-flex align-items-center mb-0 ps-0 ulmodification flex-column flex-lg-row justify-content-center justify-content-lg-between left100"
                : "d-flex align-items-center mb-0 ps-0 ulmodification flex-column flex-lg-row justify-content-center justify-content-lg-between left0"
            }
          >
            <li className="">
              <a
                href="#"
                className="ff_lato_400 fs_xsm color_white clr_hover_chnge"
              >
                {" "}
                Home
              </a>
            </li>
            <li className=" ms-lg-3 mt-5 mt-lg-0">
              <a
                href="#"
                className="ff_lato_400 fs_xsm color_white clr_hover_chnge"
              >
                {" "}
                About
              </a>
            </li>
            <li className=" ms-lg-3 mt-5 mt-lg-0">
              <a
                href="#"
                className="ff_lato_400 fs_xsm color_white clr_hover_chnge"
              >
                {" "}
                Team
              </a>
            </li>
            <li className=" ms-lg-3 mt-5 mt-lg-0">
              <a
                href="#"
                className="ff_lato_400 fs_xsm color_white clr_hover_chnge"
              >
                {" "}
                Roadmap
              </a>
            </li>
            <li className=" ms-lg-3 mt-5 mt-lg-0">
              <a
                href="#"
                className="ff_lato_400 fs_xsm color_white clr_hover_chnge"
              >
                {" "}
                Partners
              </a>
            </li>
            <li className="d-flex ms-lg-4 mt-5 mt-lg-0">
              <a
                href="#"
                className="borderwhite aspect_ratio_3 position-relative "
              >
                <img
                  src={firstimg}
                  alt="link"
                  className="ms-1 position-relative z_2  "
                />
                <span className="rgba"></span>
              </a>
              <a
                href="#"
                className="ms-3 borderwhite aspect_ratio_3 position-relative"
              >
                <img
                  src={secondimg}
                  alt="link"
                  className="ms-1 position-relative z_2"
                />
                <span className="rgba"></span>
              </a>
              <a
                href="#"
                className="ms-3 borderwhite aspect_ratio_3 position-relative"
              >
                <span className="rgba"></span>
                <img
                  src={thirdimg}
                  alt="link"
                  className="ml_2 position-relative z_2 trans_x_2px"
                />
              </a>
              <a
                href="#"
                className="ms-3 borderwhite aspect_ratio_3 position-relative"
              >
                <span className="rgba"></span>
                <img
                  src={foruthimg}
                  alt="link"
                  className="position-relative trans_1px z_2 "
                />
              </a>
            </li>
            <li className="ms-lg-3 mt-5 mt-lg-0 ">
              <a
                href="#"
                className="ff_lato_500 fs_xsm color_white bg_cream btnhover  border_radius_8 py-2 px-3"
              >
                Connect Wallet
              </a>
            </li>
            <img
              src={close}
              alt="close"
              className="position-absolute crosspos d-lg-none"
              onClick={() => {
                setfirst(true);
              }}
            />
          </ul>
          <a
            href="#"
            className="naviconcontainer d-lg-none"
            onClick={() => {
              setfirst(false);
            }}
          >
            <span className="navicons"></span>
            <span className="navicons"></span>
            <span className="navicons"></span>
          </a>
        </div>
      </Container>
    </nav>
  );
};

export default MyNav;
