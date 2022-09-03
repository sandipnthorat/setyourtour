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
import Stack from "react-bootstrap/Stack";

import { BookingPolicy } from "./BookingPolicy";
import { CancelationPolicy } from "./CancelationPolicy";
import { IncludeExclude } from "./IncludeExclude";
import { Agenda } from "./Agenda";
import { SendBooking } from "./SendBooking";

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
    filterPackages(state.id, state.pkgId, packagesData);
  }, []);

  const filterPackages = (categoryId, packageId, data) => {
    let tempData = [];
    data.forEach((obj) => {
      if (obj.id == categoryId) {
        obj.packages.forEach((item) => {
          if (item.id == packageId) {
            tempData.push({
              ...obj,
              pkgDetails: item,
            });
          }
        });
      }
    });
    setDetails(tempData[0]);
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
            backgroundImage: `url(${require(`../../assets/proposals/${details.category}/${details.pkgDetails.img}`)})`,
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
                <Col className="locations" xs={12} sm={12} md={12}>
                  <Stack direction="horizontal" gap={3}>
                    <div>
                      <strong>Product Code: </strong>
                    </div>
                    <div>{details.pkgDetails.productCode}</div>
                  </Stack>
                </Col>
                <Col className="locations" xs={12} sm={12} md={12}>
                  <Stack direction="horizontal" gap={3}>
                    <div>
                      <span
                        className="material-icons-outlined"
                        style={{
                          fontSize: "28px",
                          color: colors[details.pkgDetails.id],
                        }}
                      >
                        location_on
                      </span>
                    </div>
                    <div>{details.pkgDetails.location}</div>
                  </Stack>
                </Col>

                <Col
                  className="note"
                  style={{
                    border: `1px solid ${colors[details.pkgDetails.id]}`,
                    boxShadow: `5px 5px 10px 0px ${
                      colors[details.pkgDetails.id]
                    }1a`,
                  }}
                  xs={12}
                  sm={12}
                  md={12}
                >
                  <span>
                    <b>Note: </b>
                    {details.pkgDetails.note}
                  </span>
                </Col>

                {!details.pkgDetails.isCstomized && (
                  <Col
                    className="details-block-heading"
                    xs={12}
                    sm={12}
                    md={12}
                  >
                    <h6
                      className="title"
                      style={{ color: colors[details.pkgDetails.id] }}
                    >
                      {"Detailed"}
                    </h6>
                    <h1 className="sub-title">{"Description"}</h1>
                    <hr />

                    <p>{details.pkgDetails.description.first}</p>
                    <p>{details.pkgDetails.description.second}</p>
                  </Col>
                )}
              </Row>

              <Row className="div-block">
                <Col className="details-block-heading" xs={12} sm={12} md={12}>
                  <h6
                    className="title"
                    style={{ color: colors[details.pkgDetails.id] }}
                  >
                    {"Day by Day"}
                  </h6>
                  <h1 className="sub-title">{"Itinerary"}</h1>
                </Col>
                <Col xs={12} sm={12} md={12}>
                  <Agenda data={details.pkgDetails.dayByDay} />
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
                    src="https://www.google.com/maps/d/u/0/embed?mid=1haVRgY-va0Xlj63QSmjfmHFwlgx9BBY&ehbc=2E312F"
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
                    {"Tour"}
                  </h6>
                  <h1 className="sub-title">{"Booking Policy"}</h1>
                </Col>
                <Col className="details-block-heading" xs={12} sm={12} md={12}>
                  <BookingPolicy data={details.pkgDetails.bookingPolicy} />
                </Col>
              </Row>

              <Row className="div-block">
                <Col className="details-block-heading" xs={12} sm={12} md={12}>
                  <h6
                    className="title"
                    style={{ color: colors[details.pkgDetails.id] }}
                  >
                    {"Tour"}
                  </h6>
                  <h1 className="sub-title">{"Cancellation Policy"}</h1>
                </Col>
                <Col className="details-block-heading" xs={12} sm={12} md={12}>
                  <CancelationPolicy
                    data={details.pkgDetails.cancellationPolicy}
                  />
                </Col>
              </Row>
            </Col>

            {/*********************************************************/}
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
                              calendar_month
                            </span>
                            <p className="circle-kpi-label">
                              {details.pkgDetails.date}
                              <p style={{ margin: "0px", padding: "0px" }}>
                                <b>To</b>
                              </p>
                              {details.pkgDetails.endDate}
                            </p>
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
                            <p className="circle-kpi-label">
                              {details.pkgDetails.duration}
                            </p>
                          </div>
                        </Col>
                        <Col className="packages-card-kpi" xs={6} sm={6} md={6}>
                          <div className="circle-kpi">
                            <span
                              className="material-icons-outlined"
                              style={{ color: colors[details.pkgDetails.id] }}
                            >
                              currency_rupee
                            </span>
                            <p className="circle-kpi-label">
                              {details.pkgDetails.price} <sub>/Person</sub>{" "}
                            </p>
                          </div>
                        </Col>
                        <Col className="packages-card-kpi" xs={6} sm={6} md={6}>
                          <a
                            href={details.pkgDetails.downloadLink}
                            download
                            target="blank"
                            style={{ textDecoration: "none", color: "#555555" }}
                          >
                            <div
                              className="circle-kpi"
                              style={{ cursor: "pointer" }}
                            >
                              <span
                                className="material-icons-outlined"
                                style={{ color: colors[details.pkgDetails.id] }}
                              >
                                cloud_download
                              </span>
                              <p className="circle-kpi-label">Download PDF</p>
                            </div>
                          </a>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </Col>

                <Col className="right-col-cards" xs={12} sm={12} md={12}>
                  <IncludeExclude
                    color={colors[details.pkgDetails.id]}
                    title="Package Inclusion"
                    data={details.pkgDetails.inclusions}
                  />
                </Col>

                <Col className="right-col-cards" xs={12} sm={12} md={12}>
                  <IncludeExclude
                    color={colors[details.pkgDetails.id]}
                    title="Package Exclusion"
                    data={details.pkgDetails.exclusion}
                  />
                </Col>

                <Col className="right-col-cards" xs={12} sm={12} md={12}>
                  <SendBooking color={colors[details.pkgDetails.id]} />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </>
    )
  );
};
