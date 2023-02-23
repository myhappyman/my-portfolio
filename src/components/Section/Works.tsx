import React from "react";
import styled from "styled-components";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";

function Works() {
  return (
    <Wrapper>
      <AnimationOnScroll animateIn="animate__bounceInUp">
        <Title>Works</Title>
      </AnimationOnScroll>
    </Wrapper>
  );
}

export default Works;

const Wrapper = styled.section`
  padding: 2rem 10rem;
  height: 100vh;
`;

const Title = styled.div`
  font-size: 7.2rem;
  font-weight: 700;
`;
