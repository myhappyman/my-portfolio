import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <Wrapper>
      <Box>
        <Job>Front Web Programmer</Job>
        <Logo>P.S.W.</Logo>
      </Box>
    </Wrapper>
  );
}

export default Header;

const Wrapper = styled.div`
  padding: 2.4rem;
  margin-bottom: 2.4rem;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.logoColor};
`;

const Logo = styled.span`
  font-size: 3.2rem;
  font-weight: 700;
`;

const Job = styled.span`
  font-size: 1rem;
`;
