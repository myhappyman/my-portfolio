import React, { useState } from "react";
import styled from "styled-components";
import { useRecoilState, useRecoilValue } from "recoil";
import { IsTop, IsUp, themeMode } from "../atom";
import { motion, AnimatePresence } from "framer-motion";
import { AiFillCaretDown } from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { IoMdPlanet } from "react-icons/io";

function Header() {
  const isUp = useRecoilValue(IsUp);
  const isTop = useRecoilValue(IsTop);
  const [theme, setTheme] = useRecoilState(themeMode);
  const [isOpen, setIsOpen] = useState(false);
  const switchClickFn = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <AnimatePresence>
      {!isUp && (
        <Wrapper
          variants={headerVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          mixmode={isTop ? "normal" : "difference"}
        >
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
              {isOpen && (
                <ThemeList
                  variants={themeSliderVariants}
                  initial="close"
                  animate="open"
                  exit="exit"
                >
                  <Theme onClick={() => setTheme("moon")}>MOON</Theme>
                  <Theme onClick={() => setTheme("mars")}>MARS</Theme>
                </ThemeList>
              )}
            </ThemeArea>
          </Box>
        </Wrapper>
      )}
    </AnimatePresence>
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
  close: {
    y: -46,
    opacity: 0,
  },
  open: {
    y: 0,
    opacity: 1,
    trasition: {
      type: "spring",
      duration: 3,
    },
  },
  exit: {
    y: -46,
    opacity: 0,
    trasition: {
      type: "spring",
      duration: 3,
    },
  },
};

const Wrapper = styled(motion.header)<{ mixmode: string }>`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 2rem 10rem;
  mix-blend-mode: ${(props) => props.mixmode};
  z-index: 9999;
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
  width: 15rem;
  height: 4.6rem;
  line-height: 4.6rem;
  border-radius: 5rem;
  font-size: 2.2rem;
  font-weight: 300;
  border: 1px solid ${(props) => props.theme.logoColor};
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
  padding: 0.6rem;
  width: 100%;
  border-radius: 1.6rem;
  /* background-color: ${(props) => props.theme.bgColor}; */
  background-color: rgba(255, 255, 255, 0.2);
  overflow: hidden;
`;

const Theme = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  /* padding-left: 1.6rem; */
  width: 100%;
`;

const SText = styled.span``;
