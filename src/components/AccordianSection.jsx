import { Container } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import firstimg from "../assets/images/svg/nav1st.svg";
import secondimg from "../assets/images/svg/nav2nd.svg";
import thirdimg from "../assets/images/svg/nav3rd.svg";
import foruthimg from "../assets/images/svg/nav4rth.svg";
import umbrela from "../assets/images/img/accrodian/footerdownumbrella.png";
import posumbrella from "../assets/images/img/accrodian/dogeumbrella.png";
function BasicExample() {
  return (
    <section className="bg-black position-relative">
      <p className="ff_lato_700 color_cream fs_xxxl text-center">
        FAQ<span className="color_white">’s</span>
      </p>
      <Container className="py-5">
        <div className="max_w_280 mx-auto">
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                Egestas scelerisque duis quis aliquet. Consectetur?
              </Accordion.Header>
              <Accordion.Body>
                Viverra metus viverra rhoncus eget quam suspendisse diam amet,
                nisl. Mattis maecenas libero lacinia accumsan amet. Quam quam
                egestas feugiat amet. Ut nibh vulputate.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1" className="mt-4">
              <Accordion.Header>
                Ac nec enim amet, leo lorem quis neque vitae aliquet?
              </Accordion.Header>
              <Accordion.Body>
                Viverra metus viverra rhoncus eget quam suspendisse diam amet,
                nisl. Mattis maecenas libero lacinia accumsan amet. Quam quam
                egestas feugiat amet. Ut nibh vulputate.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2" className="mt-4">
              <Accordion.Header>
                Sit laoreet nibh sit hac potenti. Non ullamcorper fames nibh
                donec?
              </Accordion.Header>
              <Accordion.Body>
                Viverra metus viverra rhoncus eget quam suspendisse diam amet,
                nisl. Mattis maecenas libero lacinia accumsan amet. Quam quam
                egestas feugiat amet. Ut nibh vulputate.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3" className="mt-4">
              <Accordion.Header>
                Porta amet tortor nec pulvinar urna. Et blandit sit id?
              </Accordion.Header>
              <Accordion.Body>
                Viverra metus viverra rhoncus eget quam suspendisse diam amet,
                nisl. Mattis maecenas libero lacinia accumsan amet. Quam quam
                egestas feugiat amet. Ut nibh vulputate.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4" className="mt-4">
              <Accordion.Header>
                Tellus hendrerit fermentum ut hendrerit ac vestibulum?
              </Accordion.Header>
              <Accordion.Body>
                Viverra metus viverra rhoncus eget quam suspendisse diam amet,
                nisl. Mattis maecenas libero lacinia accumsan amet. Quam quam
                egestas feugiat amet. Ut nibh vulputate.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
        <div className="py-5"></div>
        <div className="text-center pt-lg-5 mt-lg-5">
          <img src={umbrela} alt="umbrela" />
          <p className="ff_lato_600 color_cream fs_xxl">Cyber Drops</p>
          <p className="ff_lato_400 color_white fs_xsm max_w_444 mx-auto">
            Viverra metus viverra rhoncus eget quam suspendisse diam amet, nisl.
            Mattis maecenas libero lacinia accumsan amet.
          </p>
          <div className="d-flex ms-lg-4 mt-5 mt-lg-0 justify-content-center">
            <a
              href="#"
              className="borderwhite aspect_ratio_3 position-relative "
            >
              <img
                src={firstimg}
                alt="link"
                className="ms-1 position-relative z_2   trans_translatex_minus1"
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
                className="ms-1 position-relative z_2 trans_translatex_minus1"
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
                className="ml_2 position-relative z_2 trans_x_2px trans_translatex_minus1"
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
                className="position-relative trans_1px z_2  "
              />
            </a>
          </div>
        </div>
      </Container>
      <p className="ff_lato_400 fs_xsm color_grey mb-0 text-center border_top py-3">
        Copyright By 2022
      </p>
      <img
        src={posumbrella}
        alt="posumbrella"
        className=" position-absolute start-0 pos_doge_umbrella d-none d-xxl-block"
      />
    </section>
  );
}

export default BasicExample;
