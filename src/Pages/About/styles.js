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
  padding: 10px 20px;
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
  padding: 10px 20px;
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

export const JavascriptDisclaimer = styled.p`
  font-size: 36px;
  cursor: default;
`;

export const TextDescription = styled.p`
  font-size: 26px;
  margin-bottom: 30px;
  max-width: 750px;
`;

export const UnderlinedNode = styled.span`
  background-image: linear-gradient(120deg, rgba(32,88,26,1) 0%, rgba(36,156,25,1) 30%, rgba(67,133,61,1) 100%);
  background-size: 100% .25em;
  background-repeat: no-repeat;
  background-position: 0 88%;
  transition: 300ms all;
  padding: 0 5px;

  &:hover {
    background-size: 100% 88%;
    color: #fff;
  }
`;

export const UnderlinedReact = styled.span`
  background-image: linear-gradient(120deg, rgba(8,84,129,1) 0%, rgba(97,218,251,1) 30%, rgba(0,212,255,1) 100%);
  background-size: 100% .25em;
  background-repeat: no-repeat;
  background-position: 0 88%;
  transition: 300ms all;
  padding: 0 5px;

  &:hover {
    background-size: 100% 88%;
    color: #fff;
  }
`;

export const UnderlinedRN = styled.span`
  background-image: linear-gradient(120deg, rgba(24,8,129,1) 0%, rgba(97,105,251,1) 30%, rgba(0,99,255,1) 100%);
  background-size: 100% .25em;
  background-repeat: no-repeat;
  background-position: 0 88%;
  transition: 300ms all;
  padding: 0 5px;

  &:hover {
    background-size: 100% 88%;
    color: #fff;
  }
`;

export const Knowledge = styled.div`
  height: 100vh;
  width: 100%;
  padding: 10px 20px;
  background-color: #fff;
  color: #333;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;