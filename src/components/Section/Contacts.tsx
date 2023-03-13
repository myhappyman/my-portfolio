import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";
import { DocumentData } from "firebase/firestore";
import { firestore } from "../../firebase-config";

// const Contacts_List = [
//   {
//     name: "Github",
//     comments:
//       "프론트엔드로 전향하는 공부를 시작하면서 본격적으로 시작했어요! 학습 정리, 미니 프로젝트, 페이지 배포, 소스 관리 등의 목적으로 사용하고 있습니다!",
//     link: "https://github.com/myhappyman",
//     img: github,
//   },
//   {
//     name: "Blog - Tistory",
//     comments:
//       "공부를 하면서 개인 PC에 정리하는것에는 한계가 있다고 생각이 들었어요! 언제나 온라인 환경이라면 제가 정리한 정보가 있으면 좋겠다고 생각이 들어서 블로그를 시작했고 현재는 tistory 플랫폼에서 약 3년정도 필요할 때마다 글을 작성하고 있습니다. 개발하면서 다시 발생시키고 싶은 않은 오류나 공유하고 싶은 기술, 정보 등을 주로 담고 있어요!",
//     link: "https://myhappyman.tistory.com/",
//     img: blog,
//   },
// ];
// interface IContacts {
//   name: string;
//   comments: string;
//   link: string;
//   image: string;
// }
interface IContacts {
  data: DocumentData;
  id: string;
}

function Contacts() {
  const [Contacts_List, setContacts_List] = useState<IContacts[]>([]);
  useEffect(() => {
    const array: IContacts[] = [];
    const collection = firestore.collection("contacts");
    collection.get().then((docs) => {
      docs.forEach((doc) => {
        if (doc.exists) {
          array.push({ data: doc.data(), id: doc.id });
        }
      });
      setContacts_List(array);
    });
  }, []);
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
              <Items key={contact.id}>
                <GoLink href={contact.data.link} target="_blank">
                  <Top>
                    <Name>{contact.data.name}</Name>
                    <Comments>{contact.data.comments}</Comments>
                  </Top>
                  <Bottom>
                    <ImgBox>
                      <img src={contact.data.image} alt={contact.data.name} />
                    </ImgBox>
                  </Bottom>
                </GoLink>
              </Items>
            ))}
        </Area>
      </AnimationOnScroll>
    </Wrapper>
  );
}

export default Contacts;

const Wrapper = styled.section`
  position: relative;
  margin-bottom: 15rem;
  padding: 2rem 10rem;
  height: 100vh;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: -15rem;
    width: 100%;
    height: 180px;
    background: linear-gradient(
      to bottom,
      ${(props) => props.theme.bgColor},
      ${(props) => props.theme.bgGradientStartColor}
    );
    z-index: 1000;
  }
`;

const Inner = styled.div`
  max-width: 1680px;
  margin: 0rem auto;
`;

const SectionName = styled.div`
  font-size: 7.2rem;
  font-weight: 700;
`;

const Area = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 5rem;
  padding: 0 10rem;
`;
const Items = styled.li`
  width: 33%;
  border-radius: 2rem;
  box-shadow: 0px 7px 15px 0 rgb(0 0 0 / 15%);
  transition: all 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 5px 5px 20px rgb(0 0 0 / 20%);
  }
`;
const GoLink = styled.a``;
const Top = styled.div`
  position: relative;
  height: 45%;
`;
const Name = styled.div`
  padding: 1rem 1.8rem;
  border-radius: 2rem 2rem 0 0;
  font-size: 4.6rem;
  font-weight: 600;
  background-color: ${(props) => props.theme.textColor};
  color: ${(props) => props.theme.bgColor};
`;
const Comments = styled.div`
  padding: 1.8rem;
  height: 20rem;
  font-size: 1.6rem;
`;
const Bottom = styled.div``;
const ImgBox = styled.div`
  img {
    display: block;
    width: 100%;
    border-radius: 0 0 2rem 2rem;
  }
`;
