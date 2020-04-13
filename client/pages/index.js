import React from "react";
import styled from "styled-components";
import { Container } from "reactstrap";
import Hero from "../components/hero/Hero.component";
import CenteredParagraph from "../components/centeredParagraph/centeredParagraph.component";

// const Title = styled.h1`
//   font-size: 50px;
//   color: ${({ theme }) => theme.colors.primary};
// `;

const Index = () => {
  return (
    <div> 
      <Hero large />
      <CenteredParagraph data={{subTitle: "we are valentine consulting", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium vel pariatur velit ea atque libero?"}} />
    </div>
  );
};
export default Index;
