import React, { FC } from "react";
import type { HeadFC, PageProps } from "gatsby";

import Header from "../components/Header";
import Footer from "../components/Footer";

import { GlobalStyle } from "../styles/GlobalStyles";
import { MainContainer } from "../styles/HomeStyles";
import CardInfo from "../components/CardInfo";
import CardPosts from "../components/CardPosts";
import CardContributions from "../components/CardContributions";
import { useYear } from "../hooks/useYear";

const IndexPage: FC<PageProps> = () => { 
  return (
    <>
      <GlobalStyle/>
      <div>
        <Header/>
        <MainContainer>
          <CardInfo/>
          <CardPosts/>
          {/* <CardContributions/> */}
        </MainContainer>
        <Footer/>
      </div>
    </>
  )
}

export default IndexPage;

export const Head: HeadFC = () => {
  const { year } = useYear();
 
  return (
  <>
    <title>Geruso | {year}</title>
    <link rel="icon" type="image/x-icon" href="../../icon.ico" />
  </>
 );
}
