import styled from "styled-components";

interface IInfo {
  comments: string;
  theme: string;
}

export function DownBubble({ comments, theme }: IInfo) {
  return <SBDownType thisTheme={theme}>{makeComments(comments)}</SBDownType>;
}

export function UpBubble({ comments, theme }: IInfo) {
  return <SBUpType thisTheme={theme}>{makeComments(comments)}</SBUpType>;
}

function makeComments(comments: string) {
  return (
    <p>
      {comments &&
        comments.split("\\n").map((p: string, index: number) => {
          return (
            <span key={`literary${index}`}>
              {p}
              <br />
            </span>
          );
        })}
    </p>
  );
}

const SpeechBubble = styled.div<{ thisTheme: string }>`
  position: absolute;
  width: 85%;
  padding: 1.2rem 1.5rem;
  color: rgba(36, 46, 71, 0.5);
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 1.9rem;
  letter-spacing: -0.6px;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 0.8rem;
  box-shadow: ${(props) =>
    props.thisTheme === "moon" ? "none" : props.theme.boxShadow};

  &:hover {
    box-shadow: ${(props) =>
      props.thisTheme === "moon" ? "none" : props.theme.boxShadowHover};
  }

  @media (max-width: 1900px) {
    br {
      display: none;
    }
  }

  @media (max-width: 1400px) {
    width: 86%;
  }
`;

const SBUpType = styled(SpeechBubble)`
  bottom: 68%;
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

  @media (max-width: 1400px) {
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

  @media (max-width: 500px) {
    position: relative;
    top: auto;
    left: auto;
    margin: 2rem 0 1rem 3rem;
    transform: none;
  }
`;

const SBDownType = styled(SpeechBubble)`
  top: 82%;
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

  @media (max-width: 1400px) {
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

  @media (max-width: 500px) {
    position: relative;
    top: auto;
    left: auto;
    right: auto;
    margin: 2rem 3rem 1rem;
    transform: none;
  }
`;
