import React from "react";
import styled from "styled-components";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";
import me from "../../assets/imgs/introduce/me.png";
import { GInner, GWrapper, SectionHeader } from "../../GlobalComponents";

function Introduce() {
  return (
    <Wrapper>
      <SectionHeader text="π€ Introduce" />
      <GInner>
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
                μλνμΈμ!
                <br /> μΉ κ°λ°μ λ°μ μ°μλλ€. π
              </Title>
              <Paragraph>
                μ§κΈκΉμ§ 5λμ°¨ ν μ€ν κ°λ°μλ‘ μ¬λ¬κ°μ§ κ²½νμ μμμ΅λλ€.
                <br />
                <br />
                νλ‘ νΈμλμ λ°±μλ κ°λ°μ΄ λͺ¨λ μ¬λ°μ§λ§,
                <br />
                νκ°μ§μ μ§μ€ νκ³ μ νλ‘ νΈμλλ₯Ό μ νν΄ κ³΅λΆ μ€μλλ€.
                <br />
                <br />
                Reactμ ES6 μ΄μμ λ¬Έλ², Typescriptλ±μ μ΅λνκ³  μμΌλ©°,
                <br />
                νμν κΈ°μ λ€μ μΆκ°μ μΌλ‘ νμ΅ μ€μλλ€.
                <br />
                <br />
                κ·Έλμ μ κ° κ°λ°ν΄μ¨ μμλ¬Όκ³Ό λ―Έλ νλ‘μ νΈλ₯Ό κ΅¬κ²½ν΄λ³΄μΈμ!
                <br />
                κ°μ¬ν©λλ€ :)
              </Paragraph>
            </TextArea>
          </Contents>
        </AnimationOnScroll>
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
    height: 180px;
    background: linear-gradient(
      to top,
      ${(props) => props.theme.bgRGBAColor},
      ${(props) => props.theme.bgGradientEndColor}
    );
  }
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
