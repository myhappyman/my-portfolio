import styled from "styled-components";
import { FaArrowUp } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";

function OptionBtn({ show }: { show: boolean }) {
  const moveTop = () => {
    window.scroll({
      behavior: "smooth",
      top: 0,
    });
  };

  return (
    <AnimatePresence mode={"popLayout"}>
      {show && (
        <Wrapper
          key="modal"
          variants={themeSliderVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <Icon onClick={moveTop}>
            <FaArrowUp className="icon" />
          </Icon>
        </Wrapper>
      )}
    </AnimatePresence>
  );
}

export default OptionBtn;

const themeSliderVariants = {
  initial: {
    height: 40,
  },
  animate: {
    height: 0,
    transition: {
      type: "spring",
      duration: 0.5,
    },
  },
  exit: {
    height: 40,
    transition: {
      duration: 0.2,
    },
  },
};

const Wrapper = styled(motion.div)`
  position: fixed;
  right: 7rem;
  bottom: 12rem;
  z-index: 99997;
  cursor: pointer;
`;

const Icon = styled.span`
  display: block;
  font-size: 3.6rem;
  text-align: center;
  border-radius: 50%;
  color: ${(props) => props.theme.btnTxtColor};
  padding: 0.7rem;
  box-shadow: ${(props) => props.theme.boxShadow};
  backdrop-filter: blur(30px);
  background: rgba(255, 255, 255, 0.9);
  border-radius: 26px;

  .icon {
    display: block;
    color: #000;
  }
  &:hover {
    scale: 1.1;
    box-shadow: ${(props) => props.theme.boxShadowHover};
  }
`;
