import { AnimationOnScroll } from "react-animation-on-scroll";
import styled from "styled-components";

const PROJECT_LIST = [
  {
    name: "Sinflix",
    comments: "넷플릭스 클론 코딩을 작성해보았습니다.",
  },
];

function Projects() {
  return (
    <Wrapper>
      <AnimationOnScroll
        initiallyVisible={true}
        animateIn="animate__bounce"
        delay={10}
      >
        <SectionName>🚀 Projects</SectionName>
      </AnimationOnScroll>
      <AnimationOnScroll
        initiallyVisible={true}
        animateIn="animate__fadeInUp"
        delay={300}
      >
        <Area>
          <Contents></Contents>
        </Area>
      </AnimationOnScroll>
    </Wrapper>
  );
}

export default Projects;

const Wrapper = styled.section`
  padding: 2rem 10rem;
  height: 100%;
`;

const SectionName = styled.div`
  font-size: 7.2rem;
  font-weight: 700;
`;

const Area = styled.div`
  width: 100%;
  padding: 10rem;
`;

const Contents = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;
