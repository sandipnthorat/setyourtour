import { useNavigate, NavLink } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import "./homeTrip.css";

const HomeTrip = (props) => {
  return (
    <Container className="home-trip-container">
      <Row>
        <Col className="trip-block-heading" xs={12} sm={6} md={6}>
          <p className="title">{props.title}</p>
          <p className="sub-title">{props.subTitle}</p>
          <p className="trip-block-description">{props.description}</p>
          <h2>
            <span
              style={{ color: "#dadada", "text-decoration": "line-through" }}
            >
              25000
            </span>{" "}
            20000 &#8377;
            <span style={{ "font-size": "14px" }}> / FOR PERSON</span>
          </h2>
          <Button className="book-now-button" variant="outline-primary">
            Book Now
          </Button>
        </Col>
        <Col className="trip-block-img" xs={12} sm={12} md={6}>
          <img src={props.imgPath} />
        </Col>
      </Row>
    </Container>
  );
};

export default HomeTrip;
