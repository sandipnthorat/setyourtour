import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import "./Contact.css";

const Contact = (props) => {
  return (
    <>
      <Container className="contact-top-container">
        <Row>
          <Col className="contact-block-heading" xs={12} sm={12} md={12}>
            <p className="title">{"Keep In Touch"}</p>
            <p className="sub-title">{"Traval With Us"}</p>
          </Col>
        </Row>

        <Row className="contact-us-form justify-content-center">
          <Col xs={12} sm={12} md={6}>
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
                onClick={() => {
                  window.open(
                    "mailto:test@example.com?subject=subject&body=body"
                  );
                }}
              >
                Submit
              </Button>
            </Form>
          </Col>
          <Col xs={12} sm={12} md={6}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15007.372665803248!2d75.28823615799692!3d19.888843280043886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdb983050fcf931%3A0x3d54d9617d4075f!2sNandanvan%20Colony%2C%20Padegaon%2C%20Aurangabad%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1660990979473!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: "0" }}
              loading="lazy"
            ></iframe>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contact;
