import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export const SendBooking = (props) => {
  const { color } = props;
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    message: "",
  });

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
    console.log("value --->", formData);
  };

  return (
    <>
      <Card
        className="right-card"
        style={{
          boxShadow: `5px 5px 10px 0px ${color}1a`,
        }}
      >
        <Card.Header style={{ backgroundColor: color }} className="title">
          Contact Us
        </Card.Header>
        <Card.Body>
          <Form>
            <fieldset>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="fullName">Full Name</Form.Label>
                <Form.Control
                  name="name"
                  onChange={handleInputChange}
                  type="text"
                  id="fullName"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="mobileNumber">Mobile Number</Form.Label>
                <Form.Control
                  name="mobile"
                  onChange={handleInputChange}
                  type="Number"
                  id="mobileNumber"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="email">Email</Form.Label>
                <Form.Control
                  name="email"
                  onChange={handleInputChange}
                  type="email"
                  id="email"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="messageBody">Message</Form.Label>
                <Form.Control
                  type="text"
                  as="textarea"
                  id="messageBody"
                  aria-label="With textarea"
                  name="message"
                  onChange={handleInputChange}
                />
              </Form.Group>
            </fieldset>
          </Form>
        </Card.Body>
        <Card.Footer className="send-footer">
          <Button
            className="send-btn"
            variant="link"
            style={{ color: color, border: `1px solid ${color}` }}
            disabled={!formData.mobile || !formData.email || !formData.name}
          >
            Send Booking
          </Button>
        </Card.Footer>
      </Card>
    </>
  );
};
