import React, { useCallback, useEffect, useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import styled, { ThemeProvider } from "styled-components";
import { themeMode, themeSelectIsOpen, WindowSize } from "./atom";
import Footer from "./components/Footer";
import Main from "./components/Main";
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

  const scrollIsTop = () => {
    const { scrollY } = window;
    scrollY > 600 ? setFixedButtonShow(true) : setFixedButtonShow(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", scrollIsTop);
    return () => window.removeEventListener("scroll", scrollIsTop);
  }, []);

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
