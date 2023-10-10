import React, { FC } from "react";
import type { HeadFC, PageProps } from "gatsby";

import { LogoDark } from "../components/Logo";

import { GlobalStyle } from "../styles/GlobalStyles";

const IndexPage: FC<PageProps> = () => {
  return (
    <>
      <GlobalStyle/>
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#2a2c37', minHeight: '100vh'}}>
        <div style={{justifyItems: 'center'}}>
          <LogoDark />
          <h4 style={{display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#ffffff'}}>Coming Soon...</h4>
        </div>
      </div>
    </>
  )
}

export default IndexPage;

export const Head: HeadFC = () => <title>Geruso</title>
