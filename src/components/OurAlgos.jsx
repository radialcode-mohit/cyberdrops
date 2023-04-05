import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import firstimg from "../assets/images/img/ouralgos/1st.png";
import green from "../assets/images/img/ouralgos/greenloon.png";
import redwhite from "../assets/images/img/ouralgos/redandwhiteloon.png";

const OurAlgos = () => {
  return (
    <section className="bg-black py-5 mt_minus4 position-relative">
      <div className=" overflow_x_hidden">
        <Container className="py-lg-5">
          <Row className="align-items-center flex-column-reverse flex-lg-row">
            <Col lg={6} className="text-center text-lg-start mt-4 mt-lg-0">
              <div>
                <p className="ff_lato_700 fs_xxxl color_white">
                  Our <span className="color_cream"> Algo</span>
                </p>
                <p className="ff_lato_400 fs_sm color_white">
                  We have perfected our algorithm, which prioritizes a low risk
                  and consistent profit stream without the need for daily
                  micromanagement. While most trading algorithms can’t stand up
                  against a volatile or risky market, our algorithm thrives in
                  those conditions. Early-stage testers have seen a consistent
                  flow of income with minimal ups and downs. Our algorithm has
                  been in the works for YEARS. This has given us the time to
                  rigorously backtest and release any needed hotfixes. As of
                  early March 2022, we have close to a quarter of a million
                  under direct management!
                </p>
              </div>
            </Col>
            <Col lg={6} className="text-end ">
              <div className="d-flex align-items-center flex-lg-row flex-column justify-content-center justify-content-lg-end">
                <div className="d-flex flex-lg-column">
                  <div>
                    <div className="border-gradient2 ">
                      <img
                        src={firstimg}
                        alt="bluellon"
                        className="p-2 w-100"
                      />
                    </div>
                  </div>
                  <div className="mt-lg-4 ms-4 ms-lg-0">
                    <div className="border-gradient2 ">
                      <img src={green} alt="green" className="p-2 w-100" />
                    </div>
                  </div>
                </div>
                <div className="text-end  ms-lg-4 mt-4 mt-lg-0">
                  <div className="border-gradient2 d-inline-block">
                    <img src={redwhite} alt="redwhite" className="p-2 w-100" />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="max_hw182 position-absolute end-0 ouralgowhitepos"></div>
      </div>
    </section>
  );
};

export default OurAlgos;
