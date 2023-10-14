import React, {FC} from "react";

import { 
  ContainerDark,
  HeadContainer, 
  ImgContainer, 
  TitleContainer, 
  Title, 
  Subtitle
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

// TODO Aplicar os estilos [Stiled-component]
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
        <div style={{padding: '20px'}}>
          <h3 style={{color: '#cecece'}}>Habilidades</h3>
          <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center'}}>
            {tools.map((item: any) => <SkillBar tool={item.tool} level={item.level}/>)}
          </div>
        </div>
      </ContainerDark>
    </div>
  )
}

export default CardInfo;