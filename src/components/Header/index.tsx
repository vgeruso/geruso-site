import React, { FC } from "react";

import {
  ContainerDark,
  LinkDark, 
} from "./styles";

import Logo from "../../assets/Logo.svg";
import GitHub from "../../assets/gh.svg";

const Header: FC = () => {
  return (
    <header>
        <ContainerDark>
          <Logo/>
          <LinkDark href="https://github.com/vgeruso" target="__blank">
            <GitHub/>
          </LinkDark>
        </ContainerDark>
    </header>
  );
}

export default Header;