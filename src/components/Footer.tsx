import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { themeMode } from "../atom";
import FooterMars from "./Theme/Footer/FooterMars";
import FooterMoon from "./Theme/Footer/FooterMoon";

function Footer() {
  const theme = useRecoilValue(themeMode);
  return (
    <Wrapper>
      <Section>{theme === "moon" ? <FooterMoon /> : <FooterMars />}</Section>
    </Wrapper>
  );
}

export default Footer;

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

  @media (max-width: 1400px) {
    height: 90vh;
  }
  @media (max-width: 820px) {
    height: 80vh;
    margin-top: -3px;
  }
  @media (max-width: 500px) {
    height: 50vh;
  }
`;
