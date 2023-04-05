import React from "react";
import MyNav from "../components/MyNav";
import { Col, Container, Row } from "react-bootstrap";
import mainimg from "../assets/images/img/header/mainimg.png";
const Header = () => {
  return (
    <section className="bg-black overflow-hidden position-relative">
      <MyNav />
      <Container className="py-lg-5">
        <Row className=" justify-content-between align-items-center py-4 flex-column-reverse flex-lg-row ">
          <Col lg={6} className="text-center text-lg-start mt-3 mt-lg-0">
            <h1 className="ff_lato_800 fs_4xl color_white pe-lg-5">
              Welcome to <span className=" color_cream"> Cyber Drops</span>
            </h1>
            <p className="ff_lato_400 fs_sm color_white mt-4">
              Viverra felis, dui adipiscing ipsum pharetra donec. Pretium,
              tempus, enim tincidunt at nibh duis iaculis in mauris. Id elit nec
              curabitur purus. Ullamcorper mattis risus suspendisse pretium
              tristique.
            </p>
            <button className="ff_lato_600 fs_md btnhover bg_cream color_white border-0 p_12_25 border_radius_8 mt-5">
              Explore Now
            </button>
          </Col>
          <Col lg={5} className="text-center text-lg-end">
            <img src={mainimg} alt="mainimg" className="w-100 max_w_410" />
          </Col>
        </Row>
      </Container>
      <div className="max_hw182 position-absolute top-0 start-0"></div>
    </section>
  );
};

export default Header;
