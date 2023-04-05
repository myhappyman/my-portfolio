import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "animate.css/animate.min.css";
import { GArea, GInner, GWrapper, SectionHeader } from "../../GlobalComponents";
import { IDocumentData, getStoreToData } from "../../getFireStoreData";

const zeroTen = (num: number): string => (num < 10 ? `0${num}` : `${num}`);

function Skills() {
  const [skills, setSkills] = useState<IDocumentData[]>([]);
  useEffect(() => {
    getStoreToData("Skills", "order").then((datas) => setSkills(datas));
  }, []);

  return (
    <GWrapper>
      <GInner>
        <SectionHeader text="🪐 Skills" />
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
      </GInner>
    </GWrapper>
  );
}

export default Skills;

const Contents = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 800px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 500px) {
    /* grid-template-columns: 33% 33% 33%; */
    /* grid-template-columns: repeat(3, 1fr);
    gap: 1rem 0; */
  }
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

  @media (max-width: 500px) {
    padding: 0.4rem;
  }
`;

const Icon = styled.div`
  width: 5.2rem;
  height: 5.2rem;
  img {
    display: block;
    height: 100%;
  }

  @media (max-width: 800px) {
    width: 3.8rem;
    height: 3.8rem;
  }

  @media (max-width: 500px) {
    width: 3rem;
    height: 3rem;
  }
`;

const Number = styled.span`
  font-size: 3rem;
  font-weight: 700;
  @media (max-width: 800px) {
    font-size: 2rem;
  }

  @media (max-width: 500px) {
    display: none;
  }
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
  @media (max-width: 800px) {
    font-size: 1.6rem;
  }

  @media (max-width: 500px) {
    font-size: 1.4rem;
  }
`;
const Content = styled.span`
  padding: 0 1rem;
  font-size: 1.4rem;

  @media (max-width: 800px) {
    display: none;
  }
`;
