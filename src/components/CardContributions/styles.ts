import { styled } from 'styled-components';

export const Container = styled.div`
  background-color: #2a2c37;
  margin: 20px;
  padding: 20px;
  border-radius: 10px;
`;

export const HeadContainer = styled.div`
  border-bottom: 1px solid #cecece;
  margin-bottom: 40px;
`;

export const Title = styled.h2`
  margin-bottom: 20px;
  color: #cecece;

  @media (max-width: 325px) {
    font-size: 1em;
  }
`;

export const ContainerPosts = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export const Post = styled.a`
  background-color: #cecece;
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-radius: 10px;
  text-decoration: none;
  color: #2a2c37;
  margin-right: 20px;
  margin-bottom: 20px;

  p {
    text-align: center;
    font-size: 1.5em;
    margin-bottom: 0;
  }

  span {
    font-size: 0.7em;
    color: #5b6079;
  }

  img {
    margin: 0;
    width: 500px;
  }

  @media (max-width: 430px) {
    width: 100%;

    p {
      font-size: 1em;
    }

    span {
      font-size: 0.6em;
    }

    img {
      width: 100%;
    }
  }

  @media (max-width: 380px) {
    width: 100%;
  }

  @media (max-width: 325px) {
    width: 100%;
  }
`;
