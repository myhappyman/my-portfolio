import { collection, getDocs } from "firebase/firestore";
import React, { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import styled, { ThemeProvider } from "styled-components";
import { themeMode, themeSelectIsOpen } from "./atom";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Contacts from "./components/Section/Contacts";
import FirstSection from "./components/Section/FirstSection";
import Introduce from "./components/Section/Introduce";
import Projects from "./components/Section/Projects";
import SecondSection from "./components/Section/SecondSection";
import Skills from "./components/Section/Skills";
import Works from "./components/Section/Works";
import { db } from "./firebase-config";

import GlobalStyle from "./GlobalStyle";
import { marsTheme, moonTheme } from "./theme";

function App() {
  const selectTheme = useRecoilValue(themeMode);
  const [isOpen, setIsOpen] = useRecoilState(themeSelectIsOpen); // 바디 클릭하면 테마모드 셀렉터 닫히도록
  const toggleThemeSelectIsOpen = () => (isOpen ? setIsOpen(false) : null);

  // console.log(getReadDoc("contacts", "blog"));

  const usersCollectionRef = collection(db, "users");
  // 시작될때 한번만 실행
  useEffect(() => {
    // 비동기로 데이터 받을준비
    const getUsers = async () => {
      // getDocs로 컬렉션안에 데이터 가져오기
      const data = await getDocs(usersCollectionRef);
      console.log(data);
    };

    getUsers();
  }, []);

  return (
    <ThemeProvider theme={selectTheme === "mars" ? marsTheme : moonTheme}>
      <GlobalStyle />
      <Wrapper onClick={toggleThemeSelectIsOpen}>
        <Main />
        <Introduce />
        <Works />
        <Projects />
        <Skills />
        <Contacts />
        <FirstSection />
        <SecondSection />
        <Footer />
        {/* <OptionBtn /> */}
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;

const Wrapper = styled.div``;
