import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const PackageList = (props) => {
  const navigate = useNavigate();
  const { data } = props;

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

  const titleCase = (str) => {
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  };

  return (
    <>
      {data.map((cat) => {
        return (
          <div key={cat.label}>
            <Row className="category-details">
              <Col className="title" xs={12} sm={12} md={12}>
                {cat.label}
                <hr />
              </Col>
            </Row>
            <Row>
              {cat.packages.map((pkg) => {
                return (
                  pkg.isVisible && (
                    <Col
                      key={pkg.label}
                      className="packages-cards"
                      xs={12}
                      sm={6}
                      md={4}
                    >
                      <Card style={{ width: "100%", borderRadius: "0px" }}>
                        <Card.Img
                          style={{ height: "20em", borderRadius: "0px" }}
                          variant="top"
                          src={require(`../../assets/proposals/${cat.category}/${pkg.img}`)}
                        />
                        <Card.Body>
                          <Card.Title>
                            <p
                              className="card-title"
                              style={{ color: colors[pkg.id] }}
                            >
                              {titleCase(pkg.label)}
                            </p>
                          </Card.Title>
                          <Card.Subtitle className="mb-4 text-muted card-subtitle">
                            {pkg.subTitle}
                          </Card.Subtitle>
                          <Card.Subtitle
                            className="text-muted card-subtitle"
                            style={{ textAlign: "left" }}
                          >
                            Product Code: {pkg.productCode}
                          </Card.Subtitle>
                          <Card.Text>
                            <Row className="card-body-text">
                              <hr />
                              <Col
                                className="packages-card-kpi"
                                xs={6}
                                sm={6}
                                md={6}
                              >
                                <div className="circle-kpi">
                                  <span
                                    className="material-icons-outlined"
                                    style={{ color: colors[pkg.id] }}
                                  >
                                    location_on
                                  </span>
                                  <OverlayTrigger
                                    key={"tooltip"}
                                    placement={"auto"}
                                    overlay={
                                      <Tooltip className="location-tooltip">
                                        {titleCase(pkg.location)}
                                      </Tooltip>
                                    }
                                  >
                                    <p className="circle-kpi-label">
                                      {titleCase(pkg.location)}
                                    </p>
                                  </OverlayTrigger>
                                </div>
                              </Col>
                              <Col
                                className="packages-card-kpi"
                                xs={6}
                                sm={6}
                                md={6}
                              >
                                <div className="circle-kpi">
                                  <span
                                    className="material-icons-outlined"
                                    style={{ color: colors[pkg.id] }}
                                  >
                                    calendar_month
                                  </span>
                                  <p className="circle-kpi-label">{pkg.date}</p>
                                </div>
                              </Col>
                              <Col
                                className="packages-card-kpi"
                                xs={6}
                                sm={6}
                                md={6}
                              >
                                <div className="circle-kpi">
                                  <span
                                    className="material-icons-outlined"
                                    style={{ color: colors[pkg.id] }}
                                  >
                                    timer
                                  </span>
                                  <p className="circle-kpi-label">
                                    {pkg.duration}
                                  </p>
                                </div>
                              </Col>
                              <Col
                                className="packages-card-kpi"
                                xs={6}
                                sm={6}
                                md={6}
                              >
                                <div className="circle-kpi">
                                  <span
                                    className="material-icons-outlined"
                                    style={{ color: colors[pkg.id] }}
                                  >
                                    currency_rupee
                                  </span>
                                  <p className="circle-kpi-label">
                                    {pkg.price} <sub>/Person</sub>{" "}
                                  </p>
                                </div>
                              </Col>
                              <hr />

                              <Col
                                className="packages-card-inclusion"
                                xs={12}
                                sm={12}
                                md={12}
                              >
                                <span className="inclusion-title">
                                  Inclusions
                                </span>
                                <ul
                                  style={{
                                    height: "10em",
                                    overflow: "hidden",
                                  }}
                                >
                                  {pkg.inclusions.map((i) => {
                                    return (
                                      <li
                                        style={{
                                          padding: "1px",
                                        }}
                                        key={i.label}
                                      >
                                        {i.label}
                                      </li>
                                    );
                                  })}
                                </ul>
                              </Col>
                            </Row>
                          </Card.Text>
                        </Card.Body>
                        <Card.Footer className="card-footer">
                          <button
                            style={{
                              backgroundColor: colors[pkg.id],
                              color: "#fff",
                            }}
                            className="detail-button"
                            onClick={() => {
                              navigate("/packageDetails", {
                                state: {
                                  pkgId: pkg.id,
                                  id: cat.id,
                                },
                              });
                            }}
                          >
                            More Details
                          </button>
                        </Card.Footer>
                        {pkg.isComming && (
                          <div className="card-overlay">
                            <div className="overlay-text">
                              <h3>Comming Soon</h3>
                            </div>
                          </div>
                        )}
                      </Card>
                    </Col>
                  )
                );
              })}
            </Row>
          </div>
        );
      })}
    </>
  );
};
