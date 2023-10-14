import React, { FC, useState } from "react";

import { ContainerDark } from "./styles";

import GitHub from '../../assets/gh.svg';
import X from '../../assets/x.svg';
import LinkedIn from '../../assets/linkedin.svg';

const Footer: FC = () => {
  const [year, _] = useState(new Date().getFullYear());

  return (
      <ContainerDark>
        <div className="centralize">
          <div className="icons">
            <a href="https://github.com/vgeruso" target="__blank">
              <GitHub/>
            </a>
            <a href="https://twitter.com/VGeruso" target="__blank">
              <X/>
            </a>
            <a href="https://www.linkedin.com/in/victor-geruso-gomes-654a8111a/" target="__blank">
              <LinkedIn />
            </a>
          </div>
          <p className="justify">
            <a href="mailto:victor.geruso@gmail.com">victor.gerus@gmail.com</a>
          </p>
          <span className="justify">Created by Victor Geruso - {year}</span>
        </div>
      </ContainerDark>
  );
}

export default Footer;