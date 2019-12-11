import React from 'react';
import Projects from '../../Components/Projects/index';
import Nav from '../../Components/Nav/index';
import './style.css';

export default function Home() {
  return (
    <>
    <header>
      <h1>Lucas Liuti</h1>
    </header>
    <div className="container">
      <Projects/>
      <Nav/>
    </div>
    </>
  );
}
