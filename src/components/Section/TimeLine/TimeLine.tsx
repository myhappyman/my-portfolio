import { useState, useEffect } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { GInner, GWrapper, SectionHeader } from "../../../GlobalComponents";
import { themeMode } from "../../../atom";
import { DownBubble, UpBubble } from "./SpeechBubble";
import { IDocumentData, getStoreToData } from "../../../getFireStoreData";

function TimeLine() {
  // const [openModal, setOpenModal] = useState(false);
  // const toggleModal = () => setOpenModal((prop) => !prop);
  const theme = useRecoilValue(themeMode);

  const [timeline, setTimeline] = useState<IDocumentData[]>([]);
  useEffect(() => {
    getStoreToData("TimeLine", "order").then((datas) => setTimeline(datas));
  }, []);

  return (
    <GWrapper>
      <GInner>
        <SectionHeader text="💡 TimeLine" />
        <Area>
          <TimeLineArea>
            {timeline &&
              timeline.map((d, idx) => (
                <Incident key={d.id}>
                  <Text>
                    <Year>{d.data.year}</Year>
                    {d.data.title}
                  </Text>
                  {idx % 2 === 1 ? (
                    <DownBubble comments={d.data.comments} theme={theme} />
                  ) : (
                    <UpBubble comments={d.data.comments} theme={theme} />
                  )}
                </Incident>
              ))}
          </TimeLineArea>
        </Area>
      </GInner>
      {/* {openModal && (
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
      )} */}
    </GWrapper>
  );
}

export default TimeLine;

// const GlobalStyle = createGlobalStyle`
//   html{overflow: hidden;}
// `;

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

  @media (max-width: 1400px) {
    flex-direction: column;
    align-items: baseline;
    margin-left: 2rem;
    &::before {
      left: 0;
      width: 0.2rem;
      height: 97%;
    }
  }
`;

const Incident = styled.li`
  position: relative;
  width: calc(100% / 4);
  padding: 17rem 0;
  transition: 0.3s;

  @media (max-width: 1400px) {
    width: 100%;
    padding: 2rem 0;

    &:first-child {
      padding-top: 0;
    }
    &:last-child {
      padding-bottom: 0;
    }
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

  @media (max-width: 1400px) {
    position: relative;
  }

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
  }

  @media (max-width: 1400px) {
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

const Year = styled.em`
  margin-right: 0.8rem;
  padding: 0.4rem 0.8rem;
  border-radius: 1.2rem;
  background-color: #c6c6c6;
  font-size: 1.2rem;
  font-weight: 500;
  line-height: 1.2rem;
  vertical-align: middle;
`;

// const DimLayer = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100vh;
//   background-color: rgba(0, 0, 0, 0.4);
//   backdrop-filter: blur(15px);
//   z-index: 99998;
// `;

// const Modal = styled.div`
//   position: fixed;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   width: 80%;
//   height: 70vh;
//   border-radius: 5rem;
//   background-color: ${(props) => props.theme.bgColor};
//   z-index: 99999;
// `;

// const Header = styled.div`
//   outline: 1px solid #000;
// `;
// const Contents = styled.div`
//   outline: 1px solid red;
// `;
// const Footer = styled.div`
//   text-align: right;
//   padding: 1rem;
//   outline: 1px solid blue;
// `;
// const CloseBtn = styled.button`
//   width: 10rem;
//   padding: 1rem;
//   font-size: 1.6rem;
//   border: none;
//   border-radius: 1rem;
//   background: ${(props) => props.theme.btnColor};
//   color: ${(props) => props.theme.btnTxtColor};
//   cursor: pointer;
// `;
