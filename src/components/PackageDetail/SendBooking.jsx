import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { contactData } from "../../assets/utilityData";

export const SendBooking = (props) => {
  const { color } = props;
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    message: "",
    mailSent: false,
    error: null,
  });

  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    console.log(name, value);
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const onFormSubmit = (e) => {
    e.preventDefault();
    // console.log("props --->", props);
    // console.log("value --->", formData);
    const finalLink = `*_Enquiry For_*%0D%0A*Product Code:* ${props.productCode}%0D%0A*Package Name:* ${props.pkgName}%0D%0A*Name:* ${formData.name}%0D%0A*Mobile No.:* ${formData.mobile}%0D%0A*Email:* ${formData.email}%0D%0A*Message:* ${formData.message}`;

    // console.log(`${contactData.whatsapp}?text=${finalLink}`);
    window.open(`${contactData.whatsapp}?text=${finalLink}`, "_blank");
  };

  return (
    <>
      <Form onSubmit={onFormSubmit}>
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
            {/* <fieldset> */}
            <Form.Group className="mb-3">
              <Form.Label htmlFor="name">Full Name</Form.Label>
              <Form.Control
                name="name"
                onChange={handleInputChange}
                type="text"
                id="name"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="mobile">Mobile Number</Form.Label>
              <Form.Control
                name="mobile"
                onChange={handleInputChange}
                type="Number"
                id="mobile"
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
            {/* </fieldset> */}
          </Card.Body>
          <Card.Footer className="send-footer">
            <Button
              className="send-btn"
              variant="link"
              type="submit"
              style={{ color: color, border: `1px solid ${color}` }}
              disabled={!formData.mobile || !formData.email || !formData.name}
            >
              Send Booking
            </Button>
          </Card.Footer>
        </Card>
      </Form>
    </>
  );
};
