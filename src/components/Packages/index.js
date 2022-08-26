import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import "./Package.css";

const Packages = (props) => {
  const { data } = props;
  const locataion = useLocation();
  const { state } = useLocation();
  console.log(state, data);

  const [filterData, setFilterData] = useState();

  useEffect(() => {
    if (state) {
      setFilterData(data);
    } else {
      setFilterData(data);
    }
  }, []);

  return (
    <Container className="package-container">
      <Row>
        <Col className="contact-block-heading" xs={12} sm={12} md={12}>
          <p className="title">{"Explore"}</p>
          <p className="sub-title">{"Pacakges"}</p>
          <hr />
        </Col>
        {data.map((obj) => {
          return (
            <Col xs={12} sm={12} md={4}>
              {obj.id}
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Packages;
