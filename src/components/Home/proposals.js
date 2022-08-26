import { useNavigate, NavLink } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Proposals = (props) => {
  const { data } = props;
  const navigate = useNavigate();

  return (
    <>
      <Container>
        <Row>
          <Col className="block-heading" xs={12} sm={12} md={12}>
            <p className="title">{"Our Proposals"}</p>
            <p className="sub-title">{"Our Destinations"}</p>
          </Col>
        </Row>
        <Row>
          {data.map((obj, i) => {
            return (
              obj.onHomePage && (
                <Col
                  key={obj.id}
                  className="proposal-card-col"
                  xs={12}
                  sm={6}
                  md={4}
                >
                  <Card className="proposal-card">
                    <img
                      alt={obj.alt}
                      src={require(`../../assets/proposals/${obj.img}`)}
                    />
                    {/* <img
                      alt={obj.alt}
                      src={require(`../../assets/proposals/3.jpg`)}
                    /> */}
                    <p className="details">
                      {/* <h4 className="title">{obj.title}</h4> */}
                      <span className="package">{obj.packagesTitle}</span>
                    </p>
                    <div className="packages-details">
                      <p>
                        <h5 className="title">{"Packages"}</h5>
                        {obj.packages.map((e) => {
                          return (
                            <NavLink
                              key={e.pkgName}
                              className="nav-link"
                              to={`/packages`}
                            >
                              <p className="destination-title">{e.pkgName}</p>
                            </NavLink>
                          );
                        })}
                        <Button
                          onClick={() => {
                            navigate("/packages", {
                              state: { id: obj.id },
                            });
                          }}
                          className="view-destionation-button"
                          variant="outline-warning"
                        >
                          {"VIEW DESTINATION"}
                        </Button>
                      </p>
                    </div>
                  </Card>
                </Col>
              )
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default Proposals;
