import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import "./Home.css";
import Slider from "./slider";
import Proposals from "./proposals";
import HomeTrip from "./HomeTrip";
import Contact from "../Contact";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import boddhgaya from "../../assets/proposals/boddhgaya.jpg";
import kerala from "../../assets/proposals/kerala.jpg";
import manali from "../../assets/proposals/manali.jpg";
import shimla from "../../assets/proposals/shimla.jpg";
import kashmir from "../../assets/proposals/kashmir.jpg";
import nainital from "../../assets/nainital.jpg";

const Home = (props) => {
  let navigate = useNavigate();

  return (
    <>
      <Container>
        <Row>
          <Col xs={12} sm={12} md={12}>
            <Slider />
          </Col>
        </Row>

        <Row>
          <Col xs={12} sm={12} md={12}>
            <Proposals />
          </Col>
        </Row>
      </Container>

      <div className="horizontal-image">
        <img src={nainital} />
        <div className="horizontal-img-text">
          <Container>
            <Row>
              <Col style={{ "text-align": "center" }} xs={12} sm={6} md={6}>
                <h6>SET YOU TOUR</h6>
                <h6>WITH US...!</h6>
              </Col>
              <Col style={{ "text-align": "center" }} xs={12} sm={6} md={6}>
                <Button className="view-all-packages" variant="outline-primary">
                  view all packages
                </Button>
              </Col>
            </Row>
          </Container>
        </div>
      </div>

      <Container>
        <Row>
          <Col xs={12} sm={12} md={12}>
            <HomeTrip
              imgPath={kashmir}
              title="North India"
              subTitle="The Best Destination"
              description={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages`}
            />
          </Col>
        </Row>

        <Row>
          <Col xs={12} sm={12} md={12}>
            <Contact />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
