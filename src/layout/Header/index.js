import React, { useEffect, useState } from "react";
import { useNavigate, NavLink, useLocation } from "react-router-dom";

import logo from "../../assets/transparent_logo.png";
import "./Header.css";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { services } from "../../assets/utilityData";
import { navMenuData } from "../../assets/utilityData";

const Header = (props) => {
  let navigate = useNavigate();
  const location = useLocation();
  const servicesData = services;
  const navList = navMenuData;

  const [currentPath, setCurrentPath] = useState();

  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location]);

  return (
    <Navbar fixed="top" collapseOnSelect expand="lg" className="nav-bar">
      <Navbar.Brand href="#" onClick={() => navigate("/")}>
        <img className="nav-logo" src={logo} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="justify-content-start" defaultActiveKey="/" as="ul">
          {navList.map((e) => {
            return (
              <Nav.Item key={e.label}>
                <Nav.Link
                  className={
                    currentPath == e.path ? "active-nav-link" : "nav-link"
                  }
                  href="#"
                  onClick={() => {
                    navigate(e.path);
                    document.body.scrollTop = 0;
                    document.documentElement.scrollTop = 0;
                  }}
                >
                  {e.label}
                </Nav.Link>
              </Nav.Item>
            );
          })}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
