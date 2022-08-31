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

  const navToDetails = (event, cat, pkg) => {
    console.log("event", event);
    console.log("cat pkg", cat.id, pkg.id);
    event.preventDefault();
    navigate("/packageDetails", {
      state: {
        pkgId: pkg.id,
        id: cat.id,
      },
    });
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
                  <p className="details">
                    <h4 className="title">{obj.title}</h4>
                    <span className="package">{obj.packagesTitle}</span>
                  </p>
                  <div className="packages-details">
                    <p>
                      <h5 className="title">{"Packages"}</h5>
                      {obj.packages.map((e, i) => {
                        return (
                          i <= 3 && (
                            <a
                              className="package-nav-link"
                              onClick={(event) => navToDetails(event, obj, e)}
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
                      >
                        {"All Packages"}
                      </Button>
                    </p>
                  </div>
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
