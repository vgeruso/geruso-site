import React, { FC } from "react";
import type { HeadFC, PageProps } from "gatsby";

import Header from "../components/Header";
import Footer from "../components/Footer";

import { GlobalStyle } from "../styles/GlobalStyles";
import { MainContainer } from "../styles/HomeStyles";
import CardInfo from "../components/CardInfo";
import CardPosts from "../components/CardPosts";

const IndexPage: FC<PageProps> = () => {
  return (
    <>
      <GlobalStyle/>
      <div>
        <Header/>
        <MainContainer>
          <CardInfo/>
          <CardPosts/>
        </MainContainer>
        <Footer/>
      </div>
    </>
  )
}

export default IndexPage;

export const Head: HeadFC = () => {
 return (
  <>
    <title>Geruso</title>
  </>
 );
}
