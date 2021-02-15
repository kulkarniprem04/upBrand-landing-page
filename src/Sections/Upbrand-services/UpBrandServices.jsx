import React from "react";
import { Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import KayaLogo from "../../assets/Kaya logo.png";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    paritialVisibilityGutter: 60,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    paritialVisibilityGutter: 50,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    paritialVisibilityGutter: 30,
  },
};

const UpBrandServices = () => {
  return (
    <Col md={12} style={{ marginTop: "4em" }}>
      <Carousel infinite={true} autoPlay={true} responsive={responsive}>
        <div className="d-flex justify-content-center">
          <img alt="" src={KayaLogo} />
        </div>
        <div className="d-flex justify-content-center ">
          <img alt="" src={KayaLogo} />
        </div>
        <div className="d-flex justify-content-center">
          <img alt="" src={KayaLogo} />
        </div>
      </Carousel>
    </Col>
  );
};

export default UpBrandServices;
