import { useNavigate, NavLink } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Proposals = (props) => {
  const { data } = props;
  const navigate = useNavigate();

  const titleCase = (str) => {
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  };

  const navToDetails = (isComming, cat, pkg) => {
    if (isComming) {
      navigate("/packages", {
        state: {
          id: cat.id,
        },
      });
    } else {
      navigate("/packageDetails", {
        state: {
          pkgId: pkg.id,
          id: cat.id,
        },
      });
    }
  };

  return (
    <>
      {/* <Container> */}
      <Row>
        <Col className="block-heading" xs={12} sm={12} md={12}>
          <p className="title">{"Our Proposals"}</p>
          <p className="sub-title">{"Our Destinations"}</p>
        </Col>
      </Row>
      <Row>
        {data.map((obj, i) => {
          return (
            obj.onHomePage &&
            obj.isVisible && (
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
                    src={require(`../../assets/proposals/${obj.category}/${obj.img}`)}
                  />
                  <p className="details">
                    <h4 className="title">{obj.title}</h4>
                    <span className="package">{obj.packagesTitle}</span>
                  </p>
                  <div className="packages-details">
                    <p>
                      {obj.packages.length > 0 && (
                        <h5 className="title">{"Packages"}</h5>
                      )}
                      {obj.packages.map((e, i) => {
                        return (
                          i <= 3 && (
                            <a
                              key={e.label}
                              className="package-nav-link"
                              onClick={(event) =>
                                navToDetails(e.isComming, obj, e)
                              }
                            >
                              <p className="destination-title">
                                {titleCase(e.label)}
                              </p>
                            </a>
                          )
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
                        size="sm"
                      >
                        {"All Packages"}
                      </Button>
                    </p>
                  </div>
                  {obj.isComming && (
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
      {/* </Container> */}
    </>
  );
};

export default Proposals;
