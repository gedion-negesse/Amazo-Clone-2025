import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { imageList } from "./Image/data";
import classes from "./Carusole.module.css";
function Carusole() {
  return (
    <div>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showStatus={false}
        showThumbs={false}
      >
        {imageList.map((image, i) => {
          return <img src={image} alt="" />;
        })}
      </Carousel>
      <div className={classes.carsole__effct}></div>
    </div>
  );
}

export default Carusole;
