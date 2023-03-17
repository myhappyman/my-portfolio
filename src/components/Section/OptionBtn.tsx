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
  right: 10rem;
  bottom: 15rem;
  width: 8rem;
  height: 8rem;
  z-index: 99999;
  cursor: pointer;
`;

const Icon = styled.span`
  display: block;
  font-size: 4.6rem;
  text-align: center;
  border-radius: 50%;
  color: ${(props) => props.theme.btnTxtColor};

  .icon {
    display: block;
    color: ${(props) => props.theme.textColor};
    z-index: 99999;
  }
  .icon:hover {
    scale: 1.1;
  }
`;
