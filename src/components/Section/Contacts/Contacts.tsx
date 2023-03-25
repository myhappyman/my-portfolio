import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";
import { DocumentData } from "firebase/firestore";
import { firestore } from "../../../firebase-config";
import {
  GArea,
  GInner,
  GWrapper,
  SectionHeader,
} from "../../../GlobalComponents";
import ContactBg from "./ContactBg";

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
      <GInner>
        <SectionHeader text="👓 Contacts" />
        <AnimationOnScroll
          initiallyVisible={false}
          animateIn="animate__fadeInUp"
          delay={300}
        >
          <ContactBg />
          <Area>
            {Contacts_List &&
              Contacts_List.map((contact) => (
                <Items key={contact.id}>
                  <GoLink href={contact.data.link} target="_blank">
                    <Top>
                      <Name>{contact.data.name}</Name>
                      <Comments>{contact.data.comments}</Comments>
                    </Top>
                    <Bottom>
                      <ImgBox>
                        {contact.data.image &&
                          contact.data.image.map(
                            (imgUrl: string, idx: number) => (
                              <img
                                key={`img${idx}${contact.id}`}
                                src={imgUrl}
                                alt={contact.data.name}
                              />
                            )
                          )}
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

const Area = styled(GArea.withComponent("ul"))`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 6rem;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const Items = styled.li`
  width: 33%;
  height: 100%;
  border-radius: 2rem;
  transition: all 0.3s;
  background-color: #fff;
  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: brightness(1.1) blur(40px);

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${(props) => props.theme.boxShadowHover};
  }

  @media (max-width: 900px) {
    width: 90%;
    margin-bottom: 3rem;
  }
`;

const GoLink = styled.a``;
const Top = styled.div`
  position: relative;
`;
const Name = styled.div`
  padding: 1rem 1.8rem;
  border-radius: 2rem 2rem 0 0;
  font-size: 4.6rem;
  font-weight: 600;
`;
const Comments = styled.div`
  padding: 1.8rem;
  height: 20rem;
  font-size: 1.6rem;
`;
const Bottom = styled.div`
  padding: 0 3rem 3rem 3rem;
`;
const ImgBox = styled.div`
  display: block;
  position: relative;
  height: 26rem;

  &::after {
    content: "";
    display: block;
    clear: both;
  }
  img {
    position: absolute;
    width: 75%;
    border: 1px solid ${(props) => props.theme.btnTxtColor};
    border-radius: 0.8rem;
  }
  img:nth-child(1) {
    top: 0;
    left: 0;
  }
  img:nth-child(2) {
    bottom: 0;
    right: 0;
  }
`;
