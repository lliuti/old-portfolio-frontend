import styled from 'styled-components';

export const ProjectsContainer = styled.div`
  width: 100%;
  padding: 20px 60px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1 1;
  flex-wrap: wrap;
`;

export const TitleBox = styled.div`
  width: 60%;
  margin-bottom: 50px;
`;

export const UnderlineEffect = styled.span`
  background-image: linear-gradient(120deg, #c6d9f8 0%, #e6d1f7 100%);
  background-size: 100% .3em;
  background-repeat: no-repeat;
  background-position: 0 88%;
  transition: 300ms all;

  &:hover {
    background-size: 100% 88%;
  }
`;

export const Title = styled.h1`
  font-size: 64px;
  cursor: default;
`;

export const ProjectBox = styled.div`
  background-color: #fff;
  box-shadow: 3px 1px 4px #00000030;
  padding: 25px 20px;
  display: flex;
  flex-direction: column;
  flex: 1 1;
  flex-wrap: wrap;
  margin: 5px 0;
  width: 60%;
  transition: 300ms ease-in;

  &:hover {
    margin-left: -15px;
  }
`;

export const ProjectTitle = styled.h2`
  font-size: 50px;
`;

export const ProjectDescription = styled.p`
  font-size: 36px;
`;

export const UnorderedList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
export const ListItem = styled.li`
  font-size: 28px;
  background-color: rgb(39, 133, 221);
  padding: 2px 05px;
  color: #fff;
  transition: 200ms all;
  cursor: default;
  margin-top: 5px;
  &:not(:last-child) {
    border-right: 1px dotted #fff;
  }
  &:hover {
    margin-top: 0px;
    background-color: rgb(25, 118, 204);
  }
`;