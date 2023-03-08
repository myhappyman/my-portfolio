import styled from "styled-components";
import marsBg from "../../../assets/imgs/main/theme/mars/marsBg.png";
import front01 from "../../../assets/imgs/footer/mars/front01.png";
import front02 from "../../../assets/imgs/footer/mars/front02.png";

function Footer_Moon() {
  return (
    <>
      <ImgTag src={marsBg} alt="marsBg" className="marsBg" />
      <ImgTag src={front01} alt="front01" />
      <ImgTag src={front02} alt="front02" />
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

  &.stars {
    animation: bounceAnimation 3s infinite;
    z-index: 6;
  }
  &.cloud {
    z-index: 7;
    animation: cloudAnimation 4s ease infinite;
  }
  &.planet {
    margin-top: -10rem;
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
`;
