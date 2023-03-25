import React from "react";
import styled from "styled-components";
import { useRecoilState, useRecoilValue } from "recoil";
import { IsTop, themeMode, themeSelectIsOpen } from "../atom";
import { motion, AnimatePresence } from "framer-motion";
import { AiFillCaretDown } from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { IoMdPlanet } from "react-icons/io";
import { GInner } from "../GlobalComponents";

function Header() {
  const isTop = useRecoilValue(IsTop);
  const [theme, setTheme] = useRecoilState(themeMode);
  const [isOpen, setIsOpen] = useRecoilState(themeSelectIsOpen);
  const switchClickFn = () => setIsOpen((prev) => !prev); // 테마 셀렉터 보여주기 toggle fn

  return (
    <Wrapper
      variants={headerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      mixmode={isTop ? "normal" : "difference"}
    >
      <Inner>
        <LogoBox>
          <Logo>P.S.W.</Logo>
          <Job>Front Web Programmer</Job>
        </LogoBox>

        <Box>
          <ThemeArea onClick={switchClickFn}>
            {theme === "moon" ? (
              <SelectTheme isOpen={isOpen}>
                <BsFillMoonStarsFill className="icon moon" />
                <SText>THEME</SText>
                <AiFillCaretDown className="arrow" />
              </SelectTheme>
            ) : (
              <SelectTheme isOpen={isOpen}>
                <IoMdPlanet className="icon" />
                <SText>THEME</SText>
                <AiFillCaretDown className="arrow" />
              </SelectTheme>
            )}
            <AnimatePresence>
              {isOpen ? (
                <ThemeList
                  variants={themeSliderVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <Theme onClick={() => setTheme("moon")}>MOON</Theme>
                  <Theme onClick={() => setTheme("mars")}>MARS</Theme>
                </ThemeList>
              ) : null}
            </AnimatePresence>
          </ThemeArea>
        </Box>
      </Inner>
    </Wrapper>
  );
}

export default Header;

const headerVariants = {
  initial: {
    marginTop: -300,
    transition: {
      duration: 0.5,
    },
  },
  animate: {
    marginTop: 0,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    marginTop: -300,
    transition: {
      duration: 0.5,
    },
  },
};

const themeSliderVariants = {
  initial: {
    height: 0,
    opacity: 0,
    transition: {
      type: "tween",
      duration: 0.5,
    },
  },
  animate: {
    height: 100,
    opacity: 1,
    transition: {
      type: "tween",
      duration: 0.5,
    },
  },
  exit: {
    height: 0,
    transition: {
      type: "tween",
      duration: 0.5,
    },
  },
};

const Wrapper = styled(motion.header)<{ mixmode: string }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 9999;
  mix-blend-mode: ${(props) => props.mixmode};
`;

const Inner = styled(GInner.withComponent(motion.div))`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 1rem;

  @media (max-width: 420px) {
    padding: 2rem 3rem;
  }
`;

const Box = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.logoColor};
  transition: all 0.5s linear;
  cursor: pointer;
`;

const LogoBox = styled(Box)`
  &:hover {
    color: ${(props) => props.theme.linkHoverColor};
  }
`;

const Logo = styled.span`
  font-size: 3.2rem;
  font-weight: 700;
  letter-spacing: 0.4rem;
`;

const Job = styled.span`
  font-size: 1rem;
  margin-top: -5px;
`;

const ThemeArea = styled.ul`
  width: 16rem;
  height: 4.6rem;
  line-height: 4.6rem;
  border-radius: 5rem;
  font-size: 2.2rem;
  font-weight: 400;
  border: 2px solid ${(props) => props.theme.logoColor};
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

const SelectTheme = styled.li<{ isOpen: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;

  .icon {
    font-size: 2.6rem;
    margin-right: 1rem;
  }
  .icon.moon {
    font-size: 2rem;
  }
  .arrow {
    margin-left: 1.6rem;
    font-size: 1.3rem;
    transition: all 0.3s;
    ${(props) => (props.isOpen ? "transform: rotate(180deg);" : "")}
  }
`;

const ThemeList = styled(motion.ul)`
  margin-top: 5.2rem;
  width: 100%;
  border-radius: 1.6rem;
  background-color: rgba(255, 255, 255, 0.2);
  overflow: hidden;
`;

const Theme = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  &:first-child {
    margin-top: 0.3rem;
  }
  &:last-child {
    margin-bottom: 0.3rem;
  }
`;

const SText = styled.span``;
