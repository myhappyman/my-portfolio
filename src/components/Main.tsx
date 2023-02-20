import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import Header from "./Header";
import stars from "../assets/imgs/main/stars.png";
import moon from "../assets/imgs/main/moon.png";
import moutains_front from "../assets/imgs/main/mountains_front.png";
import moutains_behind from "../assets/imgs/main/mountains_behind.png";

function Main() {
  const ref_stars = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const { scrollY } = window;
      if (ref_stars.current) {
        ref_stars.current.style.left = scrollY + "px";
      }

      //15.33초부터 다시 url:https://www.youtube.com/watch?v=1wfeqDyMUx4
      // ref_stars.style.left = scrollY + "px";
    });
  }, []);
  return (
    <Wrapper>
      <Header />
      <Section>
        <ImgTag src={stars} alt="stars" className="stars" ref={ref_stars} />
        <ImgTag src={moon} alt="moon" className="moon" />
        <ImgTag
          src={moutains_behind}
          alt="moutains_behind"
          className="moutains_behind"
        />
        <MainText>PSW PORTFOLIO</MainText>
        <Explore>Explore</Explore>
        <ImgTag
          src={moutains_front}
          alt="moutains_front"
          className="moutains_front"
        />
      </Section>
    </Wrapper>
  );
}

export default Main;

const Wrapper = styled.div`
  min-height: 100vh;
`;

const Section = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  padding: 10rem;

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100px;
    background: linear-gradient(to top, #1c0522, transparent);
    z-index: 1000;
  }
`;

const ImgTag = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; //png의 배경영역 위치에 딱 맞게 떨어지도록 설정
  pointer-events: none;

  &.stars {
  }
  &.moon {
    mix-blend-mode: screen;
    /**
     * 결과 색상을 항상 더 밝은 색상이 나오도록 한다.
     * 결과적으로 흰색 달과 주변의 빛만 먼저 나오고 주변의 어두운 색상보다는 배경의 gradient색상이 더 밝기때문에,
     * 검정효과는 사라지게 된다.
     * 포토샵 효과!
     */
  }
  &.moutains_behind {
  }
  &.moutains_front {
    z-index: 10;
  }
`;

const MainText = styled.h2`
  position: absolute;
  color: #fff;
  font-weight: 700;
  white-space: nowrap;
  font-size: 7.5vw;
  z-index: 9;
`;

const Explore = styled.button`
  display: inline-block;
  padding: 0.8rem 3rem;
  border-radius: 4rem;
  background: #fff;
  color: #2b1055;
  font-size: 1.5em;
  z-index: 9;
  transform: translateY(100px);
`;
