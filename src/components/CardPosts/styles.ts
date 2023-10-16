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
  /* h2 style={{marginBottom: '20px', color: '#cecece'}} */
  margin-bottom: 20px;
  color: #cecece;

  a {
    color: #df8675;
    text-decoration: none;
  }
`;

export const ContainerPosts = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
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
    margin-left: 28.9em;
  }

  img {
    margin: 0;
  }
`;
