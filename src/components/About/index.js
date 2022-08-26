import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./About.css";

const About = (props) => {
  let navigate = useNavigate();

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
            <p>
              {
                "Setyourtour.com is the Aurangabad, Maharashtra based Destination Management as well as Travel Company for Customized, Domestic & International Tour packages."
              }
            </p>
            <p>
              {
                "We are serving the B2B & B2C segment of the travel and tourism industry."
              }
            </p>
            <p>
              {
                "We are passionate professionals who are driven by a customer-centric approach."
              }
            </p>
            <p>
              {
                "Since 2012, setyourtour.com was created with the idea of presenting a chance to every Indian, with a budget constraint but an affection to journey, within India and around the world."
              }
            </p>
            <p>
              {
                "Being aware of travelers' ever-evolving needs, we always ensure to cater unique destination concepts, which have been acknowledged as innovations in the Tourism Industry."
              }
            </p>
            <p>
              {
                "So, if you are planning a tour- just let us know the details of your travel period, budget and desired destinations & setyourtour.com, will plan and organize for you the Most Memorable Holiday!"
              }
            </p>
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
            <p>
              {
                "To grow an inclusive and sustainable tourism economy through: Good corporate and cooperative management. Strategic partnerships and collaboration. Innovation and knowledge management."
              }
            </p>
            <p>
              {
                "Contribute as much as we can for the country's sustainable tourism development."
              }
            </p>
            <p>
              {
                "We will put our entire power to deliver prompt and quality services/experience to the travelers, our Industry Partners and associates with complete satisfaction and rates that nobody can get."
              }
            </p>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
