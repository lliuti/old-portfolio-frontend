import React from 'react';

import Nav from '../../Components/Nav/index';
import {
  TitleWrapper,
  Title,
  SomeThings,
  SubTitle,
  Text,
  JavascriptDisclaimer,
  UnderlinedNode,
  UnderlinedReact,
  UnderlinedRN,
  TextDescription,
  UnderlinedText,
  Knowledge
} from './styles';

export default function About() {
  window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  return (
    <>
      <Nav />
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
          I'm someone who really loves technology and coding.
        </Text>
        <TextDescription>
          I know that I still have a lot to learn, which motivates me.
        </TextDescription>
      </SomeThings>
      <Knowledge>
        <SubTitle>
          What do I work with?
        </SubTitle>
        <Text>
          JavaScript is my main focus at the moment.
        </Text>
        <JavascriptDisclaimer>
          <UnderlinedNode>NodeJS</UnderlinedNode> | <UnderlinedReact>ReactJS</UnderlinedReact> | <UnderlinedRN>React Native</UnderlinedRN>
        </JavascriptDisclaimer>
        <TextDescription>
          I've been studying JavaScript for a while now and I have created some really cool projects with it.
        </TextDescription>
      </Knowledge>
    </>
  );
}
