import React from "react";
import styled from "styled-components";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";

function Works() {
  return (
    <Wrapper>
      <AnimationOnScroll
        initiallyVisible={true}
        animateIn="animate__bounce"
        delay={10}
      >
        <SectionName>🚀 Works</SectionName>
      </AnimationOnScroll>
      <AnimationOnScroll
        initiallyVisible={true}
        animateIn="animate__fadeInUp"
        delay={300}
      >
        <Area>
          <Contents>
            <Article>
              <Title>RecSee</Title>
              <Company>퓨렌스</Company>
              <Period>18년 1월 - 18년 12월</Period>
              <Content>
                퓨렌스의 자사 녹취 솔루션으로 웹 파트를 맡았으며, 해당
                프로젝트를 기본으로 다른 사이트에 납품되는 솔루션이였습니다.
                당시 구버전 php에서 신버전 java로 한참 개발 및 수정중이던
                상황으로 해당 프로젝트를 기반으로 많은 사이트에 납품 되었습니다.
                해당 솔루션을 기반으로 추가 SI기능들을 넣거나 대표적으로 납품된
                사이트들로 신한생명, 마스타 자동차, 천재 교과서, LG U+등이
                있었습니다. 이외에 해당 솔루션 관련된 컨플런스와 지라가 동시에
                운영되어 히스토리를 보거나 확인이 가능했습니다.
              </Content>
              <GoLink href="http://www.recsee.net/" target="_blank">
                보러가기
              </GoLink>
            </Article>
            <Article>
              <Title>IPCR</Title>
              <Company>퓨렌스 & Ericsson-LG</Company>
              <Period>18년 1월 - 18년 12월</Period>
              <Content>
                녹취 솔루션 업체 Furence 재직 당시 자사 솔루션 기술과 에릭슨
                엘지와의 협업으로 이루어진 프로젝트입니다. 저장된 녹취 데이터를
                웹 페이지에서 재생 시키고 메모, 시간 등의 기록을 노출 시켜주는
                녹취 솔루션이였습니다. 기존 PHP로 작성된 버전에서 JAVA로
                변경하는 사업이였으며, 실시간 모니터링(감청) 등을 위해 C엔진과의
                소켓 통신 및 레디스 데이터 조회등의 기술을 구현하였습니다.
                글로벌 사업으로 다양한 국가에 판매되어 언어팩을 추가하는 경험을
                하였고, 특정 xml파일 교체를 통하여 자국 언어를 패치 할 수 있는
                기능을 등을 지원하였습니다.
              </Content>
              <GoLink href="https://ipecs.co.kr/" target="_blank">
                보러가기
              </GoLink>
            </Article>
            <Article>
              <Title>
                전화번호 발신지 확인 시스템
                <br />
                (사칭전화 신고 관리 서비스)
              </Title>
              <Company>상록아이엔씨 & KISA</Company>
              <Period>19년 6월 - 21년 1월</Period>
              <Content>
                한국인터넷진흥원 과제 중 하나로 SI, SM 성향의 프로젝트였습니다.
                2년간 연속 진행되었던 프로젝트로 비즈니스 로직 자동화 및 연동
                처리, 웹 취약점 수정, 서버 이관 등의 작업을 하였습니다. 해당
                프로젝트와 관련된 여러 파생 프로젝트가 있었으며, 동시에 진행이
                되었습니다. 그 중 모니터링 시스템은 시각화가 주를 이루는
                프로젝트였는데, 요구 사항중 3D 형태의 데이터 표출이 필요하여,
                Three.js를 통한 지구본 형태의 UI를 렌더링하였습니다.
              </Content>
              <GoLink href="http://www.recsee.net/" target="_blank">
                보러가기
              </GoLink>
            </Article>
            <Article>
              <Title>보안 취약점 포털 사이트 구축</Title>
              <Company>상록아이엔씨 & KISA</Company>
              <Period>21년 6월 - 21년 12월</Period>
              <Content>
                한국인터넷진흥원 21년 과제 중 하나로 취약점관련 포털
                사이트구축을 하는 프로젝트였습니다. 취약점 관련 이슈(NVD,
                보안뉴스, 공지)들을 크롤링하여 데이터를 수집하면
                ElastickSearch엔진을 통하여 빠르게 조회하여 표출해주는
                프로젝트였습니다. MongoDB, ElasticSearch간의 연동을 위해
                Monstache 연결처리를 해보는 경험을 하였습니다. 프론트부분은
                사용하기 용이한 ES6 문법을 최대한 도입하여 좀 더 효율적으로
                처리를 할 수 있도록 사용하였고, Babel을 적용하여 ES6 문법을
                사용하였지만, IE에서도 정상동작이 가능하도록 크로스 브라우징을
                지원했습니다. 해당 과업은 해킹대회 대상 프로젝트로 선정되어 좀
                더 면밀하게 웹 취약점 처리를 하였고, 준수한 성적을 거두었습니다.
              </Content>
              <GoLink href="http://www.recsee.net/" target="_blank">
                보러가기
              </GoLink>
            </Article>
            <Article>
              <Title>양산시 빅데이터 광장 고도화 및 유지보수</Title>
              <Company>상록아이엔씨 & 양산시</Company>
              <Period>22년 2월 - 22년 5월</Period>
              <Content>
                양산시 빅데이터 광장이라는 사이트의 고도화 프로젝트로 전반적인
                UI 변경 반영 및 신규 페이지와 관리 서버스, 통계 페이지등을
                작성하였습니다. 매달 서버 오류로그 및 버그성 소스코드 부분들을
                분석하여 오류부분들을 정리하여 보고하고 수정 및 개선처리를
                하였습니다.
              </Content>
              <GoLink href="http://www.recsee.net/" target="_blank">
                보러가기
              </GoLink>
            </Article>
            <Article>
              <Title>사이버 위협정보 분석공유(C-TAS) 시스템</Title>
              <Company>상록아이엔씨 & KISA</Company>
              <Period>22년 3월 - 22년 8월</Period>
              <Content>
                한국인터넷진흥원 과제 중 하나로 SI, SM 성향의 프로젝트였습니다.
                22년도 고도화 요구사항에 맞춰 반영을 위해 전반적으로 잘못된
                비즈니스 로직이나 보안적으로 취약(Mybatis injection, XSS등)한
                부분들을 수정 및 반영하는 작업을 진행하였고, 기존 jsp 동기식으로
                개발되어 있던 부분이나 페이지 로드 속도부분의 개선을 위해 리소스
                변경 및 비동기 처리 등을 작업하였습니다. tiles템플릿과 AOP적용을
                통해 공통 로그 서비스부분을 작성하고 개인 커스텀 메뉴등을
                개발하였습니다.
              </Content>
              <GoLink href="http://www.recsee.net/" target="_blank">
                보러가기
              </GoLink>
            </Article>
          </Contents>
        </Area>
      </AnimationOnScroll>
    </Wrapper>
  );
}

export default Works;

const Wrapper = styled.section`
  padding: 2rem 10rem;
`;

const SectionName = styled.div`
  font-size: 7.2rem;
  font-weight: 700;
`;

const Area = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 10rem;
`;

const Contents = styled.ul`
  width: 50%;
`;

const Article = styled.li`
  margin: 3rem;
  outline: 1px solid blue;
`;

const Title = styled.div`
  font-size: 4.8rem;
  font-weight: 700;
`;
const Company = styled.div`
  font-size: 2.8rem;
  font-weight: 400;
`;
const Period = styled.div`
  font-size: 2.2rem;
  font-weight: 400;
  color: #636e72;
`;
const Content = styled.span`
  display: block;
  margin: 1rem 0;
  font-size: 1.6rem;
  color: #656270;
`;

const GoLink = styled.a`
  font-style: italic;
  font-size: 2rem;
  text-decoration: underline;
`;
