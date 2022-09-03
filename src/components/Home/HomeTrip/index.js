import { useNavigate, NavLink } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import "./homeTrip.css";
import { useState } from "react";

const HomeTrip = (props) => {
  const { data } = props;
  const { packages } = data;
  const [selectedPackage, setSelectedPackage] = useState(0);
  let navigate = useNavigate();

  return (
    <Container className="home-trip-container">
      <Row>
        <Col className="trip-block-heading" xs={12} sm={12} md={8}>
          <p className="title">{packages[selectedPackage].title}</p>
          <p className="sub-title">{packages[selectedPackage].subTitle}</p>
          <p className="trip-block-description">
            <p>{packages[selectedPackage].description.first}</p>
            <p>{packages[selectedPackage].description.second}</p>
          </p>
          <span className="bottom-div">
            <h2>
              <span
                style={{ color: "#dadada", textDecoration: "line-through" }}
              >
                {/* {"25000"} */}
              </span>{" "}
              {packages[selectedPackage].price} &#8377;
              <span className="for-person-txt" style={{ fontSize: "14px" }}>
                {" "}
                {"/ PERSON"}
              </span>
            </h2>
            <Button
              onClick={() =>
                navigate("/packageDetails", {
                  state: {
                    pkgId: packages[selectedPackage].id,
                    id: data.id,
                  },
                })
              }
              className="book-now-button"
              variant="outline-primary"
            >
              {"Book Now"}
            </Button>
          </span>
        </Col>
        <Col className="trip-block-img" xs={12} sm={12} md={4}>
          <img
            src={require(`../../../assets/proposals/${data.category}/${packages[selectedPackage].img}`)}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default HomeTrip;
