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
import { useYear } from "../../hooks/useYear";

const tools: any = [
  {
    tool: 'Git',
    level: 'advanced',
  },
  {
    tool: 'JavaScript',
    level: 'advanced',
  },
  {
    tool: 'NodeJS',
    level: 'advanced',
  },
  {
    tool: 'ReactJS',
    level: 'advanced',
  },
  {
    tool: 'PostgreSQL',
    level: 'advanced',
  },
  {
    tool: 'MySQL',
    level: 'advanced',
  },
  {
    tool: 'Scrum',
    level: 'advanced',
  },
  {
    tool: 'Docker',
    level: 'advanced',
  },
  {
    tool: 'TypeScript',
    level: 'advanced',
  },
  {
    tool: 'NestJS',
    level: 'advanced',
  },
  {
    tool: 'Prisma',
    level: 'advanced',
  },
  {
    tool: 'Jest',
    level: 'advanced',
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
    tool: 'S.O.L.I.D',
    level: 'basic',
  },
];

const CardInfo: FC = () => {
  const { old , experienceYears} = useYear();

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
          Olá, sou Victor Geruso Gomes, tenho {old} anos e sou Bacharel em 
          engenharia de Software formado pela Universidade Católica do 
          Salvador (Ucsal), focado no desenvolvimento backend estou 
          atualmente em busca de aprimoramento técnico em arquitetura, 
          estruturas e armazenamento de dados.
        </Pargraph>
        <Pargraph>
          Possuo experiencia de {experienceYears} anos em desenvolvimento Web, trabalhando a
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