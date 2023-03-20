import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";
import { DocumentData } from "firebase/firestore";
import { firestore } from "../../firebase-config";
import { GArea, GInner, GWrapper, SectionHeader } from "../../GlobalComponents";

interface ISkill {
  data: DocumentData;
  id: string;
}

function zeroTen(num: number): string {
  return num < 10 ? `0${num}` : num + "";
}

function Skills() {
  const [skills, setSkills] = useState<ISkill[]>([]);
  useEffect(() => {
    const array: ISkill[] = [];
    const collection = firestore.collection("Skills");
    collection
      .orderBy("order")
      .get()
      .then((docs) => {
        docs.forEach((doc) => {
          if (doc.exists) {
            array.push({ data: doc.data(), id: doc.id });
          }
        });
        setSkills(array);
      });
  }, []);

  return (
    <GWrapper>
      <GInner>
        <SectionHeader text="🪐 Skills" />
        <AnimationOnScroll
          initiallyVisible={true}
          animateIn="animate__fadeInUp"
          delay={300}
        >
          <GArea>
            <Contents>
              {skills &&
                skills.map((skill, idx) => (
                  <Item key={skill.id}>
                    <Number>{zeroTen(idx + 1)} /</Number>
                    <Div>
                      <Icon>
                        <img src={skill.data.icon} alt={skill.data.name} />
                      </Icon>
                      <FlexColumn>
                        <Name>{skill.data.name}</Name>
                        <Content>{skill.data.content}</Content>
                      </FlexColumn>
                    </Div>
                  </Item>
                ))}
            </Contents>
          </GArea>
        </AnimationOnScroll>
      </GInner>
    </GWrapper>
  );
}

export default Skills;

const Contents = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8rem 1rem;
`;

const Item = styled.li`
  padding: 2rem 1rem 1rem 2rem;
  outline: none;
  transition: 0.3s;
  &:hover {
    border-radius: 2rem;
    transform: translateY(-2px);
    box-shadow: ${(props) => props.theme.boxShadowHover};
  }
`;

const Icon = styled.div`
  width: 5.2rem;
  height: 5.2rem;
  img {
    display: block;
    height: 100%;
  }
`;

const Number = styled.span`
  font-size: 3rem;
  font-weight: 700;
`;
const Div = styled.div`
  display: flex;
  margin-top: 0.4rem;
`;
const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
`;
const Name = styled.span`
  padding: 0 1rem;
  font-size: 2.2rem;
  font-weight: 500;
`;
const Content = styled.span`
  padding: 0 1rem;
  font-size: 1.4rem;
`;
