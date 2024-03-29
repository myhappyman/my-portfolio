import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import stars from "../../assets/imgs/main/theme/mars/stars.png";
import planet from "../../assets/imgs/main/theme/mars/planet.png";
import cloud from "../../assets/imgs/main/theme/mars/cloud.png";
import moutains_front from "../../assets/imgs/main/theme/mars/mountains_front.png";
import moutains_behind01 from "../../assets/imgs/main/theme/mars/mountains_behind01.png";
import moutains_behind02 from "../../assets/imgs/main/theme/mars/mountains_behind02.png";

// import stars_1024 from "../../assets/imgs/main/theme/mars/stars_1024.png";
// import planet_1024 from "../../assets/imgs/main/theme/mars/planet_1024.png";
// import cloud_1024 from "../../assets/imgs/main/theme/mars/cloud_1024.png";
// import moutains_front_1024 from "../../assets/imgs/main/theme/mars/mountains_front_1024.png";
// import moutains_behind01_1024 from "../../assets/imgs/main/theme/mars/mountains_behind01_1024.png";
// import moutains_behind02_1024 from "../../assets/imgs/main/theme/mars/mountains_behind02_1024.png";

import { motion } from "framer-motion";

function Mars() {
  const ref_stars = useRef<HTMLImageElement | null>(null);
  const ref_planet = useRef<HTMLImageElement | null>(null);
  const ref_cloud = useRef<HTMLImageElement | null>(null);
  const ref_moutains_behind01 = useRef<HTMLImageElement | null>(null);
  const ref_moutains_behind02 = useRef<HTMLImageElement | null>(null);
  const ref_moutains_front = useRef<HTMLImageElement | null>(null);
  const ref_mainText = useRef<HTMLParagraphElement | null>(null);

  // 스크롤 이벤트에 따른 메인 이미지 애니메이트 처리
  const scrollToMoveMain = () => {
    const { scrollY, innerHeight } = window;

    // ios에서 최상단에서 강제로 끌고 올리면 동작하는 현상 방지용
    if (scrollY >= 0 && scrollY < innerHeight) {
      // 별 이미지
      // if (ref_stars.current) {
      //   ref_stars.current.style.left = `${scrollY * 0.025}rem`;
      // }

      // 행성 이미지
      if (ref_planet.current) {
        ref_planet.current.style.top = `${scrollY * 0.25}rem`;
        ref_planet.current.style.left = `-${scrollY * 0.05}rem`;

        // const scaleValue = scrollY === 0 ? 1 : 1 + scrollY * -0.0015;
        // ref_planet.current.style.scale = `${scaleValue}`;
      }

      // 구름 이미지
      // if (ref_cloud.current) {
      //   ref_cloud.current.style.top = `-${scrollY * 0.15}rem`;
      //   ref_cloud.current.style.left = `-${scrollY * 0.15}rem`;
      // }

      // 뒷부분 이미지01
      if (ref_moutains_behind01.current) {
        ref_moutains_behind01.current.style.top = `${scrollY * 0.15}rem`;
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
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollToMoveMain);
    return () => window.removeEventListener("scroll", scrollToMoveMain);
  }, []);

  return (
    <>
      <ImgTag
        src={stars}
        // srcSet={`${stars_1024} 500w, ${stars} 501w`}
        alt="stars"
        className="stars"
        ref={ref_stars}
      />
      <ImgTag
        src={planet}
        // srcSet={`${planet_1024} 500w, ${planet} 501w`}
        alt="planet"
        className="planet"
        ref={ref_planet}
      />
      <ImgTag
        src={cloud}
        // srcSet={`${cloud_1024} 500w, ${cloud} 501w`}
        alt="cloud"
        className="cloud"
        ref={ref_cloud}
      />
      <ImgTag
        src={moutains_behind01}
        // srcSet={`${moutains_behind01_1024} 500w, ${moutains_behind01} 501w`}
        alt="moutains_behind01"
        className="moutains_behind01"
        ref={ref_moutains_behind01}
      />
      <ImgTag
        src={moutains_behind02}
        // srcSet={`${moutains_behind02_1024} 500w, ${moutains_behind02} 501w`}
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

      <ImgTag
        src={moutains_front}
        // srcSet={`${moutains_front_1024} 500w, ${moutains_front} 501w`}
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
    animation: twinkleAnimation 4s infinite;
    z-index: 5;
  }
  &.cloud {
    z-index: 7;
    animation: cloudAnimation 4s ease infinite;
  }
  &.planet {
    margin-top: -10rem;
    z-index: 6;
    animation: transScale 5s infinite;
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
      transform: scale(0.9);
    }
    100% {
      transform: scale(1);
    }
  }

  @keyframes cloudAnimation {
    0% {
      transform: translateX(0);
    }
    50% {
      transform: translateX(15px);
    }
    100% {
      transform: translateX(0);
    }
  }

  @keyframes twinkleAnimation {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  @media (max-width: 1200px) {
    object-fit: unset;
  }
`;

const MainText = styled(motion.p)`
  position: absolute;
  top: 40%;
  color: #fff;
  font-size: 11.5rem;
  font-weight: 800;
  white-space: nowrap;
  z-index: 8;

  @media (max-width: 1200px) {
    font-size: 9.5rem;
  }
  @media (max-width: 900px) {
    font-size: 7.5rem;
  }
  @media (max-width: 600px) {
    font-size: 5.5rem;
  }
`;
