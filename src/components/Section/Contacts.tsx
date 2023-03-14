import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";
import { DocumentData } from "firebase/firestore";
import { firestore } from "../../firebase-config";
import { GInner, GWrapper, SectionHeader } from "../../GlobalComponents";

interface IContacts {
  data: DocumentData;
  id: string;
}

function Contacts() {
  const [Contacts_List, setContacts_List] = useState<IContacts[]>([]);
  useEffect(() => {
    const array: IContacts[] = [];
    const collection = firestore.collection("contacts");
    collection.get().then((docs) => {
      docs.forEach((doc) => {
        if (doc.exists) {
          array.push({ data: doc.data(), id: doc.id });
        }
      });
      setContacts_List(array);
    });
  }, []);
  return (
    <Wrapper>
      <SectionHeader text="👓 Contacts" />
      <GInner>
        <AnimationOnScroll
          initiallyVisible={true}
          animateIn="animate__fadeInUp"
          delay={300}
        >
          <Area>
            {Contacts_List &&
              Contacts_List.map((contact, idx) => (
                <Items key={contact.id}>
                  <GoLink href={contact.data.link} target="_blank">
                    <Top>
                      <Name>{contact.data.name}</Name>
                      <Comments>{contact.data.comments}</Comments>
                    </Top>
                    <Bottom>
                      <ImgBox>
                        <img src={contact.data.image} alt={contact.data.name} />
                      </ImgBox>
                    </Bottom>
                  </GoLink>
                </Items>
              ))}
          </Area>
        </AnimationOnScroll>
      </GInner>
    </Wrapper>
  );
}

export default Contacts;

const Wrapper = styled(GWrapper)`
  margin-bottom: 15rem;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: -15rem;
    width: 100%;
    height: 180px;
    background: linear-gradient(
      to bottom,
      ${(props) => props.theme.bgColor},
      ${(props) => props.theme.bgGradientStartColor}
    );
    z-index: 1000;
  }
`;

const Area = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 5rem;
  padding: 0 10rem;
`;
const Items = styled.li`
  width: 33%;
  border-radius: 2rem;
  box-shadow: 0px 7px 15px 0 rgb(0 0 0 / 15%);
  transition: all 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 5px 5px 20px rgb(0 0 0 / 20%);
  }
`;
const GoLink = styled.a``;
const Top = styled.div`
  position: relative;
  height: 45%;
`;
const Name = styled.div`
  padding: 1rem 1.8rem;
  border-radius: 2rem 2rem 0 0;
  font-size: 4.6rem;
  font-weight: 600;
  background-color: ${(props) => props.theme.textColor};
  color: ${(props) => props.theme.bgColor};
`;
const Comments = styled.div`
  padding: 1.8rem;
  height: 20rem;
  font-size: 1.6rem;
`;
const Bottom = styled.div``;
const ImgBox = styled.div`
  img {
    display: block;
    width: 100%;
    border-radius: 0 0 2rem 2rem;
  }
`;
