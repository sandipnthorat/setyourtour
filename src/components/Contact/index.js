import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import "./Contact.css";
import location from "../../assets/icons/location.svg";
import mail from "../../assets/icons/mail.svg";
import call from "../../assets/icons/call.svg";
import fax from "../../assets/icons/fax.svg";
import mobile from "../../assets/icons/call.svg";

const Contact = (props) => {
  return (
    <>
      <Container className="contact-top-container">
        <Row>
          <Col className="contact-block-heading" xs={12} sm={12} md={12}>
            <p className="title">Keep In Touch</p>
            <p className="sub-title">Traval With Us</p>
          </Col>
        </Row>

        <Row className="contact-us-form">
          <Col xs={12} sm={12} md={6} style={{ "margin-bottom": "2em" }}>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Your Name" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Control as="textarea" placeholder="Message" rows={3} />
              </Form.Group>

              <Button
                className="submit-contact-form"
                variant="primary"
                type="submit"
              >
                Submit
              </Button>
            </Form>
          </Col>

          <Col xs={12} sm={12} md={6} className="contact-us-address">
            <Row className="align-center">
              <Col xs={1} sm={1} md={1}>
                <img src={location} />
              </Col>
              <Col style={{ "margin-left": "1em" }}>
                <span className="address">
                  Shop No 2, Plot No 242, Saisakshi Residency, Nandanvan Colony,
                  Daulatabad-431002.
                </span>
              </Col>
            </Row>

            <Row className="align-center">
              <Col xs={1} sm={1} md={1}>
                <img src={fax} />
              </Col>
              <Col style={{ "margin-left": "1em" }}>
                <span className="address">240 371516</span>
              </Col>
            </Row>

            <Row className="align-center">
              <Col xs={1} sm={1} md={1}>
                <img src={mobile} />
              </Col>
              <Col style={{ "margin-left": "1em" }}>
                <span className="address">
                  <ul>
                    <li>+91 9890595216</li>
                    <li>+91 8888855401</li>
                    <li>+91 9890595217</li>
                  </ul>
                </span>
              </Col>
            </Row>

            <Row className="align-center">
              <Col xs={1} sm={1} md={1}>
                <img src={mail} />
              </Col>
              <Col style={{ "margin-left": "1em" }}>
                <span className="address">setyourtour@gmail.com</span>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contact;
