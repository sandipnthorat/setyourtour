import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import logo from "../../assets/transparent_logo.png";
import "./Header.css";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import Dropdown from "react-bootstrap/Dropdown";
import { navMenuData } from "../../assets/utilityData";

const Header = (props) => {
  let navigate = useNavigate();
  const location = useLocation();
  const navList = navMenuData;

  const [currentPath, setCurrentPath] = useState();
  const expand = "md";

  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location]);

  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
      href=""
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {children}
      &#x25bc;
    </a>
  ));

  return (
    <Navbar fixed="top" collapseOnSelect expand="lg" className="nav-bar">
      <Navbar.Brand href="#" onClick={() => navigate("/")}>
        <img className="nav-logo" src={logo} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
      <Navbar.Offcanvas
        id={`offcanvasNavbar-expand-${expand}`}
        aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
        placement="end"
        className="off-canvase-nav"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
            <img className="nav-logo" src={logo} />
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav
            className="justify-content-start nav-custome-link"
            defaultActiveKey="/"
            as="ul"
          >
            {navList.map((e) => {
              return (
                <Nav.Item key={e.label}>
                  {e.hasOwnProperty("list") ? (
                    <Nav.Link
                      key={e.label}
                      className={
                        currentPath === e.path ? "active-nav-link" : "nav-link"
                      }
                    >
                      <Dropdown
                        className={
                          currentPath === e.path
                            ? "active-nav-link-btn"
                            : "nav-link-btn"
                        }
                      >
                        <Dropdown.Toggle
                          as={CustomToggle}
                          id="dropdown-custom-components"
                        >
                          {e.label}
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          {e["list"].map((li) => {
                            return (
                              <Dropdown.Item
                                key={li.label}
                                onClick={() => {
                                  navigate(e.path);
                                  document.body.scrollTop = 0;
                                  document.documentElement.scrollTop = 0;
                                }}
                                eventKey="1"
                              >
                                {li.label}
                              </Dropdown.Item>
                            );
                          })}
                        </Dropdown.Menu>
                      </Dropdown>
                    </Nav.Link>
                  ) : (
                    <Nav.Link
                      key={e.label}
                      className={
                        currentPath === e.path ? "active-nav-link" : "nav-link"
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
                  )}
                </Nav.Item>
              );
            })}
          </Nav>
        </Offcanvas.Body>
      </Navbar.Offcanvas>
    </Navbar>
  );
};

export default Header;
