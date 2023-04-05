import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import firstimg from "../assets/images/img/whatwedo/1st.png";
import secondimg from "../assets/images/img/whatwedo//2nd.png";
import thirdimg from "../assets/images/img/whatwedo//3rd.png";
import umbrella from "../assets/images/img/whatwedo/umbrelala.png";
const WhatWeDo = () => {
  return (
    <section className="bg-black mt_minus4 py-5 overflow-x-hidden position-relative">
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <Row>
              <Col md={6}>
                <img src={firstimg} alt="firstimg" className="w-100" />
              </Col>
              <Col md={6} className="transform_transx_34 mt-4 mt-sm-0">
                <img src={secondimg} alt="secondimg" className="w-100" />
              </Col>
              <Col md={6} className="transform_transx_y mt-4 mt-lg-0">
                <img src={thirdimg} alt="thirdimg" className="w-100" />
              </Col>
              <Col md={6} className="transform_transx_y4rth mt-4 mt-lg-0">
                <img src={thirdimg} alt="thirdimg" className="w-100" />
              </Col>
            </Row>
          </Col>
          <Col lg={6} className="text-center text-lg-start mt-5 mt-lg-0">
            <div className="mw_73 ms-auto">
              <p className="ff_lato_700 fs_xxxl color_white">
                What <span className="color_cream"> we do</span>
              </p>
              <p className="ff_lato_400 fs_sm color_white">
                1000 Cyber Drops will be dropping on Ethereum in March 2022.
                Each and every Cyber Drop is uniquely hand crafted. This is just
                the beginning of our journey. Owning a Cyber Drop will unlock
                monthly airdrops and future governance rights in addition to our
                revolutionary algorithm. We strive to always bring innovation
                and keep BUILDing. Cyber Drops is a community driven project and
                always will be that way. That’s our promise.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <img
        src={umbrella}
        alt="umbrella"
        className=" position-absolute end-0 whatwedoimgpos d-none d-xxl-block"
      />
    </section>
  );
};

export default WhatWeDo;
