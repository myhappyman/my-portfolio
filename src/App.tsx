import React from "react";
import styled from "styled-components";
import Main from "./components/Main";
import Contacts from "./components/Section/Contacts";
import FirstSection from "./components/Section/FirstSection";
import IntroduceSection from "./components/Section/IntroduceSection";
import OptionBtn from "./components/Section/OptionBtn";
import SecondSection from "./components/Section/SecondSection";
import Skills from "./components/Section/Skills";
import Works from "./components/Section/Works";

function App() {
  return (
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
  );
}

export default App;

const Wrapper = styled.div``;
