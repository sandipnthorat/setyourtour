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

// *******************************Praposals Images ******************************
// import boddhgaya from "../../assets/proposals/boddhgaya.jpg";
// import kerala from "../../assets/proposals/kerala.jpg";
// import manali from "../../assets/proposals/manali.jpg";
// import shimla from "../../assets/proposals/shimla.jpg";
// import kashmir from "../../assets/proposals/kashmir.jpg";
// import nainital from "../../assets/nainital.jpg";

// import kashmir from "../../assets/proposals/KASHMIR.jpg";
// import kerala from "../../assets/proposals/2.jpg";
// import sikkim from "../../assets/proposals/3.jpg";
// import himachal from "../../assets/proposals/4.jpg";
// import lehLadhak from "../../assets/proposals/5.jpg";
// import utarakhand from "../../assets/proposals/6.jpg";
// import telangana from "../../assets/proposals/7.jpg";
// import karnataka from "../../assets/proposals/8.jpg";
// import goa from "../../assets/proposals/9.jpg";
// import gujrat from "../../assets/proposals/10.jpg";
// import maharashtra from "../../assets/proposals/11.jpg";
// import nortEast from "../../assets/proposals/12.jpg";
// import westBengal from "../../assets/proposals/13.jpg";
// import rajasthan from "../../assets/proposals/14.jpg";
// import odisha from "../../assets/proposals/15.jpg";
// import andraPradesh from "../../assets/proposals/16.jpg";
// import tamilNadu from "../../assets/proposals/17.jpg";
// import madhyaPradesh from "../../assets/proposals/18.jpg";
// import uttarPradesh from "../../assets/proposals/19.jpg";
// import andamanNicobar from "../../assets/proposals/20.jpg";

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
