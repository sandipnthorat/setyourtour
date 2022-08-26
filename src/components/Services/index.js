import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./Services.css";

const Services = (props) => {
  let navigate = useNavigate();

  return (
    <Container className="about-container">
      <Row>
        <Col className="contact-block-heading" xs={12} sm={12} md={12}>
          <p className="title">{"Know"}</p>
          <p className="sub-title">{"Our Services"}</p>
          <hr />
        </Col>

        <Col className="contact-block-heading" xs={12} sm={12} md={12}>
          <p className="details">
            <p>
              {
                "We are Dealing in Corporate, Company Contract, B2B & B2C Contract and Pan India Taxi Services,  Domestic Tours, International Tours."
              }
            </p>
            <p>
              {
                "An extensive range of guided group tours, speciality tours, customized holidays, suitable for people of all ages, which help create memories that last for a lifetime!"
              }
            </p>
            <p>
              {
                "One Line Tour Price, Always All Inclusive. No Additions - No Confusion, No Hidden Costs."
              }
            </p>
            <p>
              {
                "We care to be truthful and transparent at all levels of our organization. We attempt towards redeeming top indent service situations which is only possible with a transparent and open culture."
              }
            </p>
            <p>
              {
                "We fully recognize the trust you place in us and with your unceasing support, we assure to maintain our best-in- class service."
              }
            </p>
            <p>
              {
                "The corporate trip conditions of companies generally for Meetings, encouragements, Conferences, Exhibitions & Enjoyment as well."
              }
            </p>
            <p>
              {
                "Company also offers a range of taxi/bus services bookable in advance and online and at very competitive rates. By using top of the range & well maintained cars driven by reliable drivers we can help you to"
              }
            </p>
            <p>
              {
                "avoid the hassle and inconvenience of organizing your own transfers, sightseeing trips and onward travel."
              }
            </p>
            <p>
              {
                "Local Vehicles | Outstation Vehicles | Same Day Return Trip | Overnight Trip Flight, Railway, Travel Ticket bookings. Hotel Bookings. Passport services."
              }
            </p>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Services;
