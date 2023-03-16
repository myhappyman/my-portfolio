import styled from "styled-components";
import { BiLinkExternal } from "react-icons/bi";
import { useEffect, useState } from "react";
import { firestore } from "../../firebase-config";
import { DocumentData } from "firebase/firestore";
import { GWrapper, GInner, SectionHeader } from "../../GlobalComponents";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import "swiper/css";

interface IProject {
  data: DocumentData;
  id: string;
}
function Projects() {
  const [projects, setProjects] = useState<IProject[]>([]);
  useEffect(() => {
    const array: IProject[] = [];
    const collection = firestore.collection("Projects");
    collection
      .orderBy("order")
      .get()
      .then((docs) => {
        docs.forEach((doc) => {
          if (doc.exists) {
            array.push({ data: doc.data(), id: doc.id });
          }
        });
        setProjects(array);
      });
  }, []);
  return (
    <GWrapper>
      <SectionHeader text="🚀 Projects" />
      <Area>
        <SwiperWrap
          slidesPerView={3.5}
          spaceBetween={50}
          grabCursor={true}
          loop={true}
          loopedSlides={3}
        >
          {projects &&
            projects.map((project) => (
              <Slide key={project.id}>
                <GoLink href={project.data.link} target="_blank">
                  <Top>
                    <Head>
                      <Name>{project.data.name}</Name>
                      <Icon>
                        <BiLinkExternal className="icon" size="24" />
                      </Icon>
                    </Head>
                    <TextBox>
                      <Comments>{project.data.comments}</Comments>
                      <HashTag>
                        {project.data.useSkill &&
                          project.data.useSkill.map(
                            (skill: string) => "#" + skill
                          )}
                      </HashTag>
                    </TextBox>
                  </Top>
                  <Bottom>
                    <img src={project.data.image} alt={project.data.name} />
                  </Bottom>
                </GoLink>
              </Slide>
            ))}
          {/* 같은 프로젝트 내용 추가해줘야 무한루프처럼 동작해서 같은내용 추가함   */}
          {projects &&
            projects.map((project) => (
              <Slide key={project.id}>
                <GoLink href={project.data.link} target="_blank">
                  <Top>
                    <Head>
                      <Name>{project.data.name}</Name>
                      <Icon>
                        <BiLinkExternal size="20" />
                      </Icon>
                    </Head>
                    <TextBox>
                      <Comments>{project.data.comments}</Comments>
                      <HashTag>
                        {project.data.useSkill &&
                          project.data.useSkill.map(
                            (skill: string) => "#" + skill
                          )}
                      </HashTag>
                    </TextBox>
                  </Top>
                  <Bottom>
                    <img src={project.data.image} alt={project.data.name} />
                  </Bottom>
                </GoLink>
              </Slide>
            ))}
        </SwiperWrap>
      </Area>
    </GWrapper>
  );
}

export default Projects;

const Area = styled.div`
  width: 100%;
`;

const SwiperWrap = styled(Swiper)`
  margin: 6rem 0 0 19rem;
  padding: 2rem 0 2rem 2rem;
`;
const Slide = styled(SwiperSlide)`
  width: calc(100% / 3.5 - 4rem) !important;
  border-radius: 2rem;
  box-shadow: ${(props) => props.theme.boxShadow};
  transition: all 0.3s;

  &:last-child {
    margin: 0;
  }
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${(props) => props.theme.boxShadowHover};
  }
`;
const GoLink = styled.a`
  cursor: pointer;
`;

const Top = styled.div`
  position: relative;
  min-height: 22rem;
  border-radius: 2rem 2rem 0 0;
  padding: 1rem;
  background-color: #fff;
  color: #000;
`;
const Head = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 1.2rem 1rem 1rem;
`;
const Name = styled.span`
  padding: 0.5rem 1.4rem;
  font-size: 1.8rem;
  font-weight: 500;
  border-radius: 1.8rem;
  background: ${(props) => props.theme.bgGradientStartColor};
  color: #fff;
`;
const Icon = styled.span`
  width: 2rem;
  height: 2rem;
  svg {
    margin-top: 0.6rem;
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
  position: absolute;
  width: calc(100% - 3.8rem);
  bottom: 1rem;
  left: 1.8rem;
  margin-top: 2rem;
  font-size: 1.2rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #bdc3c7;
`;

const Bottom = styled.div`
  max-height: 45rem;
  overflow: hidden;
  border-radius: 0 0 2rem 2rem;

  img {
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 0 0 2rem 2rem;
    object-fit: cover;
  }
`;
