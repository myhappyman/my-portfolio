import React from "react";
import styled from "styled-components";
import Main from "./components/Main";
import FirstSection from "./components/Section/FirstSection";
import IntroduceSection from "./components/Section/IntroduceSection";
import SecondSection from "./components/Section/SecondSection";

function App() {
  return (
    <Wrapper>
      <Main />
      <IntroduceSection />
      <FirstSection />
      <SecondSection />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div``;
