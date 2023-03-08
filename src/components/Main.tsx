import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import { AnimatePresence } from "framer-motion";
import Header from "./Header";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { IsTop, IsUp, themeMode } from "../atom";
import Moon from "./Theme/Main/Moon";
import Mars from "./Theme/Main/Mars";

function Main() {
  const isUp = useRecoilValue(IsUp);
  const selectTheme = useRecoilValue(themeMode);
  const setIsUp = useSetRecoilState(IsUp);
  const setIsTop = useSetRecoilState(IsTop);
  const [prevScroll, setPrevScroll] = useState(0);

  // 스크롤 이벤트에 따른 상단 헤더 보여주거나 숨기기 애니메이트
  const handleScroll = useCallback(() => {
    const { scrollY } = window;
    scrollY === 0 ? setIsTop(true) : setIsTop(false); //최상단인지 아닌지 체크
    setIsUp(() => (scrollY - prevScroll > 0 ? true : false));
    setPrevScroll(scrollY);
  }, [prevScroll, setIsUp, setIsTop]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); //clean up
  }, [handleScroll]);

  return (
    <Wrapper>
      <AnimatePresence>{!isUp && <Header />}</AnimatePresence>
      <Section>{selectTheme === "mars" ? <Mars /> : <Moon />}</Section>
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
    bottom: 0;
    width: 100%;
    height: 75px;
    background: linear-gradient(
      to top,
      ${(props) => props.theme.bgGradientEndColor},
      transparent
    );
    z-index: 1000;
  }
`;
