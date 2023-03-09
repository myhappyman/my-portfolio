import styled from "styled-components";
import moon from "../../../assets/imgs/main/theme/moon/moon.png";
import fullImg from "../../../assets/imgs/footer/moon/fullImg.png";
import stars from "../../../assets/imgs/main/theme/moon/stars.png";

function Footer_Moon() {
  return (
    <>
      <ImgTag src={moon} alt="moon" className="moon" />
      <ImgTag src={fullImg} alt="fullImg" className="fullImg" />
      <ImgTag src={stars} alt="stars" className="f_stars" />
    </>
  );
}

export default Footer_Moon;

const ImgTag = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
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
`;
