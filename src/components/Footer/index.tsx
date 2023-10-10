import React, { FC, useState } from "react";

import { ContainerDark } from "./styles";

import { IconGitHubDark, IconLinkedIn, IconXDark } from "../Icons";

const Footer: FC = () => {
  const [year, _] = useState(new Date().getFullYear());

  return (
      <ContainerDark>
        <div className="centralize">
          <div className="icons">
            <a href="https://github.com/vgeruso" target="__blank">
              <IconGitHubDark/>
            </a>
            <a href="https://twitter.com/VGeruso" target="__blank">
              <IconXDark/>
            </a>
            <a href="https://www.linkedin.com/in/victor-geruso-gomes-654a8111a/" target="__blank">
              <IconLinkedIn/>
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