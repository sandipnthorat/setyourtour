import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import PageNotFound from "./components/PageNotFound";
import Services from "./components/Services";
import Packages from "./components/Packages";
import { PackageDetails } from "./components/PackageDetail";

import whatsapp from "./assets/icons/WhatsApp_Logo.png";
// *****************************Package Data *************************
import { packagesData } from "./assets/tourData";
import { contactData } from "./assets/utilityData";

function App() {
  let navigate = useNavigate();

  window.onbeforeunload = function (event) {
    navigate("/ ");
  };

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/setyourtour" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/packages" element={<Packages data={packagesData} />} />
        <Route path="/packageDetails" element={<PackageDetails data={""} />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />

      <div className="whatss-app-home">
        {" "}
        <a
          aria-label="Chat on WhatsApp"
          href={contactData.whatsapp}
          target="_blank"
        >
          {" "}
          <img alt="Chat on WhatsApp" src={whatsapp} />{" "}
        </a>
      </div>
    </>
  );
}

export default App;
