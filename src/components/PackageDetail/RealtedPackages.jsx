import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";

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
        {data.map((obj) => {
          return (
            <Col
              key={obj.id}
              className="related-pkg"
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
        })}
      </Row>
    </>
  );
};
