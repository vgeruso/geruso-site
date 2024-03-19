import React, {FC} from "react";

import { 
  ContainerDark,
  HeadContainer, 
  ImgContainer, 
  TitleContainer, 
  Title,
  Name, 
  Subtitle,
  ContainerTools,
  ContainerHabilities,
  ContainerAbout,
  Pargraph
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
    <ContainerDark>
      <HeadContainer>
        <ImgContainer>
          <Profile />
        </ImgContainer>
        <TitleContainer>
          <Name>Victor Geruso Mota Pereira Gomes</Name>
          <Subtitle>Engenheiro de Software {`(Dev Backend)`}</Subtitle>
        </TitleContainer>
      </HeadContainer>
      <ContainerAbout>
        <Title>Sobre mim</Title>
        <Pargraph>
          Olá, sou Victor Geruso Gomes, tenho 27 anos e sou Bacharel em 
          engenharia de Software formado pela Universidade Católica do 
          Salvador (Ucsal), focado no desenvolvimento backend estou 
          atualmente em busca de aprimoramento técnico em arquitetura, 
          estruturas e armazenamento de dados.
        </Pargraph>
        <Pargraph>
          Possuo experiencia de 4.6 anos em desenvolvimento Web, trabalhando a
          maior parte do tempo como fullstack em empresas conceituadas na área
          da região metropolitana de Salvador, nessas empresas atuei com
          documentação e desenvolvimento de sites, serviços web/mobile, APIs,
          sistemas Saas, entre outros.
        </Pargraph>
        <Pargraph>
          Estou sempre em busca de melhorias, realizando desde cursos até
          certificações para me manter por dentro de tudo que tenho ao meu
          alcance para agregar valor onde eu estiver.
        </Pargraph>
      </ContainerAbout>
      <ContainerHabilities>
        <Title>Habilidades</Title>
        <ContainerTools>
          {tools.map((item: any) => <SkillBar key={item.tool} tool={item.tool} level={item.level}/>)}
        </ContainerTools>
      </ContainerHabilities>
    </ContainerDark>
  )
}

export default CardInfo;