import React from "react";
import styled from "styled-components";
import Header from "./components/Header";
import FirstSection from "./components/Section/FirstSection";
import SecondSection from "./components/Section/SecondSection";

function App() {
  return (
    <Wrapper>
      <Header />
      <FirstSection />
      <SecondSection />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div``;
