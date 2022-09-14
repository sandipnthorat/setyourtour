import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./PackageDetail.css";
import { packagesData } from "../../assets/tourData";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Stack from "react-bootstrap/Stack";

import { BookingPolicy } from "./BookingPolicy";
import { CancelationPolicy } from "./CancelationPolicy";
import { IncludeExclude } from "./IncludeExclude";
import { Agenda } from "./Agenda";
import { SendBooking } from "./SendBooking";
import { CustomizeTour } from "../CustomizeTour";
import { RealtedPackages } from "./RealtedPackages";

import customeBtn from "../../assets/customize_button.jpg";

import { colorData } from "../../assets/utilityData";

export const PackageDetails = (props) => {
  const { state } = useLocation();
  const { data } = packagesData;
  const [details, setDetails] = useState();
  const [isModalOpen, setIsModalOpen] = useState({
    isShow: false,
  });
  const [isFirstModalOpen, setIsFirstModalOpen] = useState({
    isShow: false,
  });
  const colors = colorData;
  const screenWidth = window.screen.availWidth;
  const [realtedPkg, setRelatedPkg] = useState();

  const openModal = (e) => {
    setIsModalOpen({ isShow: true });
  };

  const closeModal = (e) => {
    setIsModalOpen({ isShow: e });
    setIsFirstModalOpen({ isShow: false });
  };

  useEffect(() => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    filterPackages(state.id, state.pkgId, packagesData);
    getRelatedPackages(state.pkgId, state.id, packagesData);
  }, [state]);

  const filterPackages = (categoryId, packageId, data) => {
    let tempData = [];
    data.forEach((obj) => {
      if (obj.id == categoryId) {
        obj.packages.forEach((item) => {
          if (item.id == packageId) {
            tempData.push({
              ...obj,
              pkgDetails: item,
            });
          }
        });
      }
    });
    setDetails(tempData[0]);
    // console.log("tempData[0] ---->", tempData[0]);
  };

  const getRelatedPackages = (pkgId, id, data) => {
    const tempData = [];

    data.forEach((obj) => {
      if (obj.id === id) {
        // console.log(obj);
        obj.packages.forEach((item) => {
          if (!item.isComming && item.id !== pkgId) {
            item.category = obj.category;
            item.catId = obj.id;
            tempData.push(item);
          }
        });
      }
    });
    setRelatedPkg(tempData);
    // console.log("tempdata -->", tempData);
  };

  const titleCase = (str) => {
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  };

  return (
    details && (
      <>
        <div
          className="title-img"
          style={{
            marginTop: "8em",
            backgroundImage: `url(${require(`../../assets/proposals/${details.category}/${details.pkgDetails.img}`)})`,
          }}
        >
          <span className="category-label">
            <h5>{titleCase(details.label)}</h5>
            <h1>{titleCase(details.pkgDetails.label)}</h1>
          </span>
        </div>

        <Row style={{ margin: "0px" }}>
          {screenWidth <= 390 && (
            <Col className="mt-4 mb-4" xs={12} sm={12} md={12}>
              <div
                className="custome-btn-div"
                style={{
                  backgroundImage: `url(${customeBtn})`,
                }}
                onClick={() => setIsFirstModalOpen({ isShow: true })}
              >
                <h5>SET YOUR CUSTOMIZE TOUR WITH US</h5>
              </div>
              <CustomizeTour
                data={details.pkgDetails}
                show={isFirstModalOpen.isShow}
                onHide={(e) => {
                  closeModal();
                }}
              />
            </Col>
          )}
        </Row>

        <Container>
          <Row>
            <Col xs={12} sm={12} md={8}>
              <Row className="div-block">
                <Col className="locations" xs={12} sm={12} md={12}>
                  <Stack direction="horizontal" gap={3}>
                    <div>
                      <strong>Product Code: </strong>
                    </div>
                    <div>{details.pkgDetails.productCode}</div>
                  </Stack>
                </Col>
                <Col className="locations" xs={12} sm={12} md={12}>
                  <Stack direction="horizontal" gap={3}>
                    <div>
                      <span
                        className="material-icons-outlined"
                        style={{
                          fontSize: "28px",
                          color: colors[details.pkgDetails.id],
                        }}
                      >
                        location_on
                      </span>
                    </div>
                    <div>{titleCase(details.pkgDetails.location)}</div>
                  </Stack>
                </Col>
                <Col
                  className="note"
                  style={{
                    border: `1px solid ${colors[details.pkgDetails.id]}`,
                    boxShadow: `5px 5px 10px 0px ${
                      colors[details.pkgDetails.id]
                    }1a`,
                  }}
                  xs={12}
                  sm={12}
                  md={12}
                >
                  <Stack direction="horizontal" gap={3}>
                    <div>
                      <b>Note: </b>
                    </div>
                    <div>
                      <ul>
                        {details.pkgDetails.note.map((e) => {
                          return <li key={e.label}>{e.label}</li>;
                        })}
                      </ul>
                    </div>
                  </Stack>
                </Col>

                <Col className="details-block-heading" xs={12} sm={12} md={12}>
                  <h6
                    className="title"
                    style={{ color: colors[details.pkgDetails.id] }}
                  >
                    {"Detailed"}
                  </h6>
                  <h1 className="sub-title">{"Description"}</h1>
                  <hr />

                  <p>{details.pkgDetails.description.first}</p>
                  <p>{details.pkgDetails.description.second}</p>
                </Col>
              </Row>

              {!details.pkgDetails.isCstomized && (
                <Row className="div-block">
                  <Col
                    className="details-block-heading"
                    xs={12}
                    sm={12}
                    md={12}
                  >
                    <h6
                      className="title"
                      style={{ color: colors[details.pkgDetails.id] }}
                    >
                      {"Day by Day"}
                    </h6>
                    <h1 className="sub-title">{"Itinerary"}</h1>
                  </Col>
                  <Col xs={12} sm={12} md={12}>
                    <Agenda data={details.pkgDetails.dayByDay} />
                  </Col>
                </Row>
              )}

              <Row className="div-block">
                <Col className="details-block-heading" xs={12} sm={12} md={12}>
                  <h6
                    className="title"
                    style={{ color: colors[details.pkgDetails.id] }}
                  >
                    {"Tour"}
                  </h6>
                  <h1 className="sub-title">{"Booking Policy"}</h1>
                </Col>
                <Col className="details-block-heading" xs={12} sm={12} md={12}>
                  <BookingPolicy
                    color={colors[details.pkgDetails.id]}
                    data={details.pkgDetails.bookingPolicy}
                  />
                </Col>
              </Row>

              {details.pkgDetails.cancellationPolicy.length > 0 && (
                <Row className="div-block">
                  <Col
                    className="details-block-heading"
                    xs={12}
                    sm={12}
                    md={12}
                  >
                    <h6
                      className="title"
                      style={{ color: colors[details.pkgDetails.id] }}
                    >
                      {"Tour"}
                    </h6>
                    <h1 className="sub-title">{"Cancellation Policy"}</h1>
                  </Col>
                  <Col
                    className="details-block-heading"
                    xs={12}
                    sm={12}
                    md={12}
                  >
                    <CancelationPolicy
                      data={details.pkgDetails.cancellationPolicy}
                    />
                  </Col>
                </Row>
              )}
            </Col>

            {/*********************************************************/}
            <Col className="mb-4" xs={12} sm={12} md={4}>
              <Row>
                <Col className="mb-4" xs={12} sm={12} md={12}>
                  <div
                    className="custome-btn-div"
                    style={{
                      backgroundImage: `url(${customeBtn})`,
                    }}
                    onClick={() => openModal()}
                  >
                    <h5>SET YOUR CUSTOMIZE TOUR WITH US</h5>
                  </div>
                  <CustomizeTour
                    data={details.pkgDetails}
                    show={isModalOpen.isShow}
                    onHide={(e) => {
                      closeModal();
                    }}
                  />
                </Col>

                <Col className="right-col-cards" xs={12} sm={12} md={12}>
                  <Card
                    className="right-card"
                    style={{
                      boxShadow: `5px 5px 10px 0px ${
                        colors[details.pkgDetails.id]
                      }1a`,
                    }}
                  >
                    <Card.Body>
                      <Row className="card-body-text">
                        {!details.pkgDetails.isCstomized && (
                          <Col
                            className="packages-card-kpi"
                            xs={6}
                            sm={6}
                            md={6}
                          >
                            <div className="circle-kpi">
                              <span
                                className="material-icons-outlined"
                                style={{ color: colors[details.pkgDetails.id] }}
                              >
                                calendar_month
                              </span>
                              <p className="circle-kpi-label">
                                {details.pkgDetails.date}
                                <p style={{ margin: "0px", padding: "0px" }}>
                                  <b>To</b>
                                </p>
                                {details.pkgDetails.endDate}
                              </p>
                            </div>
                          </Col>
                        )}

                        <Col className="packages-card-kpi" xs={6} sm={6} md={6}>
                          <div className="circle-kpi">
                            <span
                              className="material-icons-outlined"
                              style={{ color: colors[details.pkgDetails.id] }}
                            >
                              timer
                            </span>
                            <p className="circle-kpi-label">
                              {details.pkgDetails.duration}
                            </p>
                          </div>
                        </Col>

                        {!details.pkgDetails.isCstomized && (
                          <Col
                            className="packages-card-kpi"
                            xs={6}
                            sm={6}
                            md={6}
                          >
                            <div className="circle-kpi">
                              <span
                                className="material-icons-outlined"
                                style={{ color: colors[details.pkgDetails.id] }}
                              >
                                currency_rupee
                              </span>
                              <p className="circle-kpi-label">
                                {details.pkgDetails.price} <sub>/Person</sub>{" "}
                              </p>
                            </div>
                          </Col>
                        )}

                        <Col className="packages-card-kpi" xs={6} sm={6} md={6}>
                          <a
                            href={details.pkgDetails.downloadLink}
                            download
                            target="blank"
                            style={{ textDecoration: "none", color: "#555555" }}
                          >
                            <div
                              className="circle-kpi"
                              style={{ cursor: "pointer" }}
                            >
                              <span
                                className="material-icons-outlined"
                                style={{ color: colors[details.pkgDetails.id] }}
                              >
                                cloud_download
                              </span>
                              <p className="circle-kpi-label">Download PDF</p>
                            </div>
                          </a>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </Col>

                <Col className="right-col-cards" xs={12} sm={12} md={12}>
                  <IncludeExclude
                    color={colors[details.pkgDetails.id]}
                    title="Package Inclusion"
                    data={details.pkgDetails.inclusions}
                  />
                </Col>

                <Col className="right-col-cards" xs={12} sm={12} md={12}>
                  <IncludeExclude
                    color={colors[details.pkgDetails.id]}
                    title="Package Exclusion"
                    data={details.pkgDetails.exclusion}
                  />
                </Col>

                <Col className="right-col-cards" xs={12} sm={12} md={12}>
                  <SendBooking
                    productCode={details.pkgDetails.productCode}
                    pkgName={details.pkgDetails.label}
                    color={colors[details.pkgDetails.id]}
                  />
                </Col>
              </Row>
            </Col>
          </Row>

          {realtedPkg.length > 0 && (
            <Row>
              <Col className="details-block-heading" xs={12} sm={12} md={12}>
                <h6
                  className="title"
                  style={{ color: colors[details.pkgDetails.id] }}
                >
                  {"Realated Tour"}
                </h6>
                <h1 className="sub-title">{"Packages"}</h1>
              </Col>
              <Col xs={12} sm={12} md={12}>
                <RealtedPackages data={realtedPkg} />
              </Col>
            </Row>
          )}
        </Container>
      </>
    )
  );
};
