import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";

import "./About.css";
import monoDada from "../../assets/MONO GANVIR.jpg";
import bhushanDada from "../../assets/BHUSHAN MORE.jpg";

const About = (props) => {
  return (
    <Container className="about-container">
      <Row>
        <Col className="about-block-heading" xs={12} sm={12} md={12}>
          <p className="title">{"Know more"}</p>
          <p className="sub-title">{"About Us"}</p>
          <hr />
        </Col>

        <Col className="about-block-heading" xs={12} sm={12} md={10}>
          <p className="details">
            {
              "Setyourtour.com is the Aurangabad, Maharashtra based Destination Management as well as Travel Company for Customized, Domestic & International Tour packages."
            }
          </p>
          <p className="details">
            {
              "We are serving the B2B & B2C segment of the travel and tourism industry."
            }
          </p>
          <p className="details">
            {
              "We are passionate professionals who are driven by a customer-centric approach."
            }
          </p>
          <p className="details">
            {
              "Since 2012, setyourtour.com was created with the idea of presenting a chance to every Indian, with a budget constraint but an affection to journey, within India and around the world."
            }
          </p>
          <p className="details">
            {
              "Being aware of travelers' ever-evolving needs, we always ensure to cater unique destination concepts, which have been acknowledged as innovations in the Tourism Industry."
            }
          </p>
          <p className="details">
            {
              "So, if you are planning a tour- just let us know the details of your travel period, budget and desired destinations & setyourtour.com, will plan and organize for you the Most Memorable Holiday!"
            }
          </p>
        </Col>
      </Row>

      <Row>
        <Col className="about-block-heading" xs={12} sm={12} md={12}>
          <p className="title">{"Know Our"}</p>
          <p className="sub-title">{"Mission"}</p>
          <hr />
        </Col>
        <Col className="about-block-heading" xs={12} sm={12} md={10}>
          <p className="details">
            {
              "To grow an inclusive and sustainable tourism economy through: Good corporate and cooperative management. Strategic partnerships and collaboration. Innovation and knowledge management."
            }
          </p>
          <p className="details">
            {
              "Contribute as much as we can for the country's sustainable tourism development."
            }
          </p>
          <p className="details">
            {
              "We will put our entire power to deliver prompt and quality services/experience to the travelers, our Industry Partners and associates with complete satisfaction and rates that nobody can get."
            }
          </p>
        </Col>
      </Row>

      <Row>
        <Col className="about-block-heading" xs={12} sm={12} md={12}>
          <p className="title">{"Our Team"}</p>
          <p className="sub-title">{"Leaders"}</p>
          <hr />
        </Col>
        {/* <Col
          className="our-team"
          style={{ textAlign: "center" }}
          xs={12}
          sm={12}
          md={12}
        >
          <Row className="our-team-row">
            <Col
              className="mb-4 p-4"
              style={{ padding: "0px", textAlign: "center" }}
              xs={12}
              sm={12}
              md={6}
            >
              <img src={monoDada} alt="mono ganvir" />
              <hr />
              <p className="title">{"Mr. Mono V. Ganvir"}</p>
              <p className="sub-title">{"Founder & Managing Director (MD)"}</p>
              <p className="sub-title">
                <span
                  style={{
                    color: "#fb9d17",
                    fontSize: "14px",
                    padding: "5px",
                  }}
                  className="material-icons-outlined"
                >
                  mail
                </span>
                mono@setyourtour.com
              </p>
              <p className="sub-title">
                <span
                  style={{
                    color: "#fb9d17",
                    fontSize: "14px",
                    padding: "5px",
                  }}
                  className="material-icons-outlined"
                >
                  phone_iphone
                </span>
                +91 9890595216
              </p>
            </Col>
          </Row>
        </Col> */}
        <Col
          className="mb-4 p-4 our-team"
          style={{ padding: "0px", textAlign: "center" }}
          xs={12}
          sm={12}
          md={12}
        >
          <img src={monoDada} alt="mono ganvir" />
          <hr />
          <p className="title">{"Mr. Mono V. Ganvir"}</p>
          <p className="sub-title">{"Founder & Managing Director (MD)"}</p>
          <p className="sub-title">
            <span
              style={{
                color: "#fb9d17",
                fontSize: "14px",
                padding: "5px",
              }}
              className="material-icons-outlined"
            >
              mail
            </span>
            mono@setyourtour.com
          </p>
          <p className="sub-title">
            <span
              style={{
                color: "#fb9d17",
                fontSize: "14px",
                padding: "5px",
              }}
              className="material-icons-outlined"
            >
              phone_iphone
            </span>
            +91 9890595216
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
