import styled from "styled-components";
import { IoMdArrowUp } from "react-icons/io";

function OptionBtn() {
  const moveTop = () => {
    window.scroll({
      behavior: "smooth",
      top: 0,
    });
  };
  return (
    <Wrapper>
      <Area>
        {/* <Icon onClick={moveTop}>☝</Icon> */}
        <Icon onClick={moveTop}>
          <IoMdArrowUp className="icon" />
        </Icon>
      </Area>
    </Wrapper>
  );
}

export default OptionBtn;

const Wrapper = styled.div`
  position: fixed;
  right: 10rem;
  bottom: 10rem;
  width: 6rem;
  height: 6rem;
  z-index: 99999;
  cursor: pointer;
`;

const Area = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 6rem;
  height: 6rem;
`;

const Icon = styled.span`
  display: block;
  width: 6rem;
  height: 6rem;
  padding: 0.5rem 1rem;
  font-size: 4rem;
  text-align: center;
  border-radius: 50%;
  color: ${(props) => props.theme.btnTxtColor};
  box-shadow: ${(props) => props.theme.boxShadow};

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${(props) => props.theme.boxShadowHover};
  }
  .icon {
    color: ${(props) => props.theme.textColor};
  }
`;
