import React, { useState, useEffect, useCallback } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import styled, { ThemeProvider } from "styled-components";
import { IsTop, IsUp, themeMode, themeSelectIsOpen, WindowSize } from "./atom";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import Contacts from "./components/Section/Contacts/Contacts";
import Introduce from "./components/Section/Introduce";
import OptionBtn from "./components/Section/OptionBtn";
import Projects from "./components/Section/Projects";
import Skills from "./components/Section/Skills";
import TimeLine from "./components/Section/TimeLine/TimeLine";
import Works from "./components/Section/Works";
import GlobalStyle from "./GlobalStyle";
import { marsTheme, moonTheme } from "./theme";

function App() {
  const selectTheme = useRecoilValue(themeMode);
  const [isOpen, setIsOpen] = useRecoilState(themeSelectIsOpen); // 바디 클릭하면 테마모드 셀렉터 닫히도록
  const toggleThemeSelectIsOpen = () => (isOpen ? setIsOpen(false) : null);

  const [fixedButtonShow, setFixedButtonShow] = useState(false);
  const setIsUp = useSetRecoilState(IsUp);
  const setIsTop = useSetRecoilState(IsTop);
  const [prevScroll, setPrevScroll] = useState(0);

  const handleScroll = useCallback(() => {
    const { scrollY } = window;

    scrollY > 600 ? setFixedButtonShow(true) : setFixedButtonShow(false);

    scrollY <= 10 ? setIsTop(true) : setIsTop(false); //최상단인지 아닌지 체크

    setIsUp(() => (scrollY - prevScroll > 0 ? true : false));
    setPrevScroll(scrollY);
  }, [prevScroll, setIsUp, setIsTop]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const setWindowSize = useSetRecoilState(WindowSize);

  const handleResize = useCallback(() => {
    const { innerWidth, innerHeight } = window;
    setWindowSize([innerWidth, innerHeight]);
  }, [setWindowSize]);
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  return (
    <ThemeProvider theme={selectTheme === "mars" ? marsTheme : moonTheme}>
      <GlobalStyle />
      <Wrapper onClick={toggleThemeSelectIsOpen}>
        <Main />
        <Introduce />
        <TimeLine />
        <Works />
        <Projects />
        <Skills />
        <Contacts />
        <Footer />
        <OptionBtn show={fixedButtonShow} />
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;

const Wrapper = styled.div``;
