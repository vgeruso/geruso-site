import React, {FC} from "react";

import { 
  ContainerDark,
  HeadContainer, 
  ImgContainer, 
  TitleContainer, 
  Title, 
  Subtitle,
  ContainerTools,
  TitleHabilities,
  ContainerHabilities
} from "./styles";
import Profile from '../../assets/profile.svg';
import SkillBar from "../skillBar";

const tools: any = [
  {
    tool: 'Git',
    level: 'adivanced',
  },
  {
    tool: 'JavaScript',
    level: 'adivanced',
  },
  {
    tool: 'NodeJS',
    level: 'adivanced',
  },
  {
    tool: 'ReactJS',
    level: 'adivanced',
  },
  {
    tool: 'PostgreSQL',
    level: 'adivanced',
  },
  {
    tool: 'MySQL',
    level: 'adivanced',
  },
  {
    tool: 'Scrum',
    level: 'adivanced',
  },
  {
    tool: 'Docker',
    level: 'adivanced',
  },
  {
    tool: 'TypeScript',
    level: 'adivanced',
  },
  {
    tool: 'React Native',
    level: 'middle',
  },
  {
    tool: 'NextJS',
    level: 'middle',
  },
  {
    tool: 'NestJS',
    level: 'middle',
  },
  {
    tool: 'Prisma',
    level: 'middle',
  },
  {
    tool: 'Jest',
    level: 'middle',
  },
  {
    tool: 'S.O.L.I.D',
    level: 'basic',
  },
];

const CardInfo: FC = () => {
  return (
    <div>
      <ContainerDark>
        <HeadContainer>
          <ImgContainer>
            <Profile />
          </ImgContainer>
          <TitleContainer>
            <Title>Victor Geruso Mota Pereira Gomes</Title>
            <Subtitle>Engenheiro de Software</Subtitle>
          </TitleContainer>
        </HeadContainer>
        <ContainerHabilities>
          <TitleHabilities>Habilidades</TitleHabilities>
          <ContainerTools>
            {tools.map((item: any) => <SkillBar key={item.tool} tool={item.tool} level={item.level}/>)}
          </ContainerTools>
        </ContainerHabilities>
      </ContainerDark>
    </div>
  )
}

export default CardInfo;