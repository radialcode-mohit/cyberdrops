import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import firstimg from "../assets/images/img/partnersection/1st.png";
import secondimg from "../assets/images/img/partnersection/2nd.png";
import thirdimg from "../assets/images/img/partnersection/3rd.png";
import fourthimg from "../assets/images/img/partnersection/4rth.png";
const Partners = () => {
  return (
    <section className="bg-black py-5 mt_minus4">
      <p className="ff_lato_700 color_white fs_xxxl text-center">
        Part<span className="color_cream">ners</span>
      </p>
      <div className="partnerssec_bg py-lg-5">
        <div className="py_1700">
          <Container className="py-lg-5">
            <Row className="align-items-center py-lg-5 ">
              <Col lg={4} className="text-center  pt-5">
                <div className="border-gradient border-gradient-purple br py-4">
                  <img
                    src={firstimg}
                    alt="playbitlogo"
                    className="w-1 00 my-2"
                  />
                </div>
                <p className="ff_lato_700 fs_sm pt-4 clr_white_max_lg">
                  Playbit
                </p>
              </Col>
              <Col lg={8} className="text-center mt-sm-5">
                <Row className="justify-content-center ">
                  <Col sm={6} lg={4}>
                    <div className="border-gradient border-gradient-purple px -4">
                      <img src={secondimg} alt="24logo" className="w- 10 0" />
                    </div>
                    <p className="ff_lato_700 fs_sm pt-4 clr_white_max_lg">
                      24 Capital
                    </p>
                  </Col>
                  <Col sm={6} lg={4} className="text-center">
                    <div className="border-gradient border-gradient-purple px -4">
                      <img src={thirdimg} alt="trade" className="w-10 0" />
                    </div>
                    <p className="ff_lato_700 fs_sm pt-4 clr_white_max_lg">
                      TradingHive
                    </p>
                  </Col>
                  <Col sm={6} lg={4} className="text-center mt-sm-4 mt-lg-0">
                    <div className="border-gradient border-gradient-purple px -4">
                      <img
                        src={fourthimg}
                        alt="threecirclelogo"
                        className="w-10 0 mt-1"
                      />
                    </div>
                    <p className="ff_lato_700 fs_sm pt-4 clr_white_max_lg">
                      Focus Group Equities
                    </p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <p className="ff_lato_700 color_cream fs_sm text-center">
        For business and collaborations, contact us team@cyberdrops.finance
      </p>
    </section>
  );
};

export default Partners;
