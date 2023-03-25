import { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { GInner, GWrapper, SectionHeader } from "../../../GlobalComponents";

function TimeLine() {
  const [openModal, setOpenModal] = useState(false);
  // const toggleModal = () => setOpenModal((prop) => !prop);
  const toggleModal = () => null;

  return (
    <GWrapper>
      <GInner>
        <SectionHeader text="💡 TimeLine" />
        <Area>
          <TimeLineArea>
            <Incident onClick={toggleModal}>
              <Text>JavaSript 방과 후 강사</Text>
              <SBUpType>
                <p>
                  웹 개발자 양성 학원에서 방과 후 시간강사로 Javascript문법에
                  대한 수업을 진행하였습니다.
                </p>
              </SBUpType>
            </Incident>
            <Incident onClick={toggleModal}>
              <Text>3D 지구본 제작</Text>
              <SBDownType>
                <p>Three.js를 활용한 지구본 렌더링, 이벤트 및 데이터 처리</p>
              </SBDownType>
            </Incident>
            <Incident onClick={toggleModal}>
              <Text> 해킹대회 참여</Text>
              <SBUpType>
                <p>'한국인터넷진흥원'이 주관한 해킹대회에서~ </p>
              </SBUpType>
            </Incident>
            <Incident onClick={toggleModal}>
              <Text>프론트엔드 과정 진행 중~</Text>
              <SBDownType>
                <p>프론트엔드 과정 진행 중~</p>
              </SBDownType>
            </Incident>
          </TimeLineArea>
        </Area>
      </GInner>
      {openModal && (
        <>
          <GlobalStyle />
          <DimLayer onClick={toggleModal}></DimLayer>
          <Modal>
            <Header>JS 시간강사</Header>
            <Contents></Contents>
            <Footer>
              <CloseBtn onClick={toggleModal}>닫기</CloseBtn>
            </Footer>
          </Modal>
        </>
      )}
    </GWrapper>
  );
}

export default TimeLine;

const GlobalStyle = createGlobalStyle`
  html{overflow: hidden;}
`;

const Area = styled.div``;

const TimeLineArea = styled.ul`
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    height: 0.2rem;
    background-color: ${(props) => props.theme.textColor};
  }

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: baseline;
    margin-left: 6rem;
    &::before {
      left: 0;
      width: 0.2rem;
      height: 90%;
    }
  }
`;

const Incident = styled.li`
  position: relative;
  width: calc(100% / 4);
  padding: 12rem 0;
  transition: 0.3s;
  z-index: 98;
  cursor: pointer;

  @media (max-width: 800px) {
    width: 100%;
  }
`;

const Text = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -10%);
  padding-top: 3rem;
  font-size: 2rem;
  font-weight: 700;
  white-space: nowrap;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 1.2rem;
    height: 1.2rem;
    border-radius: 50%;
    background-color: ${(props) => props.theme.textColor};
    transition: 0.3s;
    z-index: 98;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0.3rem;
    left: 50%;
    transform: translateX(-50%);
    width: 0.6rem;
    height: 0.6rem;
    border-radius: 50%;
    background-color: ${(props) => props.theme.bgColor};
    transition: 0.3s;
    z-index: 99;
  }

  &:hover {
    color: ${(props) => props.theme.textHoverColor};
  }

  &:hover::before {
    background-color: ${(props) => props.theme.textHoverColor};
  }

  @media (max-width: 800px) {
    left: 0;
    transform: translate(0, -50%);
    padding: 0 0 0 3rem;

    &::before {
      top: 50%;
      left: -0.6rem;
      transform: translate(0, -50%);
    }
    &::after {
      top: 50%;
      left: -0.3rem;
      transform: translate(0, -50%);
    }
  }
`;

const SpeechBubble = styled.div`
  position: absolute;
  width: 75%;
  padding: 1rem 1.5rem;
  color: rgba(36, 46, 71, 0.5);
  font-size: 1.2rem;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: -0.6px;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 0.8rem;
  box-shadow: ${(props) => props.theme.boxShadow};

  &:hover {
    box-shadow: ${(props) => props.theme.boxShadowHover};
  }

  @media (max-width: 800px) {
    width: 60%;
  }
`;

const SBUpType = styled(SpeechBubble)`
  bottom: 80%;
  left: 50%;
  transform: translateX(-1.5rem);

  &::before {
    content: "";
    position: absolute;
    bottom: -12px;
    left: 1rem;
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 12px solid rgba(0, 0, 0, 0.25);
  }
  &::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 1rem;
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 11px solid #fff;
  }

  @media (max-width: 800px) {
    bottom: auto;
    top: 65%;
    left: 3rem;
    transform: translate(0, 0);

    &::before {
      top: -12px;
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
      border-bottom: 12px solid rgba(0, 0, 0, 0.25);
      border-top: none;
    }
    &::after {
      top: -10px;
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
      border-bottom: 11px solid #fff;
      border-top: none;
    }
  }
`;

const SBDownType = styled(SpeechBubble)`
  top: 100%;
  right: 50%;
  transform: translateX(1.5rem);

  &::before {
    content: "";
    position: absolute;
    top: -12px;
    right: 1rem;
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 12px solid rgba(0, 0, 0, 0.25);
  }
  &::after {
    content: "";
    position: absolute;
    top: -10px;
    right: 1rem;
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 11px solid #fff;
  }

  @media (max-width: 800px) {
    top: 65%;
    left: 3rem;
    right: 0;
    transform: translate(0, 0);

    &::before {
      left: 1rem;
      border-top: none;
    }
    &::after {
      left: 1rem;
      border-top: none;
    }
  }
`;

const DimLayer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(15px);
  z-index: 99998;
`;

const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  height: 70vh;
  border-radius: 5rem;
  background-color: ${(props) => props.theme.bgColor};
  z-index: 99999;
`;

const Header = styled.div`
  outline: 1px solid #000;
`;
const Contents = styled.div`
  outline: 1px solid red;
`;
const Footer = styled.div`
  text-align: right;
  padding: 1rem;
  outline: 1px solid blue;
`;
const CloseBtn = styled.button`
  width: 10rem;
  padding: 1rem;
  font-size: 1.6rem;
  border: none;
  border-radius: 1rem;
  background: ${(props) => props.theme.btnColor};
  color: ${(props) => props.theme.btnTxtColor};
  cursor: pointer;
`;
