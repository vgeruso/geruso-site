import React, { FC } from "react";
import type { HeadFC, PageProps } from "gatsby";

import Header from "../components/Header";
import Footer from "../components/Footer";

import { GlobalStyle } from "../styles/GlobalStyles";

const IndexPage: FC<PageProps> = () => {
  return (
    <>
      <GlobalStyle/>
      <main>
        <Header/>
        <h1>Geruso.com</h1>
        <Footer/>
      </main>
    </>
  )
}

export default IndexPage;

export const Head: HeadFC = () => <title>Geruso</title>
