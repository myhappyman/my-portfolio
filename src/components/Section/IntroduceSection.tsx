import React from "react";
import styled from "styled-components";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";

function IntroduceSection() {
  return (
    <Wrapper>
      <AnimationOnScroll animateIn="animate__bounceInUp">
        <Title>Introduce</Title>
      </AnimationOnScroll>
      <AnimationOnScroll animateIn="animate__bounceInUp" delay={300}>
        <Contents>
          안녕하세요? 박신우입니다. <br />
          안녕하세요? 박신우입니다. <br />
          안녕하세요? 박신우입니다. <br />
          안녕하세요? 박신우입니다. <br />
          안녕하세요? 박신우입니다. <br />
          안녕하세요? 박신우입니다. <br />
        </Contents>
      </AnimationOnScroll>
    </Wrapper>
  );
}

export default IntroduceSection;

const Wrapper = styled.section`
  padding: 2rem 10rem;
  height: 100vh;
`;

const Title = styled.div`
  font-size: 7.2rem;
  font-weight: 700;
`;

const Contents = styled.div`
  font-size: 3.6rem;
  font-weight: 600;
`;
