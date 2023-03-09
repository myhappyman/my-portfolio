import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { themeMode } from "../atom";
import Footer_Mars from "./Theme/Footer/Footer_Mars";
import Footer_Moon from "./Theme/Footer/Footer_Moon";

function Footer() {
  const theme = useRecoilValue(themeMode);
  return (
    <Wrapper>
      <Section>{theme === "moon" ? <Footer_Moon /> : <Footer_Mars />}</Section>
    </Wrapper>
  );
}

export default Footer;

const Wrapper = styled.div`
  min-height: 100vh;
  background: linear-gradient(
    ${(props) => props.theme.bgGradientStartColor},
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
`;
