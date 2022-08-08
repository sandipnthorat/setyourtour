import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import logo from "../../assets/transparent_logo.png";
import "./Footer.css";
import facebook from "../../assets/icons/facebook.svg";
import instagram from "../../assets/icons/instagram.svg";
import twitter from "../../assets/icons/twitter.svg";
import linkedin from "../../assets/icons/linkedin.svg";
import whatsapp from "../../assets/icons/whatsapp.svg";

const Footer = (props) => {
  const socialMedia = [
    { label: "facebook", icon: facebook, url: "" },
    { label: "instagram", icon: instagram, url: "" },
    { label: "linkedin", icon: linkedin, url: "" },
    { label: "twitter", icon: twitter, url: "" },
    { label: "whatsapp", icon: whatsapp, url: "" },
  ];
  return (
    <div className="footer">
      <Container className="footer-top-container">
        <Row>
          <Col className="footer-block-logo" xs={12} sm={12} md={6}>
            <img src={logo} />
            <p className="social-media-icons">
              {socialMedia.map((obj) => {
                return <img title={obj.label} src={obj.icon} alt={obj.label} />;
              })}
            </p>
          </Col>
          <Col className="footer-block-text-container" xs={12} sm={12} md={6}>
            <Row>
              <Col xs={12} sm={6} md={6}>
                <p className="title">Services</p>
              </Col>
              <Col xs={12} sm={6} md={6}>
                <p className="title">About</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
