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

// *******************************Slider Images ******************************
import groupJSE from "../../assets/slider/Group of JNEC.jpg";
import industrialTrip from "../../assets/slider/Industrial Trip.jpg";
import kashidBeach from "../../assets/slider/Kashid Beach.jpg";

import dividerImg from "../../assets/nainital.jpg";

// *****************************Package Data *************************
import { packagesData } from "../../assets/tourData";

const Home = (props) => {
  let navigate = useNavigate();

  const sliderData = [
    { id: 1, label: "Group of JNEC", img: groupJSE },
    { id: 2, label: "Industrial Trip", img: industrialTrip },
    { id: 3, label: "Kashid Beach", img: kashidBeach },
  ];

  return (
    <>
      <Container>
        <Row>
          <Col xs={12} sm={12} md={12}>
            {sliderData && <Slider data={sliderData} />}
          </Col>
        </Row>

        <Row>
          <Col xs={12} sm={12} md={12}>
            {packagesData && <Proposals data={packagesData} />}
          </Col>
        </Row>
      </Container>

      <div className="horizontal-image">
        <img src={dividerImg} />
        <div className="horizontal-img-text">
          <Container>
            <Row>
              <Col style={{ textAlign: "center" }} xs={12} sm={6} md={6}>
                <h6>{"SET YOUR TOUR"}</h6>
                <h6>{"WITH US"}</h6>
              </Col>
              <Col style={{ textAlign: "center" }} xs={12} sm={6} md={6}>
                <Button
                  onClick={() => navigate("/packages")}
                  className="view-all-packages"
                  variant="outline-primary"
                >
                  {" view all packages"}
                </Button>
              </Col>
            </Row>
          </Container>
        </div>
      </div>

      <Container>
        {/* <Row>
          <Col xs={12} sm={12} md={12}>
            <HomeTrip
              catId={packagesData[3].id}
              pkgId={packagesData[3].packages[3].id}
              imgPath={packagesData[3].packages[0].img}
              title={packagesData[3].title}
              subTitle={packagesData[3].subTitle}
              description={packagesData[3].description}
            />
          </Col>
        </Row> */}

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
