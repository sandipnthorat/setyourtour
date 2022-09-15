import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Routes, Route } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
import Button from "react-bootstrap/Button";

import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import PageNotFound from "./components/PageNotFound";
import Services from "./components/Services";
import Packages from "./components/Packages";
import { Memories } from "./components/Memories";
import { PackageDetails } from "./components/PackageDetail";

import whatsapp from "./assets/icons/WhatsApp_Logo.png";
// *****************************Package Data *************************
import { packagesData } from "./assets/tourData";
import { contactData } from "./assets/utilityData";
import { CustomizePopup } from "./components/CustomizePopup";
import { useState, useEffect } from "react";

function App() {
  let navigate = useNavigate();
  const location = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(true);

  window.onbeforeunload = function (event) {
    // navigate("/ ");
    console.log(localStorage.getItem("path"));
  };

  window.onDOMContentLoaded = function (event) {
    navigate(localStorage.getItem("path"));
    setIsModalOpen(true);
    console.log(localStorage.getItem("path"));
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    console.log(localStorage.getItem("path"));
    console.log("app comp ------>", location);
    localStorage.setItem("path", location.pathname);
  }, [location]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/setyourtour" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/memories" element={<Memories />} />
        <Route path="/packages" element={<Packages data={packagesData} />} />
        <Route path="/packageDetails" element={<PackageDetails data={""} />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />

      <CustomizePopup
        data={[]}
        show={isModalOpen}
        onHide={(e) => {
          closeModal();
        }}
      />

      <div className="whatss-app-home">
        <p>
          <a
            aria-label="Chat on WhatsApp"
            href={contactData.whatsapp}
            target="_blank"
          >
            {" "}
            <img alt="Chat on WhatsApp" src={whatsapp} />{" "}
          </a>
        </p>
        <p>
          <Button
            size="sm"
            variant="warning"
            onClick={() => setIsModalOpen(true)}
            style={{ borderRadius: "5em" }}
          >
            <span
              style={{ fontSize: "14px", fontWeight: 600 }}
              className="material-icons-outlined"
            >
              place
            </span>
            Plan Your Trip
          </Button>
        </p>
      </div>
    </>
  );
}

export default App;
