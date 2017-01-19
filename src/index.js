import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import routes from './router';
import Main from './components/Main';

import 'bootstrap/dist/css/bootstrap.css';
import { Navbar } from 'react-bootstrap';
import './styles/app.scss';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route component={Main}>
      {routes}
    </Route>
  </Router>,
  document.getElementById('root')
)
