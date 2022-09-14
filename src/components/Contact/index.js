import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { useLocation } from "react-router-dom";

import "./Contact.css";
import { contactData } from "../../assets/utilityData";

const Contact = (props) => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    message: "",
    mailSent: false,
    error: null,
  });
  const [path, setPath] = useState();

  const location = useLocation();

  useEffect(() => {
    setPath(location.pathname);
  }, [location]);

  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const onFormSubmit = (e) => {
    e.preventDefault();
    const finalLink = `*_Enquiry_*%0D%0A*Name:* ${formData.name}%0D%0A*Mobile No.:* ${formData.mobile}%0D%0A*Email:* ${formData.email}%0D%0A*Message:* ${formData.message}`;
    window.open(`${contactData.whatsapp}?text=${finalLink}`, "_blank");
  };

  return (
    <>
      {/* <Container className="contact-top-container"> */}
      <Row
        className="contact-block-heading"
        style={{
          marginTop: path === "/contact" ? "10em" : "",
          marginLeft: "0px",
          marginRight: "0px",
        }}
      >
        <Col xs={12} sm={12} md={12}>
          <p className="title">{"Keep In Touch"}</p>
          <p className="sub-title">{"Traval With Us"}</p>
        </Col>
      </Row>

      <Row className="contact-us-form justify-content-center">
        <Col xs={12} sm={12} md={6} className="mb-4">
          <Form onSubmit={onFormSubmit}>
            <Form.Group className="mb-3">
              <Form.Label className="form-label" htmlFor="fullName">
                Full Name
              </Form.Label>
              <Form.Control
                type="text"
                name="name"
                onChange={handleInputChange}
                id="fullName"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="form-label" htmlFor="mobileNumber">
                Mobile Number
              </Form.Label>
              <Form.Control
                type="Number"
                id="mobileNumber"
                name="mobile"
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="form-label" htmlFor="email">
                Email
              </Form.Label>
              <Form.Control
                type="email"
                id="email"
                name="email"
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="form-label" htmlFor="messageBody">
                Message
              </Form.Label>
              <Form.Control
                type="text"
                as="textarea"
                id="messageBody"
                aria-label="With textarea"
                name="message"
                onChange={handleInputChange}
              />
            </Form.Group>
            <div className="send-footer">
              <Button
                className="send-btn"
                variant="warning"
                type="submit"
                disabled={!formData.mobile || !formData.name || !formData.email}
              >
                Send
              </Button>
            </div>
          </Form>
        </Col>
        <Col xs={12} sm={12} md={6}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15007.372665803248!2d75.28823615799692!3d19.888843280043886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdb983050fcf931%3A0x3d54d9617d4075f!2sNandanvan%20Colony%2C%20Padegaon%2C%20Aurangabad%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1660990979473!5m2!1sen!2sin"
            width="100%"
            height="370"
            style={{ border: "0" }}
            loading="lazy"
          ></iframe>
        </Col>
      </Row>
      {/* </Container> */}
    </>
  );
};

export default Contact;
