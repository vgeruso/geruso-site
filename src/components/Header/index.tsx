import React, { FC } from "react";

import {
  ContainerDark,
  LinkDark, 
} from "./styles";

import logo from "../../images/Logo.svg";
import gitHub from "../../images/gh.svg";

const Header: FC = () => {
  return (
    <header>
        <ContainerDark>
          {/* <LogoDark/> */}
          <img src={logo} alt="logo"/>
          <LinkDark href="https://github.com/vgeruso" target="__blank">
            <img src={gitHub} alt="gitHub"/>
          </LinkDark>
        </ContainerDark>
    </header>
  );
}

export default Header;