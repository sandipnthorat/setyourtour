import Carousel from "react-bootstrap/Carousel";

import sliderImage1 from "../../assets/slider/25101.jpg";

const Slider = (props) => {
  return (
    <Carousel className="slider">
      <Carousel.Item>
        <img className="d-block w-100" src={sliderImage1} alt="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={sliderImage1} alt="Second slide" />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={sliderImage1} alt="Third slide" />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={sliderImage1} alt="Third slide" />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
