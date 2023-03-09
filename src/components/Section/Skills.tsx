import React from "react";
import styled from "styled-components";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";
import { ReactComponent as html5 } from "../../assets/imgs/svgIcon/html5.svg";
import { ReactComponent as css3 } from "../../assets/imgs/svgIcon/css3.svg";
import { ReactComponent as javascript } from "../../assets/imgs/svgIcon/javascript.svg";
import { ReactComponent as react } from "../../assets/imgs/svgIcon/react.svg";
import { ReactComponent as typescript } from "../../assets/imgs/svgIcon/typescript.svg";
import { ReactComponent as jquery } from "../../assets/imgs/svgIcon/jquery.svg";
import { ReactComponent as java } from "../../assets/imgs/svgIcon/java.svg";
import { ReactComponent as rdb } from "../../assets/imgs/svgIcon/amazondynamodb.svg";
import { ReactComponent as apachetomcat } from "../../assets/imgs/svgIcon/apachetomcat.svg";
import { ReactComponent as git } from "../../assets/imgs/svgIcon/git.svg";
import { ReactComponent as docker } from "../../assets/imgs/svgIcon/docker.svg";

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
      "바닐라 스크립트를 통해 이벤트를 부여하거나 동적인 행동의 기능 등을 처리 할 수 있습니다.",
  },
  {
    name: "React",
    icon: react,
    iconColor: "#61DAFB",
    content:
      "프론트엔드 개발자로 전향과 집중을 위해 노마드코더 수업과 책을 학습하면서 기본적인 state의 개념과 유용한 라이브러리들인 styled, framer-motion, react-hook-form, router-dom, recoil, react-query 등을 학습해보고 실제로 적용해보는 미니 프로젝트등을 경험했습니다.",
  },
  {
    name: "Typescript",
    icon: typescript,
    iconColor: "#3178C6",
    content:
      "Typescript버전의 React를 작성하고 함수, 객체를 정의하고 javascript의 자유성을 배제시키면서 최대한 안전한 코드를 작성하는 습관을 들이기위해 프로젝트에 적용과 학습을 진행했습니다.",
  },
  {
    name: "jQuery",
    icon: jquery,
    iconColor: "#0769AD",
    content:
      "jQuery를 통해 페이지의 동적인 이벤트 처리와 활용 가능한 라이브러리 등을 자유롭게 사용할 수 있으며, 경력 기간동안 스크립트 관련 제어의 대부분은 jQuery를 통해 처리를 진행해본 경험이 있습니다.",
  },
  {
    name: "JAVA",
    icon: java,
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
  {
    name: "Apache Tomcat",
    icon: apachetomcat,
    iconColor: "#F8DC75",
    content:
      "가장 대중적으로 사용해왔던 was서버로 웹 어플리케이션의 개발이 끝나고 서버의 환경설정 https세팅, 서비스 등록 등의 작업을 tomcat서버를 통해 구성하고 실서버를 동작시켰습니다.",
  },
  {
    name: "Git",
    icon: git,
    iconColor: "#F05032",
    content:
      "프로젝트 형상관리 및 팀원과의 협업을 위해 branch를 나누고 프로젝트 merge 작업을 진행하거나, 과거 버전으로 revert 작업등을 수행해보았습니다. github를 통해 개인 소소한 프로젝트 등도 commit처리 하는 습관을 들이도록 노력 중입니다.(잔디심기)",
  },
  {
    name: "Docker",
    icon: docker,
    iconColor: "#2496ED",
    content:
      "프로젝트에 필요한 환경구성을 손쉽게 구성하여 테스트서버를 구축하고 수많은 테스트를 진행해보거나, 모의 테스트 구성을 하는 등 다양한 형태로 구성을 해보는 경험을 했습니다.",
  },
];

function zeroTen(num: number): string {
  return num < 10 ? `0${num}` : num + "";
}

function Skills() {
  return (
    <Wrapper>
      <Inner>
        <AnimationOnScroll
          initiallyVisible={true}
          animateIn="animate__bounce"
          delay={10}
        >
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
                      <Icon>
                        <skill.icon
                          width={40}
                          height={40}
                          fill={skill.iconColor}
                        />
                      </Icon>
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

const Item = styled.li`
  padding: 1rem;
  outline: none;
  transform: all 3s;
  &:hover {
    outline: 1px solid orange;
    transform: all 3s;
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
  width: calc(100% - 9.7rem);
  display: flex;
  flex-direction: column;
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
