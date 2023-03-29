import styled from "styled-components";
import { AnimatePresence } from "framer-motion";
import Header from "./Header";
import { useRecoilValue } from "recoil";
import { IsUp, themeMode } from "../atom";
import Moon from "./Theme/Main/Moon";
import Mars from "./Theme/Main/Mars";

function Main() {
  const selectTheme = useRecoilValue(themeMode);
  const isUp = useRecoilValue(IsUp);

  return (
    <Wrapper>
      <AnimatePresence>{!isUp && <Header />}</AnimatePresence>
      <Section>{selectTheme === "mars" ? <Mars /> : <Moon />}</Section>
    </Wrapper>
  );
}

export default Main;

const Wrapper = styled.div`
  background: linear-gradient(
    ${(props) => props.theme.bgGradientStartColor},
    ${(props) => props.theme.bgGradientMiddleColor},
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
    left: 0;
    bottom: 0;
    width: 100%;
    height: 75px;
    background: linear-gradient(
      to top,
      ${(props) => props.theme.bgGradientEndColor},
      transparent
    );
    z-index: 99;
  }

  @media (max-width: 1400px) {
    height: 90vh;
  }
  @media (max-width: 1120px) {
    height: 80vh;
    &::before {
      bottom: -1px;
    }
  }
  @media (max-width: 768px) {
    height: 70vh;
    &::before {
      bottom: -1px;
    }
  }
  @media (max-width: 600px) {
    height: 50vh;
  }
  @media (max-width: 480px) {
    height: 37vh;
  }
`;
