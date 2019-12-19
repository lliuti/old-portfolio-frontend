import styled from 'styled-components';

export const ContactContainer = styled.div`
  width: 100%;
  height: 89vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 52px;
  margin-bottom: 20px;
`;

export const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  border: none;
  border-radius: 50px;
  padding: 20px 50px;
  width: 300px;
  margin: 15px 0;
  font-size: 24px;
  text-align: center;
  cursor: pointer;
  transition: 300ms;
  color: #fff;
`;

export const GithubButton = styled(Button)`
  background: linear-gradient(to left, rgb(0,0,0), rgb(46, 46, 46), rgb(82, 82, 82));
  &:hover {
    box-shadow: 2px 2px 20px rgb(46, 46, 46);
  }
`;

export const LinkedinButton = styled(Button)`
  background: linear-gradient(90deg, rgba(40,103,178,1) 0%, rgba(17,83,162,1) 23%, rgba(28,100,186,1) 49%, rgba(17,83,162,1) 73%, rgba(40,103,178,1) 100%);
  &:hover {
    box-shadow: 2px 2px 20px rgba(28,100,186,1);
  }
`;

export const InstagramButton = styled(Button)`
  background: linear-gradient(to right, rgb(64,93,230), rgb(88,81,219), rgb(131,58,180), rgb(193,53,132), rgb(225,48,108), rgb(225, 48, 72), rgb(245,96,64));
  &:hover {
    box-shadow: 2px 2px 20px rgb(225,48,108);
  }
`;