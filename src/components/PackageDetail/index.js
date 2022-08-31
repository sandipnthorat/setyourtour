import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./PackageDetail.css";
import { packagesData } from "../../assets/tourData";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

export const PackageDetails = (props) => {
  const { state } = useLocation();
  const { data } = packagesData;
  const [details, setDetails] = useState();

  const colors = [
    "#293462",
    "#E94560",
    "#533483",
    "#0096FF",
    "#0F3460",
    "#FFD32D",
    "#781C68",
    "#1F4690",
    "#18978F",
    "#F94C66",
    "#EC994B",
    "#F8CB2E",
    "#EE5007",
    "#C65D7B",
    "#D9CE3F",
    "#019267",
    "#FFD32D",
    "#256D85",
  ];

  const navigate = useNavigate();

  useEffect(() => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    console.log("details------->", state);
    // console.log("data------->", packagesData);
    filterPackages(state.id, state.pkgId, packagesData);
  }, []);

  const filterPackages = (categoryId, packageId, data) => {
    let tempData = [];
    data.forEach((obj) => {
      if (obj.id == categoryId) {
        obj.packages.forEach((item) => {
          if (item.id == packageId) {
            tempData.push({
              pkgDetails: item,
              id: obj.id,
              img: obj.img,
              label: obj.label,
              subTitle: obj.subTitle,
              title: obj.title,
            });
          }
        });
      }
    });
    setDetails(tempData[0]);
    console.log("tempData ----->", tempData[0]);
  };

  const titleCase = (str) => {
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  };

  return (
    details && (
      <>
        <div
          className="title-img"
          style={{
            backgroundImage: `url(${require(`../../assets/proposals/${details.pkgDetails.img}`)})`,
          }}
        >
          <span className="category-label">
            <h5>{titleCase(details.label)}</h5>
            <h1>{titleCase(details.pkgDetails.label)}</h1>
          </span>
        </div>

        <Container>
          <Row>
            <Col xs={12} sm={12} md={8}>
              <Row className="div-block">
                <Col className="details-block-heading" xs={12} sm={12} md={12}>
                  <h6
                    className="title"
                    style={{ color: colors[details.pkgDetails.id] }}
                  >
                    {"Detailed"}
                  </h6>
                  <h1 className="sub-title">{"Description"}</h1>
                  <hr />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur ut venenatis lorem. Nunc sodales interdum rhoncus.
                    Nulla a leo finibus, ullamcorper lorem vel, scelerisque
                    massa. Vivamus leo dui, interdum non fermentum eget, laoreet
                    ac lorem. Aliquam a ultricies nisl. Nulla consequat lobortis
                    urna sed cursus.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur ut venenatis lorem. Nunc sodales interdum rhoncus.
                    Nulla a leo finibus, ullamcorper lorem vel, scelerisque
                    massa. Vivamus leo dui, interdum non fermentum eget, laoreet
                    ac lorem. Aliquam a ultricies nisl. Nulla consequat lobortis
                    urna sed cursus.
                  </p>
                </Col>
              </Row>

              <Row className="div-block">
                <Col className="details-block-heading" xs={12} sm={12} md={12}>
                  <h6
                    className="title"
                    style={{ color: colors[details.pkgDetails.id] }}
                  >
                    {"Find Route On"}
                  </h6>
                  <h1 className="sub-title">{"Map"}</h1>
                </Col>
                <Col xs={12} sm={12} md={12}>
                  <iframe
                    src="https://www.google.com/maps/d/u/0/embed?mid=1osb4AlRuk2EA1xVH3ARMrFr-zMV9KN0&ehbc=2E312F"
                    width="100%"
                    height="400"
                  ></iframe>
                </Col>
              </Row>

              <Row className="div-block">
                <Col className="details-block-heading" xs={12} sm={12} md={12}>
                  <h6
                    className="title"
                    style={{ color: colors[details.pkgDetails.id] }}
                  >
                    {"Day by Day"}
                  </h6>
                  <h1 className="sub-title">{"Agenda"}</h1>
                </Col>
                <Col xs={12} sm={12} md={12}>
                  <Accordion style={{ marginTop: "1em" }}>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>
                        <h6>
                          DAY 1 - Departure at the airport and arrival at the
                          hotel
                        </h6>
                      </Accordion.Header>
                      <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="1">
                      <Accordion.Header>
                        <h6>
                          DAY 2 - Visit the main museums and lunch included
                        </h6>
                      </Accordion.Header>
                      <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="2">
                      <Accordion.Header>
                        <h6>
                          DAY 3 - Excursion in the natural oasis and picnic
                        </h6>
                      </Accordion.Header>
                      <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </Col>
              </Row>
            </Col>
            <Col xs={12} sm={12} md={4}>
              <Row>
                <Col className="right-col-cards" xs={12} sm={12} md={12}>
                  <Card
                    className="right-card"
                    style={{
                      boxShadow: `5px 5px 10px 0px ${
                        colors[details.pkgDetails.id]
                      }1a`,
                    }}
                  >
                    <Card.Body>
                      <Row className="card-body-text">
                        <Col className="packages-card-kpi" xs={6} sm={6} md={6}>
                          <div className="circle-kpi">
                            <span
                              className="material-icons-outlined"
                              style={{ color: colors[details.pkgDetails.id] }}
                            >
                              location_on
                            </span>
                            <p className="circle-kpi-label">Goa</p>
                          </div>
                        </Col>
                        <Col className="packages-card-kpi" xs={6} sm={6} md={6}>
                          <div className="circle-kpi">
                            <span
                              className="material-icons-outlined"
                              style={{ color: colors[details.pkgDetails.id] }}
                            >
                              calendar_month
                            </span>
                            <p className="circle-kpi-label">01-Sep-2022</p>
                          </div>
                        </Col>
                        <Col className="packages-card-kpi" xs={6} sm={6} md={6}>
                          <div className="circle-kpi">
                            <span
                              className="material-icons-outlined"
                              style={{ color: colors[details.pkgDetails.id] }}
                            >
                              timer
                            </span>
                            <p className="circle-kpi-label">3D / 4N</p>
                          </div>
                        </Col>
                        <Col className="packages-card-kpi" xs={6} sm={6} md={6}>
                          <div className="circle-kpi">
                            <span
                              class="material-icons-outlined"
                              style={{ color: colors[details.pkgDetails.id] }}
                            >
                              currency_rupee
                            </span>
                            <p className="circle-kpi-label">
                              20,000 <sub>/Person</sub>{" "}
                            </p>
                          </div>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </Col>

                <Col className="right-col-cards" xs={12} sm={12} md={12}>
                  <Card
                    className="right-card"
                    style={{
                      boxShadow: `5px 5px 10px 0px ${
                        colors[details.pkgDetails.id]
                      }1a`,
                    }}
                  >
                    <Card.Header>Inclusions In Package</Card.Header>
                    <ListGroup variant="flush">
                      <ListGroup.Item>3 Breakfast</ListGroup.Item>
                      <ListGroup.Item>Travaling by Train/Plane</ListGroup.Item>
                      <ListGroup.Item>Cruise Party</ListGroup.Item>
                      <ListGroup.Item>Party With Dinner</ListGroup.Item>
                    </ListGroup>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </>
    )
  );
};
