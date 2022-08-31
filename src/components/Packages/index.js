import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./Package.css";
import { PackageList } from "./PackageList";

const Packages = (props) => {
  const { data } = props;
  const { state } = useLocation();

  const [filterData, setFilterData] = useState();

  // const filterPackages = (packageId, categoryId, data) => {
  //   let tempData = [];
  //   data.forEach((obj) => {
  //     if (obj.id == categoryId) {
  //       obj.packages.forEach((item) => {
  //         if (item.id == packageId) {
  //           tempData.push({
  //             pkgDetails: item,
  //             id: obj.id,
  //             img: obj.img,
  //             label: obj.label,
  //             subTitle: obj.subTitle,
  //             title: obj.title,
  //           });
  //         }
  //       });
  //     }
  //   });
  // };

  const filterPackagCat = (categoryId, data) => {
    let tempData = [];
    data.forEach((obj) => {
      if (obj.id == categoryId) {
        tempData.push(obj);
      }
    });
    setFilterData(tempData);
  };

  useEffect(() => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    console.log("filterPackages =======>", state);
    if (state) {
      if (state.packageId) {
        // filterPackages(state.packageId, state.id, data);
        // console.log("filterPackages =======>", state, state.packageId);
      } else {
        // console.log(" filterPackagCat=======>", state, state.packageId);
        filterPackagCat(state.id, data);
      }
    } else {
      setFilterData(data);
      // console.log("=======>", state);
    }
  }, []);

  return (
    filterData && (
      <Container className="package-container">
        <Row>
          <Col className="package-block-heading" xs={12} sm={12} md={12}>
            <p className="title">{"Explore"}</p>
            <p className="sub-title">{"Pacakges"}</p>
            <hr />
          </Col>
          <PackageList data={filterData} />
        </Row>
      </Container>
    )
  );
};

export default Packages;
