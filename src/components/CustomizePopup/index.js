import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import DateRangePicker from "react-bootstrap-daterangepicker";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-daterangepicker/daterangepicker.css";

import "./CustomizePopup.css";
import { contactData } from "../../assets/utilityData";
import { colorData } from "../../assets/utilityData";

export const CustomizePopup = (props) => {
  const { show, data } = props;
  const [formData, setFormData] = useState({
    name: "",
    country: "India",
    mobile: "",
    travelDates: {
      start: "",
      end: "",
    },
    duration: "",
    noOfPerson: "",
    email: "",
    message: "",
  });
  const [validated, setValidated] = useState(false);

  const today = new Date();
  const dtfmt = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  };

  const [date, setDate] = useState({
    inputStart: today.toLocaleDateString("en-US", dtfmt.day),
    inputFinish: today.toLocaleDateString("en-US", dtfmt),
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

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      const finalLink = `*_Enquiry For_*%0D%0A%0D%0A*Package Name:* ${
        data.length > 0 ? data.title : ""
      }%0D%0A*Name:* ${formData.name}%0D%0A*Mobile No.:* ${
        formData.mobile
      }%0D%0A*Email:* ${formData.email}%0D%0A*Message:* ${
        formData.message
      }%0D%0A*No Of Person:* ${formData.noOfPerson}%0D%0A*Duration:* ${
        formData.duration
      }%0D%0A*Start Date:* ${formData.travelDates.start}%0D%0A*End Date:* ${
        formData.travelDates.end
      }`;

      window.open(`${contactData.whatsapp}?text=${finalLink}`, "_blank");
    }

    setValidated(true);
  };

  const titleCase = (str) => {
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  };

  const handleChangeS = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setDate({ inputStart: event.target.value });
  };

  const handleEvent = (event, picker) => {
    setDate({
      inputStart: new Date(picker.startDate).toLocaleDateString("en-US", dtfmt),
      inputFinish: new Date(picker.endDate).toLocaleDateString("en-US", dtfmt),
    });
    setFormData({
      ...formData,
      travelDates: {
        start: new Date(picker.startDate).toLocaleDateString("en-US", dtfmt),
        end: new Date(picker.endDate).toLocaleDateString("en-US", dtfmt),
      },
    });
  };

  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="customize-modal"
      >
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Modal.Header
            closeButton
            style={{
              borderBottom: "0px",
              position: "fixed",
              right: 10,
              zIndex: 1,
            }}
          ></Modal.Header>
          <Modal.Body>
            <Row className="mb-3 popup-row">
              <Col xs={12} sm={12} md={6}>
                <Row>
                  <Col className="popup-form-title" xs={12} sm={12} md={12}>
                    <p>How It Works</p>
                  </Col>
                  <Col className="popup-howitwork-list" xs={12} sm={12} md={12}>
                    <ul>
                      <li>Tell us details of your holiday plan.</li>
                      <li>
                        After you submit the form, one of our travel experts
                        will get back to you with customised holiday package
                        based on your requirement, within 24 hours.
                      </li>

                      <li>
                        Grab the deal and start packing your bags for an
                        indelible holiday with Tour My India.
                      </li>
                    </ul>
                  </Col>

                  <Col style={{ textAlign: "center" }} xs={12} sm={12} md={12}>
                    <hr />
                    <h6>
                      <span
                        class="material-icons-outlined"
                        style={{ color: "#fb9d17" }}
                      >
                        call
                      </span>{" "}
                      Call Us for details
                    </h6>
                    <h4>+91 8381069577</h4>
                  </Col>
                </Row>
              </Col>
              <Col xs={12} sm={12} md={6}>
                <Row>
                  <Col className="popup-form-title" xs={12} sm={12} md={12}>
                    <p>
                      Request a <span>QUOTE</span>
                    </p>
                  </Col>
                  <Col xs={12} sm={12} md={12}>
                    <Form.Group className="mb-2" controlId="validationCustom03">
                      <Form.Label>Full Name</Form.Label>
                      <Form.Control
                        onChange={handleInputChange}
                        name="name"
                        type="text"
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        Please enter full name.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>

                  <Col xs={12} sm={12} md={12}>
                    <Form.Group className="mb-2" controlId="validationCustom03">
                      <Form.Label>Country</Form.Label>
                      <Form.Control
                        onChange={handleInputChange}
                        name="country"
                        type="text"
                        required
                        defaultValue="India"
                      />
                      <Form.Control.Feedback type="invalid">
                        Please enter full name.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>

                  <Col xs={12} sm={12} md={12}>
                    <Form.Group className="mb-2" controlId="validationCustom03">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        onChange={handleInputChange}
                        name="email"
                        type="email"
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        Please enter your email address.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>

                  <Col xs={12} sm={12} md={12}>
                    <Form.Group className="mb-2" controlId="validationCustom03">
                      <Form.Label>Tour Description</Form.Label>
                      <Form.Control
                        onChange={handleInputChange}
                        name="message"
                        type="text"
                        as="textarea"
                      />
                    </Form.Group>
                  </Col>

                  <Col xs={12} sm={12} md={6}>
                    <Form.Group className="mb-2" controlId="validationCustom03">
                      <DateRangePicker
                        autoUpdateInput={false}
                        startDate={date.inputStart}
                        endDate={date.inputFinish}
                        locale={{ format: "DD-MM-YYYY" }}
                        onApply={handleEvent}
                        autoApply={true}
                      >
                        <Form.Label>Travel Dates</Form.Label>
                        <Form.Control
                          onChange={handleChangeS}
                          name="travelDates"
                          type="text"
                          value={`${date.inputStart}-${date.inputFinish}`}
                          required
                        />
                      </DateRangePicker>
                      <Form.Control.Feedback type="invalid">
                        Please give us your traval dates.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>

                  <Col xs={12} sm={12} md={6}>
                    <Form.Group className="mb-2" controlId="validationCustom03">
                      <Form.Label>Duration</Form.Label>
                      <Form.Control
                        onChange={handleInputChange}
                        name="duration"
                        type="text"
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        Please enter your duration of stay.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>

                  <Col xs={12} sm={12} md={6}>
                    <Form.Group className="mb-2" controlId="validationCustom03">
                      <Form.Label>No Of Person</Form.Label>
                      <Form.Control
                        onChange={handleInputChange}
                        name="noOfPerson"
                        type="number"
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        Please enter how many people wants to go.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>

                  <Col xs={12} sm={12} md={6}>
                    <Form.Group className="mb-2" controlId="validationCustom03">
                      <Form.Label>Mobile Number</Form.Label>
                      <Form.Control
                        onChange={handleInputChange}
                        name="mobile"
                        type="Number"
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        Please enter your mobile number.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>

                  <Col className="modal-footer" xs={12} sm={12} md={12}>
                    <Button className="submit-form" type="submit">
                      Submit
                    </Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Modal.Body>
        </Form>
      </Modal>
    </>
  );
};
