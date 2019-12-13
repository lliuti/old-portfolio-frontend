import styled, { keyframes } from 'styled-components';

const colorRainbow = keyframes`
  0% {
    color: rgb(0, 0, 0);
  }
  25% {
    color: rgb(17, 11, 105);
  }
  35% {
    color: rgb(41, 34, 143);
  }
  50% {    
    color: rgb(81, 34, 143);
  }
  75% {
    color: rgb(41, 34, 143);
  }
  85% {
    color: rgb(17, 11, 105);
  }
  100% {
    color: rgb(0, 0, 0);
  }
}
`;

export const Navbar = styled.div`
  position: fixed;
  right: 35px;
  top: 50%;
  transform: translateY(-50%);
  float: right;
  display: flex;

  unorderedList {
    list-style: none; 

    listItem {
      margin: 50px 0;
      font-size: 36px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;

      &:hover {
        svg {
          color: rgb(63, 63, 63);
          animation: ${colorRainbow} 2s linear infinite;
        }
      }

      svg {
        color: rgb(100, 100, 100);
      }
    }
  }
`;