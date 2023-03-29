import styled from "styled-components";

function ContactBg() {
  return (
    <ContactBgArea>
      <CircleType1 />
      <CircleType2 />
      <CircleType3 />
      <LongCircle1 />
      <LongCircle2 />
    </ContactBgArea>
  );
}

export default ContactBg;

const ContactBgArea = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Circle = styled.div`
  position: absolute;
  width: 20rem;
  height: 20rem;
  border-radius: 50%;
  filter: blur(8px);
`;
const CircleType1 = styled(Circle)`
  top: 20rem;
  left: 8rem;
  background: linear-gradient(
    ${(props) => props.theme.bgGradientStartColor},
    ${(props) => props.theme.bgRGBAColor}
  );
`;
const CircleType2 = styled(Circle)`
  top: 0;
  right: 8rem;
  width: 30rem;
  height: 30rem;
  background: linear-gradient(
    ${(props) => props.theme.bgGradientStartColor},
    ${(props) => props.theme.bgColor}
  );

  @media (max-width: 800px) {
    right: 2rem;
    width: 20rem;
    height: 20rem;
  }

  @media (max-width: 620px) {
    top: 13rem;
  }
`;

const CircleType3 = styled(Circle)`
  top: 50%;
  left: 50%;
  width: 26rem;
  height: 26rem;
  background: linear-gradient(
    ${(props) => props.theme.bgGradientStartColor},
    ${(props) => props.theme.bgGradientEndColor}
  );
`;

const LongCircle1 = styled(Circle)`
  top: 40%;
  left: 42%;
  width: 5rem;
  height: 20rem;
  border-radius: 2.5rem;
  background: linear-gradient(
    ${(props) => props.theme.bgGradientStartColor},
    ${(props) => props.theme.bgColor}
  );
  transform: rotate(235deg);
`;

const LongCircle2 = styled(Circle)`
  top: 0;
  left: 55%;
  width: 5rem;
  height: 20rem;
  border-radius: 2.5rem;
  background: linear-gradient(
    ${(props) => props.theme.bgGradientEndColor},
    ${(props) => props.theme.bgColor}
  );
  transform: rotate(225deg);

  @media (max-width: 620px) {
    top: 11rem;
    left: 45%;
  }
`;
