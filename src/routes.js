import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React from 'react';

import Projects from './Pages/Projects/index';
import Contact from './Pages/Contact/index';
import About from './Pages/About/index';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={About}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/projects" component={Projects}/>
      </Switch>
    </BrowserRouter>
  );
}
