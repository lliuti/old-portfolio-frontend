import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: 20px 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ErrorTitle = styled.h1`
  font-size: 42px;
  font-weight: bold;
`;

export const ErrorMessage = styled.p`
  font-size: 24px;
  &:not(:last-of-type) {
    margin-bottom: 50px;
  }
`;

export const Button = styled.button`
  margin-top: 15px;
  padding: 12px 30px;
  border: none;
  border-radius: 25px;
  font-size: 18px;
  background-image: linear-gradient(to left, rgb(87, 150, 222), rgb(52, 122, 202), rgb(40, 109, 187));
  color: #fff;
  cursor: pointer;
  &:hover {
    background-image: linear-gradient(to left, rgb(52, 122, 202), rgb(40, 109, 187), rgb(22, 91, 170));
  }
`;