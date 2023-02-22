import React, { useState, useEffect, useRef, useCallback } from "react";
import styled from "styled-components";
import Header from "./Header";
import stars from "../assets/imgs/main/stars.png";
import moon from "../assets/imgs/main/moon.png";
import moutains_front from "../assets/imgs/main/mountains_front.png";
import moutains_behind from "../assets/imgs/main/mountains_behind.png";
import { useSetRecoilState } from "recoil";
import { IsUp } from "../atom";

function Main() {
  const setIsUp = useSetRecoilState(IsUp);
  const [prevScroll, setPrevScroll] = useState(0);

  const ref_stars = useRef<HTMLImageElement | null>(null);
  const ref_moon = useRef<HTMLImageElement | null>(null);
  const ref_moutains_behind = useRef<HTMLImageElement | null>(null);
  const ref_moutains_front = useRef<HTMLImageElement | null>(null);
  const ref_mainText = useRef<HTMLParagraphElement | null>(null);
  const ref_explore = useRef<HTMLButtonElement | null>(null);

  // 스크롤 이벤트에 따른 메인 이미지 애니메이트 처리
  const scrollToMoveMain = () => {
    const { scrollY } = window;
    // 별 이미지
    if (ref_stars.current) {
      ref_stars.current.style.left = `${scrollY * 0.025}rem`;
    }

    // 달 이미지
    if (ref_moon.current) {
      ref_moon.current.style.top = `${scrollY * 0.15}rem`;
    }

    // 뒷부분 이미지
    if (ref_moutains_behind.current) {
      ref_moutains_behind.current.style.top = `${scrollY * 0.06}rem`;
    }

    // 앞부분 이미지
    if (ref_moutains_front.current) {
      ref_moutains_front.current.style.top = `${scrollY * 0.15}rem`;
    }

    // 포트폴리오 텍스트
    if (ref_mainText.current) {
      ref_mainText.current.style.marginRight = `${scrollY * 0.4}rem`;
      ref_mainText.current.style.marginTop = `${scrollY * 0.15}rem`;
    }

    // 더보기 버튼
    if (ref_explore.current) {
      ref_explore.current.style.marginTop = `${scrollY * 0.25}rem`;
    }
  };

  // 스크롤 이벤트에 따른 상단 헤더 보여주거나 숨기기 애니메이트
  const handleScroll = useCallback(() => {
    const { scrollY } = window;
    setIsUp(() => (scrollY - prevScroll > 0 ? true : false));
    setPrevScroll(scrollY);
  }, [prevScroll, setIsUp]);

  useEffect(() => {
    window.addEventListener("scroll", scrollToMoveMain);
    return () => window.removeEventListener("scroll", scrollToMoveMain);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); //clean up
  }, [handleScroll]);

  return (
    <Wrapper>
      <Header />
      <Section>
        <ImgTag src={stars} alt="stars" className="stars" ref={ref_stars} />
        <ImgTag src={moon} alt="moon" className="moon" ref={ref_moon} />
        <ImgTag
          src={moutains_behind}
          alt="moutains_behind"
          className="moutains_behind"
          ref={ref_moutains_behind}
        />
        <MainText ref={ref_mainText}>PORTFOLIO</MainText>
        <Explore ref={ref_explore}>Explore</Explore>
        <ImgTag
          src={moutains_front}
          alt="moutains_front"
          className="moutains_front"
          ref={ref_moutains_front}
        />
      </Section>
    </Wrapper>
  );
}

export default Main;

const Wrapper = styled.div`
  min-height: 100vh;
  background: linear-gradient(
    ${(props) => props.theme.bgGradientStartColor},
    ${(props) => props.theme.bgGradientEndColor}
  );
`;

const Section = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  padding: 10rem;
  overflow: hidden;

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

const MainText = styled.p`
  position: absolute;
  top: 40%;
  color: #fff;
  font-weight: 800;
  white-space: nowrap;
  font-size: 9.5rem;
  z-index: 9;
`;

const Explore = styled.button`
  display: inline-block;
  padding: 0.8rem 3rem;
  border-radius: 4rem;
  background: ${(props) => props.theme.btnColor};
  color: ${(props) => props.theme.btnTxtColor};
  font-size: 1.5em;
  z-index: 9;
  transform: translateY(100px);
  cursor: pointer;
`;
