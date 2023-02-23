import styled from "styled-components";
import { useState } from "react";
import { AiOutlineAliwangwang } from "react-icons/ai";
import { BsFillMoonStarsFill, BsArrowUp } from "react-icons/bs";
import { IoMdPlanet } from "react-icons/io";
import { IoPlanet } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import { useRecoilState } from "recoil";
import { themeMode } from "../../atom";

function OptionBtn() {
  const [theme, setTheme] = useRecoilState(themeMode);
  const [isOpen, setIsOpen] = useState(false);
  const switchClickFn = () => {
    setIsOpen((prev) => !prev);
  };

  const changeToggleTheme = () => {
    if (theme === "moon") {
      setTheme("mars");
    } else {
      setTheme("moon");
    }
  };
  return (
    <Wrapper>
      <AnimatePresence>
        {isOpen && (
          <Area>
            {theme === "moon" ? (
              <Icon onClick={changeToggleTheme}>
                <BsFillMoonStarsFill size="4rem" />
              </Icon>
            ) : (
              <Icon onClick={changeToggleTheme}>
                <IoMdPlanet size="4rem" />
              </Icon>
            )}
            <Icon>
              <BsArrowUp size="4rem" />
            </Icon>
          </Area>
        )}
      </AnimatePresence>
      <Area>
        <Icon onClick={switchClickFn}>
          <AiOutlineAliwangwang size="4rem" />
        </Icon>
        <CircleText viewBox="0 0 100 100" width="100" height="100">
          <defs>
            <path
              id="circle"
              d="
        M 50, 50
        m -37, 0
        a 37,37 0 1,1 74,0
        a 37,37 0 1,1 -74,0"
            />
          </defs>
          <text font-size="17">
            <textPath xlinkHref="#circle">test text write...</textPath>
          </text>
        </CircleText>
      </Area>
    </Wrapper>
  );
}

export default OptionBtn;

const Wrapper = styled.span`
  position: fixed;
  right: 10rem;
  bottom: 10rem;
  z-index: 99999;
  cursor: pointer;
`;

const Area = styled(motion.ul)`
  position: relative;
  top: 0;
  left: 0;
  outline: 1px solid red;

  & ~ & {
    margin-top: 1rem;
  }
`;

const Icon = styled(motion.li)`
  position: absolute;
  top: 0;
  left: 0;
  width: 6rem;
  height: 6rem;
  padding: 1rem;
  border-radius: 50%;
  background-color: ${(props) => props.theme.btnColor};
  color: ${(props) => props.theme.btnTxtColor};
  outline: 1px solid blue;
  & ~ & {
    margin-top: 1rem;
  }
`;

const CircleText = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  fill: ${(props) => props.theme.btnColor};
  height: auto;
  max-width: 66vmin;
  transform-origin: center;
  width: 66%;
  outline: 1px solid green;
`;
