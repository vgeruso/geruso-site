import { styled } from 'styled-components';

export const ContainerSkillBar = styled.div`
  display: flex;
  flex-direction: column;
  width: 18%;
  margin-right: 10px;
  margin-bottom: 5px;
`;

export const TitleTool = styled.p`
  color: #cecece;
  font-weight: bold;
`;

export const LevelDescription = styled.span`
  color: #cecece;
  font-size: 0.8em;
  margin-top: 5px;
`;

export const ContainerBar = styled.div`
  display: flex;
  flex-direction: row;
`;

export const BarIni = styled.div`
  width: 33%;
  border-end-start-radius: 10em;
  border-start-start-radius: 10em;
`;

export const BarMid = styled.div`
  width: 33%;
`;

export const BarFin = styled.div`
  width: 33%;
  border-end-end-radius: 10em;
  border-start-end-radius: 10em;
`;
