import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";

import logo from "../../assets/transparent_logo.png";
import "./Header.css";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

const Header = (props) => {
  let navigate = useNavigate();

  const navList = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Events", path: "/about" },
    { label: "Packages", path: "/about" },
    { label: "Offer", path: "/about" },
    { label: "Booking", path: "/about" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <Navbar collapseOnSelect expand="lg" className="nav-bar">
      <Navbar.Brand href="/">
        <img className="nav-logo" src={logo} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="justify-content-start" defaultActiveKey="/" as="ul">
          {/* <Nav.Item>
            <Nav.Link href="#">
              <img className="nav-logo" src={logo} />
            </Nav.Link>
          </Nav.Item> */}
          {navList.map((e) => {
            return (
              <Nav.Item key={e.label}>
                <Nav.Link
                  className="nav-link"
                  href="#"
                  onClick={() => navigate(e.path)}
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
