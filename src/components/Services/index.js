import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { services } from "../../assets/utilityData";

import "./Services.css";

const Services = (props) => {
  const servcesData = services;
  return (
    <Container className="services-container">
      <Row>
        <Col className="services-block-heading" xs={12} sm={12} md={12}>
          <p className="title">{"Check Out"}</p>
          <p className="sub-title">{"Our Services"}</p>
          <hr />
        </Col>

        <Col className="services-details" xs={12} sm={12} md={12}>
          <p className="details">
            {
              "One Line Tour Price, Always All Inclusive. No Additions - No Confusion, No Hidden Costs."
            }
          </p>
          <p className="details">
            {
              "We care to be truthful and transparent at all levels of our organization. We attempt towards redeeming top indent service situations which is only possible with a transparent and open culture."
            }
          </p>
        </Col>
      </Row>

      <Row className="mt-4">
        {servcesData.map((obj) => {
          return (
            <Col
              key={obj.label}
              className="services-list mb-4"
              xs={12}
              sm={12}
              md={6}
            >
              <p className="list-header">{obj.label}</p>
              <p className="list-details">{obj.description}</p>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Services;
