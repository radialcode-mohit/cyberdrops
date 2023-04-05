import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import fristimg from "../assets/images/img/meettheteam/1st.png";
import secondimg from "../assets/images/img/meettheteam/2nd.png";
import discord from "../assets/images/img/meettheteam/discord.png";
import twetter from "../assets/images/img/meettheteam/twetter.png";
import m from "../assets/images/img/meettheteam/m.png";
import umbrella from "../assets/images/img/meettheteam/umbrella.png";
import Slider from "react-slick";
const MeetTheTeam = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="bg-black py-5 overflow-x-hidden position-relative">
      <Container className="py-lg-5">
        <p className="ff_lato_700 fs_xxxl color_white text-center">
          Meet the <span className="color_cream"> Team</span>
        </p>
        <Row className="py-5 mx-auto max_w_320">
          <Slider {...settings}>
            <Col xs={12} sm={6} lg={6}>
              <div className="bg-white rounded-5 mx-4">
                <Row className="align-items-xl-center">
                  <Col lg={6}>
                    <img
                      src={fristimg}
                      alt="specsman"
                      className="w-100 h-100"
                    />
                  </Col>
                  <Col lg={6} className="text-center">
                    <div className="p-4">
                      <p className="ff_lato_700 fs_lg mb-0">Varun Muthu</p>
                      <p className="ff_lato_500 fs_sm mb-5">
                        Marketing Director
                      </p>
                      <p href="#" className="ff_lato_400 fs_xsm color_black">
                        https://www.linkedin.com <br /> /in/varunmuthu1
                      </p>
                      <div className="d-flex justify-content-center align-items-center mt-5">
                        <a href="#">
                          {" "}
                          <img src={discord} alt="discordlogo" />
                        </a>
                        <a href="#">
                          {" "}
                          <img
                            src={twetter}
                            alt="twetterlogo"
                            className="ms-3"
                          />
                        </a>
                        <a href="#">
                          {" "}
                          <img src={m} alt="mlogo" className="ms-3" />
                        </a>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col lg={6}>
              <div className="bg-white rounded-5 mx-4">
                <Row className="align-items-xl-center">
                  <Col lg={6}>
                    <img
                      src={secondimg}
                      alt="manw=ithgoggles"
                      className="w-100 h-100"
                    />
                  </Col>
                  <Col lg={6} className="text-center">
                    <div className="p-4">
                      <p className="ff_lato_700 fs_lg mb-0">Shubh Sharma</p>
                      <p className="ff_lato_500 fs_sm mb-5">
                        {" "}
                        Operations Director
                      </p>
                      <p href="#" className="ff_lato_400 fs_xsm color_black">
                        https://www.linkedin.com
                        <br />
                        /in /shubhsharma01/
                      </p>
                      <div className="d-flex justify-content-center align-items-center mt-5">
                        <a href="#">
                          {" "}
                          <img src={discord} alt="discordlogo" />
                        </a>
                        <a href="#">
                          {" "}
                          <img
                            src={twetter}
                            alt="twetterlogo"
                            className="ms-3"
                          />
                        </a>
                        <a href="#">
                          {" "}
                          <img src={m} alt="mlogo" className="ms-3" />
                        </a>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col lg={6}>
              <div className="bg-white rounded-5 mx-4">
                <Row className="align-items-xl-center">
                  <Col lg={6}>
                    <img
                      src={secondimg}
                      alt="manw=ithgoggles"
                      className="w-100 h-100"
                    />
                  </Col>
                  <Col lg={6} className="text-center">
                    <div className="p-4">
                      <p className="ff_lato_700 fs_lg mb-0">Shubh Sharma</p>
                      <p className="ff_lato_500 fs_sm mb-5">
                        {" "}
                        Operations Director
                      </p>
                      <a href="#" className="ff_lato_400 fs_xsm color_black">
                        https://www.linkedin.com/in <br />
                        /shubhsharma01/
                      </a>
                      <div className="d-flex justify-content-center align-items-center mt-5">
                        <a href="#">
                          {" "}
                          <img src={discord} alt="discordlogo" />
                        </a>
                        <a href="#">
                          {" "}
                          <img
                            src={twetter}
                            alt="twetterlogo"
                            className="ms-3"
                          />
                        </a>
                        <a href="#">
                          {" "}
                          <img src={m} alt="mlogo" className="ms-3" />
                        </a>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col lg={6}>
              <div className="bg-white rounded-5 mx-4">
                <Row className="align-items-xl-center">
                  <Col lg={6}>
                    <img
                      src={secondimg}
                      alt="manw=ithgoggles"
                      className="w-100 h-100"
                    />
                  </Col>
                  <Col lg={6} className="text-center">
                    <div className="p-4">
                      <p className="ff_lato_700 fs_lg mb-0">Shubh Sharma</p>
                      <p className="ff_lato_500 fs_sm mb-5">
                        {" "}
                        Operations Director
                      </p>
                      <a href="#" className="ff_lato_400 fs_xsm color_black">
                        https://www.linkedin.com/in <br />
                        /shubhsharma01/
                      </a>
                      <div className="d-flex justify-content-center align-items-center mt-5">
                        <a href="#">
                          {" "}
                          <img src={discord} alt="discordlogo" />
                        </a>
                        <a href="#">
                          {" "}
                          <img
                            src={twetter}
                            alt="twetterlogo"
                            className="ms-3"
                          />
                        </a>
                        <a href="#">
                          {" "}
                          <img src={m} alt="mlogo" className="ms-3" />
                        </a>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Slider>
        </Row>
      </Container>
      <div className="max_hw182 position-absolute end-0 whitedivpos"></div>
      <img
        src={umbrella}
        alt="umbrella"
        className=" position-absolute umbrellaimgpos start-0 d-none d-xxl-block
        "
      />
      {/* <img
        src={umbrella}
        alt="umbrella"
        className=" position-absolute bottomumbrellaimgpos end-0"
      /> */}
    </section>
  );
};

export default MeetTheTeam;
