import React from "react";
import CarouselContainer from "./Carousel/CarouselContainer.component";

const Hero = (props) => {
  if (props.large) {
    return <CarouselContainer />;
  }
  return (
    <div>
      <h1>Sanity Check</h1>
    </div>
  );
};

export default Hero;
