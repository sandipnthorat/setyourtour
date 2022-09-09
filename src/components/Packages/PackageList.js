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
                          <Card.Subtitle className="text-muted card-subtitle">
                            {pkg.duration}
                          </Card.Subtitle>
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
