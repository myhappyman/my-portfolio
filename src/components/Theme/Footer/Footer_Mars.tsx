import styled from "styled-components";
import marsBg from "../../../assets/imgs/main/theme/mars/marsBg.png";
import front01 from "../../../assets/imgs/footer/mars/front01.png";
import front02 from "../../../assets/imgs/footer/mars/front02.png";
import planet from "../../../assets/imgs/footer/mars/planet.png";
import astronaut from "../../../assets/imgs/footer/mars/astronaut.png";
import fire from "../../../assets/imgs/footer/mars/fire.png";
import stars from "../../../assets/imgs/footer/mars/stars.png";
import { useEffect, useRef } from "react";

function Footer_Mars() {
  const ref_moutains_front01 = useRef<HTMLImageElement | null>(null);
  const ref_moutains_front02 = useRef<HTMLImageElement | null>(null);
  const ref_planet = useRef<HTMLImageElement | null>(null);
  const ref_astronaut = useRef<HTMLImageElement | null>(null);
  const ref_fire = useRef<HTMLImageElement | null>(null);

  // 스크롤 이벤트에 따른 메인 이미지 애니메이트 처리
  const scrollToMoveMain = () => {
    const { scrollY, innerHeight } = window;
    const { scrollHeight } = document.body;

    if (scrollHeight - innerHeight * 2 < scrollY) {
      const value = scrollY - (scrollHeight - innerHeight * 2) - innerHeight;

      // // 앞부분 이미지01
      // if (ref_moutains_front01.current) {
      //   ref_moutains_front01.current.style.top = `-${value * 0.24}rem`;
      // }
      // // 앞부분 이미지02
      // if (ref_moutains_front02.current) {
      //   ref_moutains_front02.current.style.top = `-${value * 0.25}rem`;
      // }

      if (ref_planet.current) {
        ref_planet.current.style.top = `${value * 0.18}rem`;
      }
      if (ref_astronaut.current) {
        ref_astronaut.current.style.top = `${value * 0.11}rem`;
      }
      if (ref_fire.current) {
        ref_fire.current.style.top = `${value * 0.11}rem`;
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollToMoveMain);
    return () => window.removeEventListener("scroll", scrollToMoveMain);
  }, []);

  return (
    <>
      <ImgTag src={marsBg} alt="marsBg" className="marsBg" />
      <ImgTag
        src={front01}
        alt="front01"
        className="front01"
        ref={ref_moutains_front01}
      />
      <ImgTag
        src={front02}
        alt="front02"
        className="front02"
        ref={ref_moutains_front02}
      />
      <ImgTag src={stars} alt="stars" className="f_stars" />
      <ImgTag src={planet} alt="planet" className="planet" ref={ref_planet} />
      <ImgTag
        src={astronaut}
        alt="astronaut"
        className="astronaut"
        ref={ref_astronaut}
      />
      <FireBox ref={ref_fire}>
        <ImgTag src={fire} alt="fire" className="fire" />
      </FireBox>
      <ThkWatching>
        Thank you
        <br />
        for watching.
      </ThkWatching>
      <BottomTextArea>© 2023. ParkShinwoo all rights reserved.</BottomTextArea>
    </>
  );
}

export default Footer_Mars;

const ImgTag = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover; //png의 배경영역 위치에 딱 맞게 떨어지도록 설정
  pointer-events: none;

  &.front01 {
    z-index: 1;
  }
  &.front02 {
    z-index: 2;
  }
  &.f_stars {
    animation: twinkleAnimation 2.5s infinite;
  }
  &.planet {
    transform: translate(-53rem, -30rem);
    scale: 0.7;
    animation: scaleAnimation 5s infinite;
  }
  &.astronaut {
    margin-left: 36rem;
    margin-top: 20rem;
    animation: bounceYAnimation 3s infinite;
    z-index: 13;
  }
  &.fire {
    margin-left: 36rem;
    margin-top: 20rem;
    animation: twinkleAnimation 2s infinite;
  }

  @keyframes bounceYAnimation {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-18px);
    }
    100% {
      transform: translateY(0);
    }
  }

  @keyframes scaleAnimation {
    0% {
      scale: 0.7;
    }
    50% {
      scale: 0.65;
    }
    100% {
      scale: 0.7;
    }
  }
`;

const FireBox = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 12;
  animation: fireBounceAnimation 3s infinite;

  @keyframes fireBounceAnimation {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-16px);
    }
    100% {
      transform: translateY(0);
    }
  }
`;

const BottomTextArea = styled.div`
  position: absolute;
  bottom: 3rem;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  font-size: 1.6rem;
  color: #fff;
  z-index: 14;
`;

const ThkWatching = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-size: 9.2rem;
  font-weight: 700;
  color: #fff;
  z-index: 14;
`;
