import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <Wrapper>
      <Box>
        <Logo>P.S.W.</Logo>
        <Job>Front Web Programmer</Job>
      </Box>
    </Wrapper>
  );
}

export default Header;

const Wrapper = styled.header`
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
