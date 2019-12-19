import React from 'react';
import Nav from '../../Components/Nav/index';
import {
  ProjectsContainer,
  ProjectBox,
  TitleBox,
  Title,
  UnderlineEffect,
  ProjectTitle,
  ProjectDescription,
  UnorderedList,
  ListItem
} from './styles';

export default function Projects() {
  return (
    <>
      <Nav />
      <ProjectsContainer>
        <TitleBox>
          <Title><UnderlineEffect>Projects</UnderlineEffect> I developed</Title>
        </TitleBox>
        <ProjectBox>
          <ProjectTitle>BossaBox</ProjectTitle>
          <ProjectDescription>An API to register and search dev tools</ProjectDescription>
          <UnorderedList>
            <ListItem>NodeJS</ListItem>
            <ListItem>PostgreSQL</ListItem>
            <ListItem>Sequelize</ListItem>
            <ListItem>JWT</ListItem>
            <ListItem>BCryptJS</ListItem>
          </UnorderedList>
        </ProjectBox>
        <ProjectBox>
          <ProjectTitle>NoteAPP</ProjectTitle>
          <ProjectDescription>An app to save your notes</ProjectDescription>
          <UnorderedList>
            <ListItem>NodeJS</ListItem>
            <ListItem>PostgreSQL</ListItem>
            <ListItem>Sequelize</ListItem>
            <ListItem>JWT</ListItem>
            <ListItem>BCryptJS</ListItem>
          </UnorderedList>
        </ProjectBox>
        <ProjectBox>
          <ProjectTitle>Talkyo</ProjectTitle>
          <ProjectDescription>A chatbot that you can interact</ProjectDescription>
          <UnorderedList>
            <ListItem>NodeJS</ListItem>
            <ListItem>Watson Assistant</ListItem>
            <ListItem>Express</ListItem>
          </UnorderedList>
        </ProjectBox>
      </ProjectsContainer>
    </>
  );
}
