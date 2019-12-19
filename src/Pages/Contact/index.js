import React from 'react';

import Nav from '../../Components/Nav/index';
import {
  ContactContainer,
  Title,
  ButtonBox,
  GithubButton,
  LinkedinButton,
  InstagramButton
} from './styles';

export default function Contact() {

  return (
    <>
      <Nav />
      <ContactContainer>
        <Title>
          Get in touch with me!
        </Title>
        <ButtonBox>
          <GithubButton onClick={() => window.open('https://github.com/lliuti', '_blank')}>
            GitHub
          </GithubButton>
          <LinkedinButton onClick={() => window.open('https://linkedin.com/in/lucas-liuti', '_blank')}>
            Linkedin
          </LinkedinButton>
          <InstagramButton onClick={() => window.open('https://instagram.com/lliuti/', '_blank')}>
            Instagram
          </InstagramButton>
        </ButtonBox>
      </ContactContainer>
    </>
  );
}
