import React from 'react';

import Nav from '../../Components/Nav/index';
import { TitleWrapper, Title, SomeThings, SubTitle, Text, TextDescription, UnderlinedText, Knowledge } from './styles';

export default function About() {
  return (
    <>
      <Nav/>
      <TitleWrapper>
        <Title>
          lucas liuti
        </Title>
      </TitleWrapper>
      <SomeThings>
        <SubTitle>
          Some things you should know about me
        </SubTitle>
        <Text>
          I'm definetly not a fullstack monster
        </Text>
        <TextDescription>
          That guy who swears he is an expert with 9999 different languages
        </TextDescription>
        <Text>
          Neither a genius
        </Text>
        <TextDescription>
          Who may know everything
        </TextDescription>
        <Text>
          I'm just someone who loves technology and coding.
        </Text>
        <TextDescription>
          I know that I have a lot to learn, which motivates me.
        </TextDescription>
      </SomeThings>
      <Knowledge>
        <SubTitle>
          What do I do?
        </SubTitle>
        <Text>
          <UnderlinedText>JavaScript</UnderlinedText> is my main focus at the moment.
        </Text>
        <TextDescription>
          I've been studying JavaScript for a while now and created some really cool projects with it.
        </TextDescription>
      </Knowledge>
    </>
  );
}
