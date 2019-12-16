import styled, { keyframes } from 'styled-components';

const SlideLeft = keyframes`
  0% {
    opacity: 0;
    margin-right: -450px;
  }

  100% {
    opacity: 1;
    margin-right: 0;
  }
`;

export const TitleWrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  font-family: 'Hammersmith One', sans-serif;
  font-size: 164px;
  animation: ${SlideLeft} 500ms linear 0s;
`;

export const SomeThings = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #333;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SubTitle = styled.h2`
  font-size: 72px;
  margin-bottom: 60px;
`;

export const Text = styled.h3`
  font-size: 48px;
`;

export const TextDescription = styled.p`
  font-size: 26px;
  margin-bottom: 30px;
  max-width: 750px;
`;

export const UnderlinedText = styled.span`
  background-image: linear-gradient(120deg, #f8e2c6 0%, #f58585 100%);
  background-size: 100% .3em;
  background-repeat: no-repeat;
  background-position: 0 88%;
  transition: 300ms all;

  &:hover {
    background-size: 100% 88%;
  }
`;

export const Knowledge = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #fff;
  color: #333;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;