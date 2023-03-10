import { AnimationOnScroll } from "react-animation-on-scroll";
import styled from "styled-components";
import { BiLinkExternal } from "react-icons/bi";
import img_shinflix from "../../assets/imgs/projects/shinflix.png";
import img_SINNISFREE from "../../assets/imgs/projects/SINNISFREE.png";
import img_sevenTwo from "../../assets/imgs/projects/sevenTwo.png";
import img_portfolio from "../../assets/imgs/projects/portfolio.png";

const PROJECT_LIST = [
  {
    name: "shinflix",
    comments:
      "대형 스트리밍 플랫폼인 넷플릭스! 그동안 학습해온 React의 기술들을 활용하여 클론 코딩을 작성해보았습니다.",
    useSkill: [
      "React",
      "TypeScript",
      "styled-component",
      "react-query",
      "framer-motion",
      "react-hook-form",
      "react-icons",
      "react-router-dom",
      "recoil",
    ],
    link: "https://myhappyman.github.io/shinflix/",
    img: img_shinflix,
  },
  {
    name: "SINNISFREE",
    comments:
      "아모레 퍼시픽사의 이니스프리 홈페이지를 클론 코딩해보았습니다. 제품에 대한 데이터를 넣어보고, 다양한 슬라이더들을 구현해보았습니다.",
    useSkill: [
      "React",
      "TypeScript",
      "styled-component",
      "framer-motion",
      "react-hook-form",
      "react-icons",
      "react-router-dom",
      "recoil",
    ],
    link: "https://myhappyman.github.io/SINNISFREE/",
    img: img_SINNISFREE,
  },
  {
    name: "72닷컴",
    comments:
      "온라인/오프라인 등 다양한 디자인을 진행하는 회사로, 메인페이지의 화려한 3D 애니메이션을 적용해보기 위해 클론 코딩을 진행하게 된 프로젝트입니다.",
    useSkill: [
      "React",
      "TypeScript",
      "styled-component",
      "framer-motion",
      "react-icons",
      "recoil",
    ],
    link: "https://myhappyman.github.io/seven_two/",
    img: img_sevenTwo,
  },
  {
    name: "Portfolio",
    comments:
      "보고 계신 페이지로 프론트엔드 개발자의 저의 개발방향과 그동안의 경력, 개발자로 공부해온 방향성들을 노출하기 위해 작성되었습니다.",
    useSkill: [
      "React",
      "TypeScript",
      "styled-component",
      "framer-motion",
      "react-icons",
      "react-router-dom",
      "recoil",
    ],
    link: "https://myhappyman.github.io/my-portfolio/",
    img: img_portfolio,
  },
];

function Projects() {
  return (
    <Wrapper>
      <AnimationOnScroll
        initiallyVisible={true}
        animateIn="animate__bounce"
        delay={10}
      >
        <SectionName>🚀 Projects</SectionName>
      </AnimationOnScroll>

      <Area>
        <Contents>
          {PROJECT_LIST &&
            PROJECT_LIST.map((project, idx) => (
              <Card key={`${"project" + idx}`}>
                <Top>
                  <Head>
                    <Name>{project.name}</Name>
                    <Icon href={project.link} target="_blank">
                      <BiLinkExternal size="20" />
                    </Icon>
                  </Head>
                  <TextBox>
                    <Comments>{project.comments}</Comments>
                    <HashTag>
                      {project.useSkill.map((skill) => "#" + skill)}
                    </HashTag>
                  </TextBox>
                </Top>
                <Bottom>
                  <img src={project.img} alt={project.name} />
                </Bottom>
              </Card>
            ))}
        </Contents>
      </Area>
    </Wrapper>
  );
}

export default Projects;

const Wrapper = styled.section`
  padding: 1rem;
  margin-bottom: 10rem;
`;

const SectionName = styled.div`
  padding: 0 9rem;
  font-size: 7.2rem;
  font-weight: 700;
`;

const Area = styled.div`
  width: 100%;
  padding: 10rem 0;
`;

const Contents = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Card = styled.li`
  width: calc(100% / 4 - 4rem);
  margin-right: 4rem;
  border-radius: 2rem;
  box-shadow: 0px 7px 15px 0 rgb(0 0 0 / 15%);
  transition: all 0.3s;

  &:last-child {
    margin: 0;
  }
  &:hover {
    transform: translateY(-5px);
    box-shadow: 5px 5px 20px rgb(0 0 0 / 20%);
  }
`;

const Top = styled.div`
  position: relative;
  height: 45%;
  padding: 1rem;
`;
const Head = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
`;
const Name = styled.span`
  padding: 0.4rem;
  font-size: 1.4rem;
  border-radius: 1rem;
  background: ${(props) => props.theme.bgGradientStartColor};
  color: ${(props) => props.theme.bgColor};
`;
const Icon = styled.a`
  width: 2rem;
  height: 2rem;
  svg {
    color: ${(props) => props.theme.bgGradientStartColor};
  }
`;
const TextBox = styled.div`
  padding: 1rem;
`;
const Comments = styled.span`
  font-size: 1.6rem;
  font-weight: 700;
`;
const HashTag = styled.div`
  margin-top: 2rem;
  color: #bdc3c7;
  overflow-y: hidden;
  word-wrap: break-word;
`;

const Bottom = styled.div`
  /* width: 100%;
  height: 100%; */
  overflow: hidden;
  border-radius: 0 0 2rem 2rem;

  img {
    display: block;
    width: 100%;
    height: auto;
    border-radius: 0 0 2rem 2rem;
    object-fit: cover;
  }
`;
