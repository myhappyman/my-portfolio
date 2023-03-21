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
  /* min-height: 100vh; */
  padding: 6rem 0 2rem;

  & ~ & {
    margin-top: 6rem;
  }
`;

/**
 * 공통 Inner
 */
export const GInner = styled.div`
  width: 1600px;
  margin: 0 auto;
  /* padding: 0 20rem; */
`;

export const GArea = styled.div`
  width: 100%;
  /* padding: 6rem; */
`;

/**
 * 공통 헤더 이름작성용
 */
const SectionName = styled.div`
  /* padding: 0 6rem; */
  margin-bottom: 6rem;
  font-size: 7.2rem;
  font-weight: 700;

  @media (max-width: 1200px) {
    font-size: 6rem;
  }
`;
