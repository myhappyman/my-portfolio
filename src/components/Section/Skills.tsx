import React from "react";
import styled from "styled-components";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";
import { ReactComponent as html5 } from "../../assets/imgs/svgIcon/html5.svg";
import { ReactComponent as css3 } from "../../assets/imgs/svgIcon/css3.svg";
import { ReactComponent as javascript } from "../../assets/imgs/svgIcon/javascript.svg";
import { ReactComponent as jquery } from "../../assets/imgs/svgIcon/jquery.svg";
import { ReactComponent as rdb } from "../../assets/imgs/svgIcon/amazondynamodb.svg";

const skills = [
  {
    name: "HTML5",
    icon: html5,
    iconColor: "#E34F26",
    content: "마크업을 통해 웹 페이지를 작성할 수 있습니다.",
  },
  {
    name: "CSS3",
    icon: css3,
    iconColor: "#1572B6",
    content: "마크업을 꾸미고 애니메이트 활용을 할 수 있습니다.",
  },
  {
    name: "Javascript",
    icon: javascript,
    iconColor: "#F7DF1E",
    content:
      "바닐라 스크립트를 통해 마크업에 이벤트를 부여하고 동적인 페이지나 기능을 처리 할 수 있습니다.",
  },
  {
    name: "jQuery",
    icon: jquery,
    iconColor: "#0769AD",
    content: "jQuery",
  },
  {
    name: "JAVA",
    icon: html5,
    iconColor: "#e74c3c",
    content:
      "스프링 프레임워크 환경에서 백엔드 서버 개발을 구축을 하면서 api기능이나, 서버의 보안, 스케줄러 작성 등 프로세스 작성해보았습니다.",
  },
  {
    name: "RDB",
    icon: rdb,
    iconColor: "#4053D6",
    content:
      "Oracle, Mysql, Mssql, MariaDb, Postgresql등 다양한 rdb를 활용하여 쿼리를 작성하고 crud작업을 진행하였습니다.",
  },
];

function zeroTen(num: number): string {
  return num < 10 ? `0${num}` : num + "";
}

function Skills() {
  return (
    <Wrapper>
      <Inner>
        <AnimationOnScroll animateIn="animate__bounceInUp">
          <Title>🪐 Skills</Title>
        </AnimationOnScroll>
        <AnimationOnScroll
          initiallyVisible={true}
          animateIn="animate__fadeInUp"
          delay={300}
        >
          <Area>
            <Contents>
              {skills &&
                skills.map((skill, idx) => (
                  <Item key={`skill${idx}`}>
                    <Number>{zeroTen(idx + 1)} /</Number>
                    <Div>
                      <skill.icon
                        width={40}
                        height={40}
                        fill={skill.iconColor}
                      />
                      <FlexColumn>
                        <Name>{skill.name}</Name>
                        <Content>{skill.content}</Content>
                      </FlexColumn>
                    </Div>
                  </Item>
                ))}
            </Contents>
          </Area>
        </AnimationOnScroll>
      </Inner>
    </Wrapper>
  );
}

export default Skills;

const Wrapper = styled.section`
  padding: 2rem 10rem;
  height: 100vh;
`;

const Inner = styled.div`
  max-width: 1680px;
  margin: 0 auto;
`;

const Title = styled.div`
  font-size: 7.2rem;
  font-weight: 700;
`;

const Area = styled.div`
  padding: 10rem;
`;

const Contents = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8rem 1rem;
`;

const Item = styled.li``;

const Icon = styled.svg``;
const Number = styled.span`
  font-size: 3rem;
  font-weight: 700;
`;
const Div = styled.div`
  display: flex;
`;

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;
const Name = styled.span`
  font-size: 1.8rem;
  font-weight: 500;
`;
const Content = styled.span`
  font-size: 1.4rem;
  padding-right: 1.5rem;
`;
