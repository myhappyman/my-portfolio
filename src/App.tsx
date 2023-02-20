import React from "react";
import styled from "styled-components";
import Header from "./components/Header";
import Main from "./components/Main";
import FirstSection from "./components/Section/FirstSection";
import SecondSection from "./components/Section/SecondSection";

function App() {
  return (
    <Wrapper>
      <Main />
      <FirstSection />
      <SecondSection />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div``;
