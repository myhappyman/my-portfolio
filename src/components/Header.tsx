import React, { useState } from "react";
import styled from "styled-components";
import { useRecoilState, useRecoilValue } from "recoil";
import { IsTop, IsUp, themeMode } from "../atom";
import { motion, AnimatePresence } from "framer-motion";
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
                <SelectTheme>
                  <BsFillMoonStarsFill className="icon" />
                  <SText>Moon</SText>
                </SelectTheme>
              ) : (
                <SelectTheme>
                  <IoMdPlanet className="icon" />
                  <SText>Mars</SText>
                </SelectTheme>
              )}
              {isOpen && (
                <ThemeList
                  variants={themeSliderVariants}
                  initial="close"
                  animate="open"
                  exit="exit"
                >
                  <Theme onClick={() => setTheme("moon")}>Moon</Theme>
                  <Theme onClick={() => setTheme("mars")}>Mars</Theme>
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
    y: -35,
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
    y: -35,
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
  width: 14rem;
  height: 3.5rem;
  border-radius: 5rem;
  font-size: 2.4rem;
  font-weight: 300;
  outline: 1px solid ${(props) => props.theme.logoColor};
  cursor: pointer;
`;

const SelectTheme = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;

  .icon {
    font-size: 1.6rem;
    margin-right: 0.4rem;
  }
`;

const ThemeList = styled(motion.ul)`
  margin-top: 3.5rem;
  width: 100%;
  background-color: ${(props) => props.theme.bgColor};
  overflow: hidden;
`;

const Theme = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 1.6rem;
  width: 100%;
`;

const SText = styled.span``;
