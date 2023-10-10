import React, { FC, useState } from "react";

import {
  ContainerDark, 
  ContainerLight,
  LinkDark, 
  LinkLight
} from "./styles";

import { LogoDark, LogoLight } from "../Logo";
import { 
  IconGitHubDark,
  IconGitHubLight,
  IconThemeDark,
  IconThemeLight
} from "../Icons";

const Header: FC = () => {
  const [theme, setTheme] = useState('dark');
  
  const handleTheme = (theme: string) => {
    setTheme(theme);
  }

  return (
    <header>
      {theme === 'light' ? (
        <ContainerLight>
          <LogoLight/>
          <LinkLight onClick={() => handleTheme('dark')}>
            <IconThemeLight/>
          </LinkLight>
          <LinkLight href="https://github.com/vgeruso" target="__blank">
            <IconGitHubLight/>
          </LinkLight>
        </ContainerLight>
      ) : (
        <ContainerDark>
          <LogoDark/>
          <LinkDark onClick={() => handleTheme('light')}>
            <IconThemeDark/>
          </LinkDark>
          <LinkDark href="https://github.com/vgeruso" target="__blank">
            <IconGitHubDark/>
          </LinkDark>
        </ContainerDark>
      )}
    </header>
  );
}

export default Header;