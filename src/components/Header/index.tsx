import React, { FC, useState } from "react";

import {
  ContainerDark, 
  ContainerLight, 
  ButtonThemeDark, 
  ButtonThemeLight, 
  LinkDark, 
  LinkLight
} from "./styles";

import { LogoDark, LogoLight } from "../Logo/Logo";

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
          <ButtonThemeLight onClick={() => handleTheme('dark')}>theme</ButtonThemeLight>
          <LinkLight href="https://github.com/vgeruso" target="__blank">github</LinkLight>
        </ContainerLight>
      ) : (
        <ContainerDark>
          <LogoDark/>
          <ButtonThemeDark onClick={() => handleTheme('light')}>theme</ButtonThemeDark>
          <LinkDark href="https://github.com/vgeruso" target="__blank">github</LinkDark>
        </ContainerDark>
      )}
    </header>
  );
}

export default Header;