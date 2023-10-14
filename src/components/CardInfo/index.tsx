import React, {FC} from "react";

import { 
  ContainerDark,
  ImgProfile,
  HeadContainer, 
  ImgContainer, 
  TitleContainer, 
  Title, 
  Subtitle
} from "./styles";
import profile from '../../assets/profile.svg';
import SkillBar from "../skillBar";

// TODO Aplicar os estilos [Stiled-component]
const CardInfo: FC = () => {
  return (
    <div>
      <ContainerDark>
        <HeadContainer>
          <ImgContainer>
            <ImgProfile src={profile} alt="profile"/>
          </ImgContainer>
          <TitleContainer>
            <Title>Victor Geruso Mota Pereira Gomes</Title>
            <Subtitle>Engenheiro de Software</Subtitle>
          </TitleContainer>
        </HeadContainer>
        <div style={{padding: '20px'}}>
          <h3 style={{color: '#cecece'}}>Habilidades</h3>
          <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center'}}>
            <SkillBar level="adivanced" tool="Git"/>
            <SkillBar level="adivanced" tool="JavaScript"/>
            <SkillBar level="adivanced" tool="NodeJS"/>
            <SkillBar level="adivanced" tool="ReactJS"/>
            <SkillBar level="adivanced" tool="PostgreSQL"/>
            <SkillBar level="adivanced" tool="MySQL"/>
            <SkillBar level="adivanced" tool="Scrum"/>
            <SkillBar level="adivanced" tool="Docker"/>
            <SkillBar level="middle" tool="TypeScript"/>
            <SkillBar level="middle" tool="React Native"/>
            <SkillBar level="middle" tool="NextJS"/>
            <SkillBar level="middle" tool="NestJS"/>
            <SkillBar level="middle" tool="Prisma"/>
            <SkillBar level="middle" tool="Jest"/>
            <SkillBar level="basic" tool="S.O.L.I.D"/>
          </div>
        </div>
      </ContainerDark>
    </div>
  )
}

export default CardInfo;