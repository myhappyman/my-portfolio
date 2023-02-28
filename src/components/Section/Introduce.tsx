import React from "react";
import styled from "styled-components";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";
import me from "../../assets/imgs/introduce/me.png";

function Introduce() {
  return (
    <Wrapper>
      <AnimationOnScroll
        initiallyVisible={true}
        animateIn="animate__bounce"
        delay={10}
      >
        <SectionName>🤟 Introduce</SectionName>
      </AnimationOnScroll>
      <AnimationOnScroll
        initiallyVisible={true}
        animateIn="animate__fadeInUp"
        delay={300}
      >
        <Contents>
          <ImgArea>
            <img src={me} alt="psw" />
          </ImgArea>
          <TextArea>
            <Title>
              안녕하세요!
              <br /> 웹 개발자 박신우입니다. 😊
            </Title>
            <Paragraph>
              지금까지 5년차 풀 스택 개발자로 여러가지 경험을 쌓았습니다.
              <br />
              <br />
              프론트엔드와 백엔드 개발이 모두 재밌지만,
              <br />
              한가지에 집중 하고자 프론트엔드를 선택해 공부 중입니다.
              <br />
              <br />
              React와 ES6 이상의 문법, Typescript등을 습득하고 있으며,
              <br />
              필요한 기술들을 추가적으로 학습 중입니다.
              <br />
              <br />
              그동안 제가 개발해온 작업물과 미니 프로젝트를 구경해보세요!
              <br />
              감사합니다 :)
            </Paragraph>
          </TextArea>
        </Contents>
      </AnimationOnScroll>
    </Wrapper>
  );
}

export default Introduce;

const Wrapper = styled.section`
  position: relative;
  padding: 8rem 10rem 2rem;
  height: 100vh;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 180px;
    background: linear-gradient(
      to top,
      ${(props) => props.theme.bgColor},
      ${(props) => props.theme.bgGradientEndColor}
    );
  }
`;

const SectionName = styled.div`
  font-size: 7.2rem;
  font-weight: 700;
`;

const Contents = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 10rem;
`;

const Area = styled.div`
  width: 50%;
  padding: 1rem;
`;

const ImgArea = styled(Area)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextArea = styled(Area)``;

const Title = styled.h2`
  font-size: 4.8rem;
  font-weight: 700;
`;

const Paragraph = styled.p`
  padding-top: 1.2rem;
  font-size: 2.4rem;
  font-weight: 400;
`;
