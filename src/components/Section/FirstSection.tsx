import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import ImgP from "../../assets/imgs/main/P.svg";
import ImgS from "../../assets/imgs/main/S.svg";

function FirstSection() {
  //   const [yScale, setYScale] = useState<number[]>([]);
  //   useEffect(() => {
  //     for (let i = 0; i < 12; i++) {
  //       const number = Math.random() * (3 - 1.3) + 1.3;
  //       setYScale((prev) => [...prev, number]);
  //     }
  //   }, []);

  return (
    <Wrapper>
      <Area>
        <Character src={ImgP} alt="P" />
        <Character src={ImgS} alt="S" />
        <Character src={ImgP} alt="W" />
        <Character src={ImgP} alt="P" />
        <Character src={ImgP} alt="O" />
        <Character src={ImgP} alt="R" />
        <Character src={ImgP} alt="T" />
        <Character src={ImgP} alt="F" />
        <Character src={ImgP} alt="O" />
        <Character src={ImgP} alt="L" />
        <Character src={ImgP} alt="I" />
        <Character src={ImgP} alt="O" />

        {/* <Character yScale={yScale[0]}>P</Character>
        <Character yScale={yScale[1]}>S</Character>
        <Character yScale={yScale[2]}>W</Character>
        <Character yScale={yScale[3]}>P</Character>
        <Character yScale={yScale[4]}>O</Character>
        <Character yScale={yScale[5]}>R</Character>
        <Character yScale={yScale[6]}>T</Character>
        <Character yScale={yScale[7]}>F</Character>
        <Character yScale={yScale[8]}>O</Character>
        <Character yScale={yScale[9]}>L</Character>
        <Character yScale={yScale[10]}>I</Character>
        <Character yScale={yScale[11]}>O</Character> */}
      </Area>
      <Circle />
    </Wrapper>
  );
}

export default FirstSection;

const Wrapper = styled.div`
  position: relative;
  height: 80vh;
  background-color: #1c0522;
`;

const Area = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  font-size: 16rem;
`;

const Character = styled.img`
  display: inline-block;
  width: calc(100% / 12);
  padding: 0 2rem;
  transform: scale(1, 1);
  transform-origin: top;
`;

const Circle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  background-color: ${(props) => props.theme.logoColor};
  mix-blend-mode: difference;
  animation: BigAndSmall 1s infinite;

  @keyframes BigAndSmall {
    0% {
      width: 10rem;
      height: 10rem;
    }
    100% {
      width: 45rem;
      height: 45rem;
    }
  }
`;
