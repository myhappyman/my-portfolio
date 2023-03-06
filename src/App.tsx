import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import styled, { ThemeProvider } from "styled-components";
import { themeMode, themeSelectIsOpen } from "./atom";
import Main from "./components/Main";
import Contacts from "./components/Section/Contacts";
import FirstSection from "./components/Section/FirstSection";
import Introduce from "./components/Section/Introduce";
import Projects from "./components/Section/Projects";
import SecondSection from "./components/Section/SecondSection";
import Skills from "./components/Section/Skills";
import Works from "./components/Section/Works";
import GlobalStyle from "./GlobalStyle";
import { marsTheme, moonTheme } from "./theme";

function App() {
  const selectTheme = useRecoilValue(themeMode);
  const [isOpen, setIsOpen] = useRecoilState(themeSelectIsOpen); // 바디 클릭하면 테마모드 셀렉터 닫히도록
  const toggleThemeSelectIsOpen = () => (isOpen ? setIsOpen(false) : null);

  return (
    <ThemeProvider theme={selectTheme === "mars" ? marsTheme : moonTheme}>
      <GlobalStyle />
      <Wrapper onClick={toggleThemeSelectIsOpen}>
        <Main />
        <Introduce />
        <Works />
        <Projects />
        <Skills />
        <Contacts />
        <FirstSection />
        <SecondSection />
        {/* <OptionBtn /> */}
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;

const Wrapper = styled.div``;
