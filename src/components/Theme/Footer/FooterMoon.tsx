import { useEffect, useRef } from "react";
import styled from "styled-components";
import moon from "../../../assets/imgs/main/theme/moon/moon.png";
import fullImg from "../../../assets/imgs/footer/moon/fullImg.png";
import stars from "../../../assets/imgs/main/theme/moon/stars.png";

function FooterMoon() {
  const ref_moon = useRef<HTMLImageElement | null>(null);

  // 스크롤 이벤트에 따른 메인 이미지 애니메이트 처리
  const scrollToMoveMain = () => {
    const { scrollY, innerHeight } = window;
    const { scrollHeight } = document.body;

    if (scrollHeight - innerHeight * 2 < scrollY) {
      const value = scrollY - (scrollHeight - innerHeight * 2) - innerHeight;

      if (ref_moon.current) {
        ref_moon.current.style.top = `${value * 0.11}rem`;
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollToMoveMain);
    return () => window.removeEventListener("scroll", scrollToMoveMain);
  }, []);

  return (
    <>
      <ImgTag src={moon} alt="moon" className="moon" ref={ref_moon} />
      <ImgTag src={fullImg} alt="fullImg" className="fullImg" />
      <ImgTag src={stars} alt="stars" className="f_stars" />
      <ThkWatching>
        Thank you
        <br />
        for watching.
      </ThkWatching>
      <BottomTextArea>© 2023. ParkShinwoo all rights reserved.</BottomTextArea>
    </>
  );
}

export default FooterMoon;

const ImgTag = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; //png의 배경영역 위치에 딱 맞게 떨어지도록 설정
  pointer-events: none;

  &.moon {
    z-index: 9;
    mix-blend-mode: screen;
    animation: transScale 5s infinite;
  }
  &.fullImg {
    z-index: 10;
  }
  &.f_stars {
    animation: twinkleAnimation 2.5s infinite;
  }

  @media (max-width: 1200px) {
    object-fit: unset;
  }
`;

const BottomTextArea = styled.div`
  position: absolute;
  bottom: 3rem;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  font-size: 1.6rem;
  z-index: 11;
`;

const ThkWatching = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-size: 9.2rem;
  font-weight: 700;
  z-index: 11;

  @media (max-width: 1280px) {
    font-size: 8.6rem;
  }
  @media (max-width: 1180px) {
    font-size: 8rem;
  }
  @media (max-width: 1090px) {
    font-size: 7.4rem;
  }
  @media (max-width: 1020px) {
    font-size: 6.8rem;
  }
  @media (max-width: 940px) {
    font-size: 6rem;
  }
  @media (max-width: 820px) {
    font-size: 5.2rem;
  }
  @media (max-width: 720px) {
    font-size: 4.6rem;
  }
  @media (max-width: 640px) {
    font-size: 4rem;
  }
  @media (max-width: 480px) {
    font-size: 3.6rem;
  }
`;
