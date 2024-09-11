import React, { FC, useEffect, useState } from "react";

import { ContainerDark } from "./styles";

import GitHub from '../../assets/gh.svg';
import BlueSky from '../../assets/bsky.svg';
import LinkedIn from '../../assets/linkedin.svg';
import { useYear } from "../../hooks/useYear";
import { graphql, useStaticQuery } from "gatsby";

const Footer: FC = () => {
  const data = useStaticQuery(graphql`
    query GithubSiteVersion {
      github {
        repository(name: "geruso-site", owner: "vgeruso") {
          releases(last: 1) {
            edges {
              node {
                id
                tag {
                  name
                }
              }
            }
          }
        }
      }
    }
  `);
  const { year } = useYear();

  const [version, setVersion] = useState<string>('');

  useEffect(() => {
    setVersion(data.github.repository.releases.edges[0].node.tag.name);
  }, []);

  return (
      <ContainerDark>
        <div className="centralize">
          <div className="icons">
            <a href="https://github.com/vgeruso" target="__blank">
              <GitHub/>
            </a>
            <a href="https://bsky.app/profile/geruso.com" target="__blank">
              <BlueSky/>
            </a>
            <a href="https://www.linkedin.com/in/victor-geruso-gomes-654a8111a/" target="__blank">
              <LinkedIn />
            </a>
          </div>
          <p className="justify">
            <a href="mailto:victor.geruso@gmail.com">victor.gerus@gmail.com</a>
          </p>
          <span className="justify">Created by Victor Geruso - {year} - v{version}</span>
        </div>
      </ContainerDark>
  );
}

export default Footer;