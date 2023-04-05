import styled from "styled-components";
import { BiLinkExternal } from "react-icons/bi";
import { useEffect, useState } from "react";
import { GInner, GWrapper, SectionHeader } from "../../GlobalComponents";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useWindowSize } from "../../utils";
import { IDocumentData, getStoreToData } from "../../getFireStoreData";

function Projects() {
  const windowSize = useWindowSize();
  const [slidePerView, setSliderPerView] = useState(5);
  const [spaceBetween, setSpaceBetween] = useState(50);
  const [projects, setProjects] = useState<IDocumentData[]>([]);
  useEffect(() => {
    getStoreToData("Projects", "order").then((datas) => setProjects(datas));
  }, []);

  useEffect(() => {
    const { width } = windowSize;
    let sliderPerView = 2;
    let spaceBetween = 30;
    if (width > 1200) {
      sliderPerView = 5;
      spaceBetween = 50;
    } else if (width > 800) {
      sliderPerView = 4;
      spaceBetween = 40;
    } else if (width > 500) {
      sliderPerView = 3;
      spaceBetween = 30;
    }
    setSliderPerView(sliderPerView);
    setSpaceBetween(spaceBetween);
  }, [windowSize]);

  return (
    <Wrapper>
      <GInner>
        <Area>
          <SectionHeader text="🚀 Projects" />
          <SwiperWrap
            slidesPerView={slidePerView}
            spaceBetween={spaceBetween}
            grabCursor={true}
            loop={true}
            loopedSlides={3}
            className="swiper-container project_swiper"
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
      </GInner>
    </Wrapper>
  );
}

export default Projects;

const Wrapper = styled(GWrapper)`
  overflow: hidden;

  @media (max-width: 500px) {
    padding: 3rem 0 0;
    margin-bottom: -2rem;
  }
`;

const Area = styled.div`
  .project_swiper {
    width: 150%;
    padding: 2rem;
    margin-left: -2rem;
  }

  @media (max-width: 500px) {
    /* .project_swiper {
      width: 180%;
    } */
  }
`;

const SwiperWrap = styled(Swiper)`
  margin: -2rem 0 -2rem -2rem;
  padding: 2rem 0 2rem 2rem;

  @media (max-width: 1200px) {
    margin: 4rem 0 0 8rem;
  }
`;

const Slide = styled(SwiperSlide)`
  /* width: calc(100% / 3.5 - 4rem); */
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

  @media (max-width: 500px) {
    font-size: 1.6rem;
  }
`;
const Icon = styled.span`
  width: 2rem;
  height: 2rem;
  svg {
    margin-top: 0.6rem;
    color: ${(props) => props.theme.bgGradientStartColor};
  }

  @media (max-width: 500px) {
    svg {
      width: 18px;
      height: 18px;
    }
  }
`;
const TextBox = styled.div`
  padding: 1rem;

  @media (max-width: 380px) {
    padding: 0 1rem 2rem 1rem;
  }
`;
const Comments = styled.span`
  font-size: 1.6rem;
  font-weight: 700;

  @media (max-width: 500px) {
    font-size: 1.4rem;
  }

  @media (max-width: 380px) {
    font-size: 1.2rem;
  }
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

  @media (max-width: 500px) {
    bottom: 0;
    font-size: 1rem;
  }
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
