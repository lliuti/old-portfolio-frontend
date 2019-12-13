import React from 'react';
import Nav from '../../Components/Nav/index';
import Header from '../../Components/Header/index';
import './style.css';

export default function Projects() {
  return (
    <>
      <Header/>
      <Nav/>
      <div className="projects">
        <div className="title-box">
          <h1><span className="underline-effect">Projects</span> I developed</h1>
        </div>
        <div className="project-box">
          <div className="project-description">
            <h2>BossaBox</h2>
            <p>An API to register and search dev tools</p>
            <ul>
              <li>NodeJS</li>
              <li>PostgreSQL</li>
              <li>Sequelize</li>
              <li>JWT</li>
              <li>BCryptJS</li>
            </ul>
          </div>
        </div>
        <div className="project-box">
          <h2>NoteAPP</h2>
          <p>An app to save your notes</p>
          <ul>
            <li>NodeJS</li>
            <li>PostgreSQL</li>
            <li>Sequelize</li>
            <li>JWT</li>
            <li>BCryptJS</li>
          </ul>
        </div>
        <div className="project-box">
          <h2>Talkyo</h2>
          <p>A chatbot that you can interact</p>
          <ul>
            <li>NodeJS</li>
            <li>Watson Assistant</li>
            <li>Express</li>
          </ul>
        </div>
      </div>
    </>
  );
}
