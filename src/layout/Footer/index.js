import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { useNavigate, NavLink } from "react-router-dom";

// import logo from "../../assets/transparent_logo.png";
// import logo from "../../assets/footer_logo.jpeg";
import logo from "../../assets/footer_logo_1.jpeg";

import "./Footer.css";
import facebook from "../../assets/icons/facebook.svg";
import instagram from "../../assets/icons/instagram.svg";

import { contactData } from "../../assets/utilityData";
import { services } from "../../assets/utilityData";

const Footer = (props) => {
  let navigate = useNavigate();
  const contact = contactData;
  const servicesList = services;

  const socialMedia = [
    { label: "facebook", icon: facebook, url: contact.facebook },
    { label: "instagram", icon: instagram, url: contact.instagram },
  ];

  const navList = [
    { label: "About Us", path: "/about" },
    { label: "Packages", path: "/packages" },
    { label: "Memories", path: "/memories" },
    { label: "Policy", path: "/policy" },
    { label: "FAQ's", path: "/faq" },
  ];

  return (
    <div className="footer">
      <Container className="footer-top-container">
        <Row>
          <Col xs={12} sm={12} md={6}>
            <Row className="footer-contact-us-form">
              <Col className="footer-block-logo" xs={12} sm={12} md={12}>
                <img src={logo} />
              </Col>
              <Col xs={12} sm={12} md={12} className="contact-us-address">
                <Row className="align-center">
                  <Col xs={1} sm={1} md={1}>
                    <span
                      style={{ color: "#fb9d17" }}
                      className="material-icons-outlined"
                    >
                      place
                    </span>
                  </Col>
                  <Col style={{ marginLeft: "1em" }}>
                    <span className="address">{contact.address}</span>
                  </Col>
                </Row>

                <Row className="align-center">
                  <Col xs={1} sm={1} md={1}>
                    <span
                      style={{ color: "#fb9d17" }}
                      className="material-icons-outlined"
                    >
                      phone_iphone
                    </span>
                  </Col>
                  <Col style={{ marginLeft: "1em" }}>
                    <span className="address">
                      <ul>
                        <li>{contact.mobile1}</li>
                        <li>{contact.mobile2}</li>
                      </ul>
                    </span>
                  </Col>
                </Row>

                <Row className="align-center">
                  <Col xs={1} sm={1} md={1}>
                    <span
                      style={{ color: "#fb9d17" }}
                      className="material-icons-outlined"
                    >
                      mail
                    </span>
                  </Col>
                  <Col style={{ marginLeft: "1em" }}>
                    <span className="address">{contact.email}</span>
                  </Col>
                </Row>
              </Col>

              <Col className="footer-block-logo" xs={12} sm={12} md={12}>
                <p className="social-media-icons">
                  {socialMedia.map((obj) => {
                    return (
                      <a key={obj.label} href={obj.url} target="_blank">
                        <img title={obj.label} src={obj.icon} alt={obj.label} />
                      </a>
                    );
                  })}
                </p>
              </Col>
            </Row>
          </Col>

          <Col className="footer-block-text-container" xs={12} sm={12} md={6}>
            <Row>
              <Col xs={12} sm={6} md={6}>
                <p className="title">Services</p>
                <span className="item-list">
                  <ul>
                    {servicesList.map((item, i) => {
                      return <li key={item.shortLabel}>{item.shortLabel}</li>;
                    })}
                  </ul>
                </span>
              </Col>
              <Col xs={12} sm={6} md={6}>
                <p className="title">Useful links</p>
                <span className="item-list">
                  <ul>
                    {navList.map((item) => {
                      return (
                        <li
                          className="list-link"
                          key={item.label}
                          onClick={() => {
                            navigate(item.path);
                            document.body.scrollTop = 0;
                            document.documentElement.scrollTop = 0;
                          }}
                        >
                          {item.label}
                        </li>
                      );
                    })}
                  </ul>
                </span>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
