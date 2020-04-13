import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";

import styled from "styled-components";
import Hero1 from "../../../public/static/img/Hero_01.jpg";
import Hero2 from "../../../public/static/img/Hero_02.jpg";
import Hero3 from "../../../public/static/img/Hero_03.jpg";
const items = [
  {
    src: Hero1,
    altText: "Slide 1",
    caption: "Slide 1",
  },
  {
    src: Hero2,
    altText: "Slide 2",
    caption: "Slide 2",
  },
  {
    src: Hero3,
    altText: "Slide 3",
    caption: "Slide 3",
  },
];
const HeroContainer = styled.div`
  height: 85vh;
  background: linear-gradient(
      ${(props) => props.theme.darkBlueOpaque},
      ${(props) => props.theme.darkBlueOpaque}
    ),
    url(${(props) => props.title});
  background-position: center center;
  background-size: cover;
`;

const HeroWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 60%;
  margin: 0 auto;
`;
const HeroTitle = styled.h1`
  font-size: 7rem;
  text-transform: uppercase;
  text-align: center;
  font-family: "Google Sans";
  font-weight: ${(props) => props.theme.bold};
`;
const HeroSubTitleTop = styled.h2`
  font-size: 2rem;
  text-transform: uppercase;
  text-align: center;
  font-family: "Google Sans";
  font-weight: ${(props) => props.theme.thin};
`;
const HeroSubTitleBottom = styled.h2`
  font-size: 3rem;
  text-transform: capitalize;
  text-align: center;
  font-family: "Google Sans";
  font-weight: ${(props) => props.theme.regular};
`;
const CarouselContainer = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <HeroContainer title={item.src}>
          <HeroWrapper>
            <HeroSubTitleTop>We Create Dope Stuff </HeroSubTitleTop>
            <HeroTitle>Im a Title Fear me If you Dare</HeroTitle>
            <HeroSubTitleBottom>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Temporibus vel obcaecati molestias omnis unde. Minus!
            </HeroSubTitleBottom>
          </HeroWrapper>
        </HeroContainer>
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <Carousel activeIndex={activeIndex} next={next} previous={previous}>
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
};

export default CarouselContainer;
