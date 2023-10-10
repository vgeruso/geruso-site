import { styled } from 'styled-components';

export const ContainerDark = styled.div`
  background-color: #2a2c37;
  padding: 10px 10px 9px 10px;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 95px;

  span {
    font-size: small;
  }

  a {
    text-decoration: none;
    color: #ffffff;
    margin-left: 0px;
    margin-right: 5px;
  }

  .centralize {
    justify-items: center;
  }

  .justify {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .icons {
    display: flex;
    padding: 4px;
    justify-content: space-evenly;
    align-items: center;
  }
`;

export const ContainerLight = styled.div`
  background-color: #ffffff;
  padding: 20px;
`;
