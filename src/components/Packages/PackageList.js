import React from "react";
import { useNavigate, NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

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
          <>
            <Row className="category-details">
              <Col className="title" xs={12} sm={12} md={12}>
                {cat.label}
                <hr />
              </Col>
            </Row>
            <Row>
              {cat.packages.map((pkg) => {
                return (
                  <Col className="packages-cards" xs={12} sm={6} md={4}>
                    <Card style={{ width: "100%", borderRadius: "0px" }}>
                      <Card.Img
                        style={{ height: "15em", borderRadius: "0px" }}
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
                          {/* {pkg.label} */}
                        </Card.Title>
                        <Card.Subtitle className="mb-2 text-muted card-subtitle">
                          Adventures
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
                                <p className="circle-kpi-label">Goa</p>
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
                                <p className="circle-kpi-label">01-Sep-2022</p>
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
                                <p className="circle-kpi-label">3D / 4N</p>
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
                                  class="material-icons-outlined"
                                  style={{ color: colors[pkg.id] }}
                                >
                                  currency_rupee
                                </span>
                                <p className="circle-kpi-label">
                                  20,000 <sub>/Person</sub>{" "}
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
                              <p>
                                <span className="inclusion-title">
                                  Inclusions
                                </span>
                                <ul>
                                  <li>3 Breakfast</li>
                                  <li>Travaling by Train/Plane</li>
                                  <li>Cruise Party</li>
                                  <li>Party With Dinner</li>
                                </ul>
                              </p>
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
                    </Card>
                  </Col>
                );
              })}
            </Row>
          </>
        );
      })}
    </>
  );
};
