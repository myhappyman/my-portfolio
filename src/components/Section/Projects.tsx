import styled from "styled-components";
import { BiLinkExternal } from "react-icons/bi";
import { useEffect, useState } from "react";
import { firestore } from "../../firebase-config";
import { DocumentData } from "firebase/firestore";
import { GWrapper, SectionHeader } from "../../GlobalComponents";

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
        <Contents>
          {projects &&
            projects.map((project, idx) => (
              <Card key={project.id}>
                <Top>
                  <Head>
                    <Name>{project.data.name}</Name>
                    <Icon href={project.data.link} target="_blank">
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
              </Card>
            ))}
        </Contents>
      </Area>
    </GWrapper>
  );
}

export default Projects;

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
