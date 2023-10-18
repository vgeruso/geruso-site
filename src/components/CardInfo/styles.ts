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
  /* overflow: hidden; */

  @media (max-width: 1300px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 30em;
  }
`;

export const ImgContainer = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1300px) {
    margin-bottom: 0;
  }

  @media (max-width: 770px) {
    width: 40%;
    margin-bottom: 0;
  }

  @media (max-width: 430px) {
    width: 65%;
    margin-bottom: 0;
  }

  @media (max-width: 380px) {
    width: 80%;
    margin-bottom: 0;
  }

  @media (max-width: 325px) {
    width: 100%;
    margin-bottom: 0;
  }
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

  @media (max-width: 1300px) {
    margin-top: 0;
    text-align: center;
  }

  @media (max-width: 770px) {
    margin-top: 0;
    font-size: 2.5em;
  }

  @media (max-width: 430px) {
    margin-top: 0;
    font-size: 2em;
  }

  @media (max-width: 325px) {
    margin-top: 0;
    font-size: 1.5em;
  }
`;

export const Subtitle = styled.h3`
  color: #6c6c6c;
  margin-top: 0;
  font-size: 1.5em;

  @media (max-width: 1300px) {
    margin-bottom: 50px;
  }

  @media (max-width: 430px) {
    margin-top: 0;
    font-size: 1em;
    text-align: center;
  }

  @media (max-width: 325px) {
    margin-top: 0;
    font-size: 0.7em;
  }
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

  @media (max-width: 430px) {
    flex-direction: column;
  }
`;
