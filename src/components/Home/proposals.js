import { useNavigate, NavLink } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import boddhgaya from "../../assets/proposals/boddhgaya.jpg";
import kerala from "../../assets/proposals/kerala.jpg";
import manali from "../../assets/proposals/manali.jpg";
import shimla from "../../assets/proposals/shimla.jpg";
import kashmir from "../../assets/proposals/kashmir.jpg";

const Proposals = (props) => {
  const width = 340;
  const height = 340;

  const data = [
    {
      img: boddhgaya,
      title: "Boddhgaya",
      packagesTitle: "1 packages",
      alt: "boddhgaya",
      packages: [{ pkgName: "boddhgaya", link: "" }],
    },
    {
      img: kerala,
      title: "Kerala",
      packagesTitle: "1 packages",
      alt: "kerala",
      packages: [{ pkgName: "kerala", link: "" }],
    },
    {
      img: manali,
      title: "Kullu-Manali",
      packagesTitle: "2 packages",
      alt: "manali",
      packages: [
        { pkgName: "Kullu", link: "" },
        { pkgName: "Manali", link: "" },
      ],
    },
    {
      img: manali,
      title: "Manali",
      packagesTitle: "2 packages",
      alt: "manali",
      packages: [
        { pkgName: "Kullu", link: "" },
        { pkgName: "Manali", link: "" },
      ],
    },
    {
      img: shimla,
      title: "Shimla",
      packagesTitle: "1 packages",
      alt: "shimla",
      packages: [{ pkgName: "Shimla", link: "" }],
    },
    {
      img: kashmir,
      title: "Kashmir",
      packagesTitle: "2 packages",
      alt: "kashmir",
      packages: [
        { pkgName: "Jammu", link: "" },
        { pkgName: "Kashmir", link: "" },
        { pkgName: "Ladhak", link: "" },
      ],
    },
  ];

  return (
    <>
      <Container>
        <Row>
          <Col className="block-heading" xs={12} sm={12} md={12}>
            <p className="title">Our Proposals</p>
            <p className="sub-title">Our Destinations</p>
          </Col>
        </Row>
        <Row>
          {data.map((obj, i) => {
            return (
              <Col key={i} className="proposal-card-col" xs={12} sm={6} md={4}>
                <Card className="proposal-card">
                  <img alt={obj.alt} src={obj.img} />
                  <p className="details">
                    <h4 className="title">{obj.title}</h4>
                    <span className="package">{obj.packagesTitle}</span>
                  </p>
                  <div className="packages-details">
                    <p>
                      <h5 className="title">Packages</h5>
                      {obj.packages.map((e) => {
                        return (
                          <NavLink
                            key={e.pkgName}
                            className="nav-link"
                            to="/packages"
                          >
                            <p className="destination-title">{e.pkgName}</p>
                          </NavLink>
                        );
                      })}
                      <Button
                        className="view-destionation-button"
                        variant="outline-warning"
                      >
                        VIEW DESTINATION
                      </Button>
                    </p>
                  </div>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default Proposals;
