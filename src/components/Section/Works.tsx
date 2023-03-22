import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";
import { firestore } from "../../firebase-config";
import { DocumentData } from "firebase/firestore";
import { GArea, GInner, GWrapper, SectionHeader } from "../../GlobalComponents";

interface IWorks {
  data: DocumentData;
  id: string;
}

function Works() {
  const [works, setWorks] = useState<IWorks[]>([]);
  useEffect(() => {
    const array: IWorks[] = [];
    const collection = firestore.collection("Works");
    collection
      .orderBy("order")
      .get()
      .then((docs) => {
        docs.forEach((doc) => {
          if (doc.exists) {
            array.push({ data: doc.data(), id: doc.id });
          }
        });
        setWorks(array);
      });
  }, []);

  const [isHover, setIsHover] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const toggleHover = (mode: string, idx: number) => {
    setIsHover((prev) => {
      const copyArr = [...prev];
      const frontArr = copyArr.slice(0, idx);
      const endArr = copyArr.slice(idx + 1, copyArr.length);
      if (mode === "enter") {
        return [...frontArr, true, ...endArr];
      } else {
        return [...frontArr, false, ...endArr];
      }
    });
  };

  return (
    <GWrapper>
      <GInner>
        <SectionHeader text="💻 Works" />
        <AnimationOnScroll
          initiallyVisible={false}
          animateIn="animate__fadeInUp"
          delay={300}
        >
          <GArea>
            <Contents>
              {works.map((work, idx) => (
                <Article
                  key={work.id}
                  onMouseEnter={() => toggleHover("enter", idx)}
                  onMouseLeave={() => toggleHover("leave", idx)}
                >
                  <Content>
                    <img src={work.data.background} alt={work.data.fullTitle} />
                    <FadeIn className={isHover[idx] ? "fadeIn" : "hover"}>
                      <TypeInfo>
                        <SepWeb className="web">WEB</SepWeb>
                        <SepWorkType className="worksType">
                          {work.data.worksType &&
                            work.data.worksType.map((wt: string, idx: number) =>
                              idx + 1 === work.data.worksType.length
                                ? wt
                                : wt + ", "
                            )}
                        </SepWorkType>
                        <SepType className="type">
                          {work.data.type &&
                            work.data.type.map((t: string, idx: number) =>
                              idx + 1 === work.data.type.length ? t : t + ", "
                            )}
                        </SepType>
                      </TypeInfo>
                      <Title>{work.data.title}</Title>
                      <Company>{work.data.company}</Company>
                      <Period>{work.data.period}</Period>
                      <Comments>{work.data.comments}</Comments>
                      <UseSkillArea>
                        {work.data.useSkill &&
                          work.data.useSkill.map((s: string, idx: number) => (
                            <Skill key={`${work.data.title}${s}${idx}`}>
                              {s}
                            </Skill>
                          ))}
                      </UseSkillArea>
                      <GoLink href={work.data.link} target="_blank" />
                    </FadeIn>
                  </Content>
                </Article>
              ))}
            </Contents>
          </GArea>
        </AnimationOnScroll>
      </GInner>
    </GWrapper>
  );
}

export default Works;

const Contents = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

const CursorPointer = styled.li`
  cursor: pointer;
`;

const Article = styled(CursorPointer)`
  float: left;
  width: 33.3%;

  @media (max-width: 900px) {
    width: 50%;
  }
  @media (max-width: 500px) {
    width: 100%;
  }
`;

const Content = styled.div`
  position: relative;
  width: 100%;

  img {
    display: block;
    width: 100%;
    height: 100%;
  }
`;

const FadeIn = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;

  &.hover {
    opacity: 0;
  }
  &.fadeIn {
    padding: 5rem 3rem 3rem;
    opacity: 1;
    color: #fff;
    background: rgba(0, 0, 0, 0.6);

    @media (max-width: 900px) {
      padding: 3rem;
    }

    @media (max-width: 500px) {
      padding: 1rem;
    }
  }
`;

const Title = styled.div`
  padding: 1rem 0 0.6rem;
  font-size: 3.4rem;
  font-weight: 600;
`;
const TypeInfo = styled.div`
  font-size: 2rem;
  font-weight: 400;

  span ~ span {
    margin-left: 0.8rem;
  }
`;

const Sep = styled.span`
  display: inline-block;
  padding: 0.2rem 0.8rem 0.16rem;
  margin-bottom: 0.3rem;
  border-radius: 0.4rem;
  font-size: 1.2rem;
  color: #fff;
`;
const SepWeb = styled(Sep)`
  background: linear-gradient(91deg, #ff6371 0%, #ff9062 100%);
`;
const SepWorkType = styled(Sep)`
  background: linear-gradient(to left, #72c4e2, #5f93d9);
`;
const SepType = styled(Sep)`
  background: linear-gradient(to right, #4bac9d, #70c799);
`;
const Company = styled.div`
  position: relative;
  padding-left: 0.8rem;
  font-size: 1.6rem;
  font-weight: 500;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    width: 2.6px;
    height: 1.4rem;
    background-color: rgba(255, 255, 255, 0.8);
    transform: translateY(-50%);
  }
`;
const Period = styled.div`
  padding-top: 0.2rem;
  font-size: 1.2rem;
  font-weight: 400;
`;
const Comments = styled.span`
  display: block;
  margin: 1rem 0;
  font-size: 1.2rem;
  line-height: 1.9rem;
  color: rgba(255, 255, 255, 0.95);
`;
const UseSkillArea = styled.div``;
const Skill = styled.span`
  display: inline-block;
  font-size: 1.4rem;
  background-color: rgba(100, 100, 100, 0.7);
  border-radius: 2rem;
  padding: 0.3rem 1.2rem;
  margin-right: 0.6rem;
  margin-bottom: 0.6rem;
`;
const GoLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 4rem;
  right: 3rem;
  width: 6rem;
  height: 6rem;
  font-size: 1.6rem;
  font-weight: 600;
  text-align: center;
  border: 2px solid rgba(255, 255, 255, 0.8);
  border-radius: 50%;
  overflow: hidden;
  transition: 0.5s;
  background-color: transparent;

  &:hover {
    border: 2px solid rgba(114, 196, 226, 1);
  }
  &:hover::before {
    content: "";
    position: absolute;
    top: 1rem;
    left: 50%;
    transform: translate(-50%);
    width: 32rem;
    height: 32rem;
    border-radius: 13rem;
    background-color: rgba(114, 196, 226, 1);
    animation: wave 4s infinite linear;
  }
  &:hover&::after {
    color: #fff;
  }
  &::after {
    content: "View";
    bottom: 4rem;
    right: 3rem;
    font-size: 1.6rem;
    font-weight: 600;
    text-align: center;
    color: rgba(255, 255, 255, 0.8);
    z-index: 9;
  }

  @keyframes wave {
    0% {
      top: 6rem;
      transform: translate(-50%) rotate(-180deg);
    }

    100% {
      top: 1rem;
      transform: translate(-50%) rotate(360deg);
    }
  }
`;
