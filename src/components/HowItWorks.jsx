import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const HowItWorks = () => {
  return (
    <section className="bg-black py-lg-5">
      <Container>
        <p className="ff_lato_700 fs_xxxl color_white text-center">
          How <span className="color_cream"> it works</span>
        </p>
        <Row className="py-5">
          <Col sm={6} xl={3} className="">
            <div className="text-center border-gradient2 border_4px hoverbgchange h100_btwn_1200_1400">
              <div className="p-5 p-sm-4 p-xl-5 mt-3">
                <span className="p-3 ff_lato_700 fs_xl color_white max_w_71 bg_cream  br_50 hover_bg_white ">
                  01
                </span>
                <p className="ff_lato_700 fs_md color_white mt-5">Mint NFT</p>
                <p className="ff_lato_400 fs_xsm color_white mb-0">
                  You must own our NFT to connect to direct management or
                  participate in governance
                </p>
              </div>
            </div>
          </Col>
          <Col sm={6} xl={3} className=" mt-4 mt-sm-0">
            <div className="text-center border-gradient2 border_4px hoverbgchange">
              <div className="p-5 p-sm-4 p-xl-5  mt-3">
                <span className="p-3 ff_lato_700 fs_xl color_white max_w_71 bg_cream  br_50 hover_bg_white ">
                  02
                </span>
                <p className="ff_lato_700 fs_md color_white mt-5">
                  Verify NFT Ownership
                </p>
                <p className="ff_lato_400 fs_xsm color_white mb-0">
                  Only Cyber Drops that are have verified are eligible to be
                  connected under direct management
                </p>
              </div>
            </div>
          </Col>
          <Col sm={6} xl={3} className=" mt-4 mt-xl-0">
            <div className="text-center border-gradient2 border_4px hoverbgchange">
              <div className="p-5 p-sm-4 p-xl-5 mt-3">
                <span className="p-3 ff_lato_700 fs_xl color_white max_w_71 bg_cream  br_50 hover_bg_white ">
                  03
                </span>
                <p className="ff_lato_700 fs_md color_white mt-5">
                  Link API to your account
                </p>
                <p className="ff_lato_400 fs_xsm color_white mb-0">
                  Only HODLers that submit their API key and secret will be
                  under direct management
                </p>
              </div>
            </div>
          </Col>
          <Col sm={6} xl={3} className=" mt-4 mt-xl-0">
            <div className="text-center border-gradient2 border_4px hoverbgchange">
              <div className="p-5 p-sm-4 p-xl-5 mt-3">
                <span className="p-3 ff_lato_700 fs_xl color_white max_w_71 bg_cream  br_50 hover_bg_white ">
                  04
                </span>
                <p className="ff_lato_700 fs_md color_white mt-5">
                  Passive Income for life
                </p>
                <p className="ff_lato_400 fs_xsm color_white mb-0">
                  As long as your HODL your Cyber Drop, you will be connected
                  under direct management
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HowItWorks;
