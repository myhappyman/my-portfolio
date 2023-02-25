import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import marsBg from "../../assets/imgs/main/theme/mars/marsBg.png";
import stars from "../../assets/imgs/main/theme/mars/stars.png";
import planet from "../../assets/imgs/main/theme/mars/planet.png";
import cloud from "../../assets/imgs/main/theme/mars/cloud.png";
import moutains_front from "../../assets/imgs/main/theme/mars/mountains_front.png";
import moutains_behind01 from "../../assets/imgs/main/theme/mars/mountains_behind01.png";
import moutains_behind02 from "../../assets/imgs/main/theme/mars/mountains_behind02.png";

import { motion } from "framer-motion";

function Mars() {
  const ref_stars = useRef<HTMLImageElement | null>(null);
  const ref_planet = useRef<HTMLImageElement | null>(null);
  const ref_cloud = useRef<HTMLImageElement | null>(null);
  const ref_moutains_behind01 = useRef<HTMLImageElement | null>(null);
  const ref_moutains_behind02 = useRef<HTMLImageElement | null>(null);
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

    // 행성 이미지
    if (ref_planet.current) {
      ref_planet.current.style.top = `-${scrollY * 0.15}rem`;
    }

    // 구름 이미지
    if (ref_cloud.current) {
      ref_cloud.current.style.top = `-${scrollY * 0.15}rem`;
      ref_cloud.current.style.left = `-${scrollY * 0.15}rem`;
    }

    // 뒷부분 이미지01
    if (ref_moutains_behind01.current) {
      ref_moutains_behind01.current.style.top = `${scrollY * 0.1}rem`;
    }

    // 뒷부분 이미지02
    if (ref_moutains_behind02.current) {
      ref_moutains_behind02.current.style.top = `${scrollY * 0.14}rem`;
    }

    // 앞부분 이미지
    if (ref_moutains_front.current) {
      ref_moutains_front.current.style.top = `${scrollY * 0.17}rem`;
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

  useEffect(() => {
    window.addEventListener("scroll", scrollToMoveMain);
    return () => window.removeEventListener("scroll", scrollToMoveMain);
  }, []);

  return (
    <>
      <ImgTag src={marsBg} alt="marsBg" className="marsBg" />
      <ImgTag src={stars} alt="stars" className="stars" ref={ref_stars} />
      <ImgTag src={planet} alt="planet" className="planet" ref={ref_planet} />
      <ImgTag src={cloud} alt="cloud" className="cloud" ref={ref_cloud} />
      <ImgTag
        src={moutains_behind01}
        alt="moutains_behind01"
        className="moutains_behind01"
        ref={ref_moutains_behind01}
      />
      <ImgTag
        src={moutains_behind02}
        alt="moutains_behind02"
        className="moutains_behind02"
        ref={ref_moutains_behind02}
      />
      <MainText
        variants={mainTextVariants}
        initial="initial"
        animate="animate"
        ref={ref_mainText}
      >
        PORTFOLIO
      </MainText>
      <Explore ref={ref_explore}>Explore</Explore>
      <ImgTag
        src={moutains_front}
        alt="moutains_front"
        className="moutains_front"
        ref={ref_moutains_front}
      />
    </>
  );
}

export default Mars;

const mainTextVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 2,
    },
  },
};

const ImgTag = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; //png의 배경영역 위치에 딱 맞게 떨어지도록 설정
  pointer-events: none;

  &.stars {
    animation: bounceAnimation 3s infinite;
    z-index: 6;
  }

  &.cloud {
    z-index: 7;
  }

  &.planet {
    animation: transScale 5s infinite;
    /* transform: scale(0.8);
     */
    /**
     * 결과 색상을 항상 더 밝은 색상이 나오도록 한다.
     * 결과적으로 흰색 달과 주변의 빛만 먼저 나오고 주변의 어두운 색상보다는 배경의 gradient색상이 더 밝기때문에,
     * 검정효과는 사라지게 된다.
     * 포토샵 효과!
     */
  }
  &.moutains_behind01 {
    z-index: 9;
  }
  &.moutains_behind02 {
    z-index: 8;
  }
  &.moutains_front {
    z-index: 10;
  }

  @keyframes transScale {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
    100% {
      transform: scale(1);
    }
  }

  @keyframes bounceAnimation {
    0% {
      transform: translateX(0);
    }
    50% {
      transform: translateX(-10px);
    }
    100% {
      transform: translateX(0);
    }
  }
`;

const MainText = styled(motion.p)`
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
