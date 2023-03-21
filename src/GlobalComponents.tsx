import { AnimationOnScroll } from "react-animation-on-scroll";
import styled from "styled-components";

/**
 * 섹션별 공통 헤더 UI작성 컴포넌트
 * @param param0
 * @returns
 */
export function SectionHeader({ text }: { text: string }) {
  return (
    <AnimationOnScroll
      initiallyVisible={false}
      animateIn="animate__bounce"
      delay={10}
    >
      <SectionName>{text}</SectionName>
    </AnimationOnScroll>
  );
}

/**
 * 공통 Wrapper
 */
export const GWrapper = styled.section`
  position: relative;
  padding: 6rem 0 2rem;

  & ~ & {
    margin-top: 6rem;
  }
`;

/**
 * 공통 Inner
 */
export const GInner = styled.div`
  width: 100%;
  margin: 0 auto;

  @media (min-width: 0px) {
    width: 100%;
    padding: 0 1rem;
  }
  @media (min-width: 500px) {
    padding: 0 4rem;
  }
  @media (min-width: 1000px) {
    padding: 0 10rem;
  }
  @media (min-width: 1200px) {
    width: 1000px;
    padding: 0;
  }
  @media (min-width: 1400px) {
    width: 1200px;
  }
  @media (min-width: 1600px) {
    width: 1400px;
  }
  @media (min-width: 1900px) {
    width: 1600px;
  }
`;

export const GArea = styled.div`
  width: 100%;
`;

/**
 * 공통 헤더 이름작성용
 */
const SectionName = styled.div`
  margin-bottom: 6rem;
  font-size: 7.2rem;
  font-weight: 700;

  @media (max-width: 1200px) {
    font-size: 6rem;
  }

  @media (max-width: 900px) {
    padding-left: 3rem;
  }
`;
