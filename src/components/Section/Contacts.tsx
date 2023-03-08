import React from "react";
import styled from "styled-components";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";

const Contacts_List = [
  {
    name: "github",
    comments:
      "프론트엔드로 전향하는 공부를 시작하면서 본격적으로 시작했어요! 학습 정리, 미니 프로젝트, 페이지 배포, 소스 관리 등의 목적으로 사용하고 있습니다!",
    link: "https://github.com/myhappyman",
  },
  {
    name: "blog",
    comments:
      "공부를 하면서 개인 PC에 정리하는것에는 한계가 있다고 생각이 들었어요! 언제나 온라인 환경이라면 제가 정리한 정보가 있으면 좋겠다고 생각이 들어서 블로그를 시작했고 현재는 tistory 플랫폼에서 약 3년정도 필요할 때마다 글을 작성하고 있습니다. 개발하면서 다시 발생시키고 싶은 않은 오류나 공유하고 싶은 기술, 정보 등을 주로 담고 있어요!",
    link: "https://myhappyman.tistory.com/",
  },
];

function Contacts() {
  return (
    <Wrapper>
      <Inner>
        <AnimationOnScroll animateIn="animate__bounceInUp">
          <SectionName>👓 Contacts</SectionName>
        </AnimationOnScroll>
      </Inner>
      <AnimationOnScroll
        initiallyVisible={true}
        animateIn="animate__fadeInUp"
        delay={300}
      >
        <Area>
          {Contacts_List &&
            Contacts_List.map((contact, idx) => (
              <Items key={`contact${idx}`}>
                <Name>{contact.name}</Name>
                <Comments>{contact.comments}</Comments>
                <ImgBox>{contact.link}</ImgBox>
              </Items>
            ))}
        </Area>
      </AnimationOnScroll>
    </Wrapper>
  );
}

export default Contacts;

const Wrapper = styled.section`
  padding: 2rem 10rem;
  height: 100vh;
`;

const Inner = styled.div`
  max-width: 1680px;
  margin: 0 auto;
`;

const SectionName = styled.div`
  font-size: 7.2rem;
  font-weight: 700;
`;

const Area = styled.ul``;
const Items = styled.li``;
const Name = styled.div``;
const Comments = styled.div``;
const ImgBox = styled.div``;
