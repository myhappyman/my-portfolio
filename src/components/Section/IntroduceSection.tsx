import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

function IntroduceSection() {
  return (
    <Wrapper>
      <Title variants={TitleVariants} initial="initial" animate="animate">
        Introduce
      </Title>
    </Wrapper>
  );
}

export default IntroduceSection;

const TitleVariants = {
  initial: {
    y: -300,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      type: "tween",
      duration: 0.5,
    },
  },
};

const Wrapper = styled.section`
  padding: 2rem 10rem;
  height: 100vh;
`;

const Title = styled(motion.div)`
  font-size: 7.2rem;
  font-weight: 700;
`;
