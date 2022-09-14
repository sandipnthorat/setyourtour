import Carousel from "react-bootstrap/Carousel";

const Slider = (props) => {
  return (
    <div style={{ marginTop: "9em" }}>
      <Carousel className="slider">
        {props.data.map((obj, i) => {
          return (
            <Carousel.Item key={obj.label}>
              <img className="d-block w-100" src={obj.img} alt={obj.label} />
              <Carousel.Caption>
                <h3 style={{ color: "#fff" }}>{obj.label}</h3>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Slider;
