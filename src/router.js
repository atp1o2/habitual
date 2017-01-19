import React from 'react';
import { Route } from 'react-router';

import Main from './components/Main';
import About from './components/About';

var routes = (
  <Route>
    <Route path="/" component={Main} />
    <Route path="/about" component={About} />
  </Route>
);

export default routes;
