import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React from 'react';

import Projects from './Pages/Projects/index';
import Contact from './Pages/Contact/index';
import About from './Pages/About/index';
import Error404 from './Pages/Error/error404';


export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/projects" component={Projects} />
        <Route path="/*" component={Error404} />
      </Switch>
    </BrowserRouter>
  );
}
