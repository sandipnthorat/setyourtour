import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

const About = (props) => {
  let navigate = useNavigate();

  return (
    <>
      <h5>About</h5>
      <Button x={2} onClick={() => navigate("/")} variant="primary">
        Back to Home
      </Button>
    </>
  );
};

export default About;
