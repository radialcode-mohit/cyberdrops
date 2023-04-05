import React from "react";
import { Container } from "react-bootstrap";

const Roadmap = () => {
  return (
    <section className="bg-black bgimgroadmap py-lg-5">
      <p className="ff_lato_700 fs_xxxl color_white text-center">
        Road<span className="color_cream">Map</span>
      </p>
      <Container className="py-5">
        <div className="max_w_830 mx-auto">
          <div class="timeline">
            <div class="containertimeline right">
              <div class="content max_w_30 0 ms-5 m s-auto">
                <h2 className="ff_lato_600 fs_lg color_white">March 2022</h2>
                <p className="ff_lato_400 fs_xsm color_white">
                  1000 Drops Launch on Ethereum
                </p>
              </div>
            </div>
            <div class="containertimeline2 left text-end">
              <div class="content2">
                <div className="paddingend">
                  <h2 className="ff_lato_600 fs_lg color_white">March 2022</h2>
                  <p className="ff_lato_400 fs_xsm color_white">
                    1000 Drops Launch on Ethereum
                  </p>
                </div>
              </div>
            </div>
            <div class="containertimeline3 right">
              <div class="content max_w_30 0 ms-5 m s-auto">
                <h2 className="ff_lato_600 fs_lg color_white">March 2022</h2>
                <p className="ff_lato_400 fs_xsm color_white">
                  Creation of Treasury
                </p>
              </div>
            </div>
            <div class="containertimeline4 left text-end">
              <div class="content2">
                <div className="paddingend">
                  <h2 className="ff_lato_600 fs_lg color_white">April 2022</h2>
                  <p className="ff_lato_400 fs_xsm color_white">
                    Our First Airdrop
                  </p>
                </div>
              </div>
            </div>
            <div class="containertimeline5 right">
              <div class="content max_w_30 0 ms-5 m s-auto">
                <h2 className="ff_lato_600 fs_lg color_white">June 2022</h2>
                <p className="ff_lato_400 fs_xsm color_white">Major Collabs</p>
              </div>
            </div>
            <div class="containertimeline6 left text-end">
              <div class="content2">
                <div className="paddingend">
                  <h2 className="ff_lato_600 fs_lg color_white">
                    Sometime in Q3
                  </h2>
                  <p className="ff_lato_400 fs_xsm color_white">
                    Cyber Celebs come on Ethereum
                  </p>
                </div>
              </div>
            </div>
            <div class="containertimeline7 right">
              <div class="content max_w_30 0 ms-5 m s-auto">
                <h2 className="ff_lato_600 fs_lg color_white">
                  Sometime in Q3
                </h2>
                <p className="ff_lato_400 fs_xsm color_white">
                  Streetwear + Merch
                </p>
              </div>
            </div>
          </div>
          <div class="containertimeline8 left text-end">
            <div class="content2">
              <div className="paddingend">
                <h2 className="ff_lato_600 fs_lg color_white">
                  Sometime in Q4
                </h2>
                <p className="ff_lato_400 fs_xsm color_white">
                  Enhanced Partnerships
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Roadmap;
