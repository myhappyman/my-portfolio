import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";
import { DocumentData } from "firebase/firestore";
import { firestore } from "../../firebase-config";
import { GInner, GWrapper, SectionHeader } from "../../GlobalComponents";

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
      <SectionHeader text="🪐 Skills" />
      <GInner>
        <AnimationOnScroll
          initiallyVisible={true}
          animateIn="animate__fadeInUp"
          delay={300}
        >
          <Area>
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
          </Area>
        </AnimationOnScroll>
      </GInner>
    </GWrapper>
  );
}

export default Skills;

const Area = styled.div`
  padding: 10rem;
`;

const Contents = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8rem 1rem;
`;

const Item = styled.li`
  padding: 1rem;
  outline: none;
  transition: 0.3s;
  &:hover {
    border-radius: 2rem;
    transform: translateY(-2px);
    box-shadow: 5px 5px 20px rgb(0 0 0 / 20%);
  }
`;

const Icon = styled.div`
  width: 5.7rem;
  height: 5.7rem;
  svg {
    margin-top: 0.4rem;
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
  font-size: 1.8rem;
  font-weight: 500;
`;
const Content = styled.span`
  padding: 0 1rem;
  font-size: 1.4rem;
`;
