import React from 'react';

import Nav from '../../Components/Nav/index';
import  './style.css';

export default function Contact({ history }) {

  function redirectGithub() {
    window.open('https://github.com/lliuti', '_blank');
  };
  function redirectLinkedin() {
    window.open('https://linkedin.com/in/lucas-liuti', '_blank');
  };
  function redirectInstagram() {
    window.open('https://instagram.com/lliuti/', '_blank');
  };

  return (
    <>
      <Nav/>
      <div className="contact">
        <div className="centered-box">
          <h2>Get in touch with me!</h2>
          <div className="buttons-box">
            <div className="github">
              <button onClick={redirectGithub} className="btn btn-github">GitHub</button>
            </div>
            <div className="linkedin">
              <button onClick={redirectLinkedin} className="btn btn-linkedin">Linkedin</button>
            </div>
            <div className="instagram">
              <button onClick={redirectInstagram} className="btn btn-instagram">Instagram</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
