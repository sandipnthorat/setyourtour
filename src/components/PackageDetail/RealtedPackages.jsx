import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export const RealtedPackages = (props) => {
  const navigate = useNavigate();
  const { data } = props;

  const titleCase = (str) => {
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  };

  return (
    <>
      <Row>
        <Col xs={12} sm={12} md={12}>
          <Carousel
            responsive={responsive}
            infinite={true}
            autoPlaySpeed={1000}
          >
            {data.map((obj) => {
              return (
                <div className="related-pkg m-4">
                  <div
                    onClick={() => {
                      navigate("/packageDetails", {
                        state: {
                          pkgId: obj.id,
                          id: obj.catId,
                        },
                      });
                    }}
                    className="title-img"
                    style={{
                      backgroundImage: `url(${require(`../../assets/proposals/${obj.category}/${obj.img}`)})`,
                    }}
                  ></div>
                  <p className="pkg-duration">{obj.duration}</p>
                  <p className="pkg-label">{titleCase(obj.label)}</p>
                </div>
              );
            })}
          </Carousel>
        </Col>
        {/* {data.map((obj) => {
          return (
            <Col
              key={obj.id}
              className="related-pkg mb-4"
              xs={12}
              sm={6}
              md={3}
              onClick={() => {
                navigate("/packageDetails", {
                  state: {
                    pkgId: obj.id,
                    id: obj.catId,
                  },
                });
              }}
            >
              <div
                className="title-img"
                style={{
                  backgroundImage: `url(${require(`../../assets/proposals/${obj.category}/${obj.img}`)})`,
                }}
              ></div>
              <p className="pkg-duration">{obj.duration}</p>
              <p className="pkg-label">{titleCase(obj.label)}</p>
            </Col>
          );
        })} */}
      </Row>
    </>
  );
};
