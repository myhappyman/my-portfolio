import React from "react";
import styled from "styled-components";
import "animate.css/animate.min.css";
import me from "../../assets/imgs/introduce/me.png";
import { GArea, GInner, GWrapper, SectionHeader } from "../../GlobalComponents";

function Introduce() {
  return (
    <Wrapper>
      <GInner>
        <SectionHeader text="🤟 Introduce" />
        <Contents>
          <ImgArea>
            <img src={me} alt="psw" />
          </ImgArea>
          <TextArea>
            <Title>
              안녕하세요!
              <br /> 웹 개발자 박신우 입니다. 😊
            </Title>
            <Paragraph>
              지금까지 5년차 풀 스택 개발자로 여러가지 경험을 쌓았습니다.
              <br />
              <br />
              현재 한가지에 집중 하고자 프론트엔드를 선택해 공부 중입니다.
              <br />
              <br />
              React와 ES6 이상의 문법, Typescript등을 습득하고 있으며,
              <br />
              필요한 기술들을 추가적으로 학습 중입니다.
              <br />
              <br />
              그동안 제가 작업한 결과물과 미니 프로젝트를 구경해보세요!
              <br />
              감사합니다 :)
            </Paragraph>
          </TextArea>
        </Contents>
      </GInner>
    </Wrapper>
  );
}

export default Introduce;

const Wrapper = styled(GWrapper)`
  &::before {
    content: "";
    position: absolute;
    top: 0rem;
    left: 0;
    width: 100%;
    height: 18rem;
    background: linear-gradient(
      to top,
      ${(props) => props.theme.bgRGBAColor},
      ${(props) => props.theme.bgGradientEndColor}
    );
  }

  @media (max-width: 900px) {
    &::before {
      height: 10rem;
    }
  }

  @media (max-width: 500px) {
    &::before {
      height: 5rem;
    }
  }
`;

const Contents = styled(GArea)`
  display: flex;
  justify-content: space-around;

  @media (max-width: 1400px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const Area = styled.div`
  /* width: 50%;
  padding: 1rem;
  margin: 0 auto;

  @media (max-width: 900px) {
    width: 100%;
  } */
`;

const ImgArea = styled(Area)`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    display: block;
    width: 100%;
  }

  @media (max-width: 500px) {
    img {
      width: 60%;
    }
  }
`;

const TextArea = styled(Area)``;

const Title = styled.h2`
  font-size: 4.8rem;
  font-weight: 700;

  @media (max-width: 1200px) {
    font-size: 3.2rem;
  }
  @media (max-width: 900px) {
    margin-top: 3rem;
  }
  @media (max-width: 500px) {
    font-size: 2.4rem;
  }
`;

const Paragraph = styled.p`
  padding-top: 1.2rem;
  font-size: 2.4rem;
  font-weight: 400;
  @media (max-width: 1200px) {
    font-size: 2rem;
  }
  @media (max-width: 500px) {
    font-size: 1.6rem;
  }
`;
