import React from "react";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { IsUp } from "../atom";
import { motion, AnimatePresence } from "framer-motion";

function Header() {
  const isUp = useRecoilValue(IsUp);
  return (
    <AnimatePresence>
      {!isUp && (
        <Wrapper
          variants={headerVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <Box>
            <Logo>P.S.W.</Logo>
            <Job>Front Web Programmer</Job>
          </Box>
        </Wrapper>
      )}
    </AnimatePresence>
  );
}

export default Header;

const headerVariants = {
  initial: { y: -300 },
  animate: {
    y: 0,
    transition: {
      type: "tween",
      duration: 0.5,
    },
  },
  exit: {
    y: -300,
    transition: {
      type: "tween",
      duration: 0.5,
    },
  },
};

const Wrapper = styled(motion.header)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 2rem 10rem;
  z-index: 99999;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.logoColor};
  transition: all 0.5s linear;
  cursor: pointer;

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
