import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import "./Package.css";
import { PackageList } from "./PackageList";

const Packages = (props) => {
  const { data } = props;
  const { state } = useLocation();

  const [filterData, setFilterData] = useState();

  const [activeFilter, setActiveFilter] = useState({
    id: 0,
    label: "ALL",
  });

  const filterOptions = [
    { label: "ALL", id: 0 },
    { label: "RELIGIOUS", id: 1 },
    { label: "NATIONAL TOURS", id: 2 },
    { label: "INTERNATIONAL TOURS", id: 3 },
    { label: "SPECIALITY TOURS", id: 4 },
    { label: "WEEKEND TOUR", id: 5 },
    { label: "CUSTOMIZED TOURS", id: 6 },
  ];

  const titleCase = (str) => {
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  };

  const filterPackagCat = (categoryId, data) => {
    let tempData = [];
    data.forEach((obj) => {
      if (obj.id === categoryId) {
        tempData.push(obj);
      }
    });
    setFilterData(tempData);
  };

  useEffect(() => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    if (state) {
      if (state.packageId) {
      } else if (state.id === 6) {
        // console.log("customize---->");
        customizeData(state.id, data);
        setActiveFilter({
          id: 6,
          label: "",
        });
      } else {
        filterPackagCat(state.id, data);
        setActiveFilter({
          id: state.id,
          label: "",
        });
      }
    } else {
      setFilterData(data);
      setActiveFilter({
        id: 0,
        label: "ALL",
      });
    }
  }, []);

  const filterByCategory = (id) => {
    filterOptions.forEach((obj) => {
      if (obj.id === id)
        setActiveFilter({
          id: id,
          label: obj.label,
        });
    });
    if (id === 0) {
      setFilterData(data);
    } else if (id === 6) {
      customizeData(id, data);
    } else {
      filterPackagCat(id, data);
    }
  };

  const customizeData = (id, data) => {
    const catData = [];
    data.forEach((obj) => {
      const tempData = [];
      obj.packages.forEach((item) => {
        if (item.isCstomized) {
          tempData.push(item);
        }
      });
      if (tempData.length > 0) {
        catData.push({ ...obj, packages: tempData });
      }
    });
    setFilterData(catData);
  };

  return (
    filterData && (
      <Container style={{ marginTop: "10em" }} className="package-container">
        <Row>
          <Col className="package-block-heading" xs={12} sm={12} md={12}>
            <span>
              <p className="title">{"Explore"}</p>
              <p className="sub-title">{"Pacakges"}</p>
            </span>
            <hr />
          </Col>

          <Row>
            <Col className="filter-button" xs={12} sm={12} md={12}>
              {filterOptions.map((item) => {
                return (
                  <Button
                    key={item.id}
                    variant="outline-warning"
                    size="sm"
                    active={activeFilter.id === item.id ? true : false}
                    onClick={() => filterByCategory(item.id)}
                  >
                    {titleCase(item.label)}
                  </Button>
                );
              })}
            </Col>
          </Row>
          <PackageList data={filterData} />
        </Row>
      </Container>
    )
  );
};

export default Packages;
