import React, { useState, useEffect, useCallback, useRef } from "react";
import styled from "styled-components";
import { AnimatePresence } from "framer-motion";
import Header from "./Header";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { IsTop, IsUp, themeMode } from "../atom";
import Moon from "./Theme/Main/Moon";
import Mars from "./Theme/Main/Mars";

function Main() {
  const selectTheme = useRecoilValue(themeMode);
  const [isUp, setIsUp] = useRecoilState(IsUp);
  const setIsTop = useSetRecoilState(IsTop);
  const [prevScroll, setPrevScroll] = useState(0);
  const ref_wrapper = useRef<HTMLDivElement | null>(null);

  // 스크롤 이벤트에 따른 상단 헤더 보여주거나 숨기기 애니메이트
  const handleScroll = useCallback(() => {
    const { scrollY } = window;
    // alert(`${scrollY}, ${prevScroll}`);
    scrollY <= 10 ? setIsTop(true) : setIsTop(false); //최상단인지 아닌지 체크
    setIsUp(() => (scrollY - prevScroll > 0 ? true : false));
    setPrevScroll(scrollY);
  }, [prevScroll, setIsUp, setIsTop]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); //clean up
  }, [handleScroll]);

  useEffect(() => {
    if (ref_wrapper.current) {
      console.log(ref_wrapper.current.clientHeight);
    }
  }, []);

  return (
    <Wrapper ref={ref_wrapper}>
      <AnimatePresence>{!isUp && <Header />}</AnimatePresence>
      <Section>{selectTheme === "mars" ? <Mars /> : <Moon />}</Section>
    </Wrapper>
  );
}

export default Main;

const Wrapper = styled.div`
  background: linear-gradient(
    ${(props) => props.theme.bgGradientStartColor},
    ${(props) => props.theme.bgGradientMiddleColor},
    ${(props) => props.theme.bgGradientEndColor}
  );
`;

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  padding: 10rem;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 75px;
    background: linear-gradient(
      to top,
      ${(props) => props.theme.bgGradientEndColor},
      transparent
    );
    z-index: 99;
  }

  @media (max-width: 1400px) {
    height: 90vh;
  }
  @media (max-width: 820px) {
    height: 80vh;
  }
  @media (max-width: 600px) {
    height: 50vh;
    &::before {
      bottom: -1px;
    }
  }
  @media (max-width: 480px) {
    height: 37vh;
  }
`;
