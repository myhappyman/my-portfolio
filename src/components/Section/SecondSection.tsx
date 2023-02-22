import React from "react";
import styled, { keyframes } from "styled-components";

function SecondSection() {
  return (
    <Wrapper>
      <MoveTextArea>
        <Paragraph>세상에 이런 폰트가 나오다니 천재인듯</Paragraph>
        <Paragraph>세상에 이런 폰트가 나오다니 천재인듯</Paragraph>
        <Paragraph>세상에 이런 폰트가 나오다니 천재인듯</Paragraph>
        <Paragraph>세상에 이런 폰트가 나오다니 천재인듯</Paragraph>
        <Paragraph>세상에 이런 폰트가 나오다니 천재인듯</Paragraph>
        <Paragraph>세상에 이런 폰트가 나오다니 천재인듯</Paragraph>
      </MoveTextArea>
    </Wrapper>
  );
}

export default SecondSection;

const Wrapper = styled.div``;

const TextKeyframse = keyframes`
    0% {        
        transform: translate3d(0, 0, 0);
    }
    100% {        
        transform: translate3d(-100%, 0, 0);
    }
`;

const MoveTextArea = styled.div`
  display: flex;
  white-space: nowrap;
  overflow: hidden;
`;

const Paragraph = styled.span`
  font-size: 24px;
  font-weight: 800;
  animation: ${TextKeyframse} 5s linear infinite;
`;
