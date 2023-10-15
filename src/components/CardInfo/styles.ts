import { styled } from 'styled-components';

export const ContainerDark = styled.div`
  background-color: #2a2c37;
  margin: 20px;
  padding: 25px;
  border-radius: 10px;
`;

export const HeadContainer = styled.div`
  border-bottom: 1px solid #cecece;
  display: flex;
  flex-direction: row;
  height: 30vh;
  overflow: hidden;
`;

export const ImgContainer = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 75%;
`;

export const Title = styled.h1`
  color: #cecece;
  margin-bottom: 0;
  font-size: 3.5em;
  font-weight: bold;
`;

export const Subtitle = styled.h3`
  color: #6c6c6c;
  margin-top: 0;
  font-size: 1.5em;
`;

export const ContainerHabilities = styled.div`
  padding: 20px;
`;

export const TitleHabilities = styled.h3`
  color: #cecece;
`;

export const ContainerTools = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;
