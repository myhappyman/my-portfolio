import React from "react";
import { useRecoilValue } from "recoil";
import styled, { ThemeProvider } from "styled-components";
import { themeMode } from "./atom";
import Main from "./components/Main";
import Contacts from "./components/Section/Contacts";
import FirstSection from "./components/Section/FirstSection";
import IntroduceSection from "./components/Section/IntroduceSection";
import SecondSection from "./components/Section/SecondSection";
import Skills from "./components/Section/Skills";
import Works from "./components/Section/Works";
import GlobalStyle from "./GlobalStyle";
import { marsTheme, moonTheme } from "./theme";

function App() {
  const selectTheme = useRecoilValue(themeMode);
  return (
    <ThemeProvider theme={selectTheme === "mars" ? marsTheme : moonTheme}>
      <GlobalStyle />
      <Wrapper>
        <Main />
        <IntroduceSection />
        <Works />
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
