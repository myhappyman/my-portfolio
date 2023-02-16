import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Wrapper = styled.div``;
const Area = styled.div`
  width: 100%;
  font-size: 16rem;
  /* display: flex;
  justify-content: space-between; */
`;
const CArea = styled.span``;
const Character = styled.a<{ height: number }>`
  display: inline-block;
  width: calc(100% / 13);
  padding-top: 10px;
  /* text-align: center; */
  /* letter-spacing: 8.4rem; */
  line-height: 50%;
  transform: scale(1, ${(props) => props.height});
  transform-origin: 0 0;
  /* outline: 1px solid red; */
  font-family: "Anton", sans-serif;
`;

function App() {
  const [height, setHeight] = useState<number[]>([]);
  useEffect(() => {
    for (let i = 0; i < 13; i++) {
      const number = Math.random() * (3.6 - 1.8) + 1.8;
      setHeight((prev) => [...prev, number]);
    }
  }, []);
  console.log(height);

  return (
    <Wrapper>
      <Area>
        <Character height={height[0]}>S</Character>
        <Character height={height[1]}>H</Character>
        <Character height={height[2]}>I</Character>
        <Character height={height[3]}>N</Character>
        <Character height={height[4]}>P</Character>
        <Character height={height[5]}>O</Character>
        <Character height={height[6]}>R</Character>
        <Character height={height[7]}>T</Character>
        <Character height={height[8]}>F</Character>
        <Character height={height[9]}>O</Character>
        <Character height={height[10]}>L</Character>
        <Character height={height[11]}>I</Character>
        <Character height={height[12]}>O</Character>
      </Area>
    </Wrapper>
  );
}

export default App;
