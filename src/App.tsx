import React from "react";
import styled from "styled-components";
import Main from "./components/Main";
import Contacts from "./components/Section/Contacts";
import FirstSection from "./components/Section/FirstSection";
import IntroduceSection from "./components/Section/IntroduceSection";
import SecondSection from "./components/Section/SecondSection";
import Skills from "./components/Section/Skills";

function App() {
  return (
    <Wrapper>
      <Main />
      <IntroduceSection />
      <Skills />
      <Contacts />
      <FirstSection />
      <SecondSection />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div``;
