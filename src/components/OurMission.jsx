import React from "react";
import mainimg from "../assets/images/img/ourmission/mainimg.png";
import { Col, Container, Row } from "react-bootstrap";
const OurMission = () => {
  return (
    <section className="bg-black py-5 mt_minus4  position-relative">
      <div className="overflow_x_hidden">
        <Container>
          <Row className="align-items-center flex-column flex-lg-row justify-content-between">
            <Col lg={5} className="text-center text-lg-start ">
              <img
                src={mainimg}
                alt="umbrellaimg"
                className="w-100 max_w_410"
              />
            </Col>
            <Col lg={5} className=" text-center text-lg-start mt-4 mt-lg-0">
              <p className="ff_lato_700  color_white fs_xxxl">
                Our <span className="color_cream"> Mission</span>
              </p>
              <p className="mt-4 ff_lato_400 fs_sm  color_white">
                We understand that one of the biggest concerns for early-stage
                investors is that it can quickly become stressful, overwhelming,
                and especially extremely time consuming. It isn’t easy to
                balance a full time job, family, and an active investment
                portfolio, especially when just starting out.
              </p>
              <button className="ff_lato_600 fs_md bg_cream color_white btnhover border-0 p_12_25 border_radius_8 mt-5">
                Read More
              </button>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="max_hw182 position-absolute top-0 start-0 d-none d-lg-block"></div>
      <div className="max_hw182 position-absolute top-0 end-0 d-none d-lg-block"></div>
    </section>
  );
};

export default OurMission;
