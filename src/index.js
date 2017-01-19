import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, hashHistory } from 'react-router';
import routes from './router';
import Main from './components/Main';
import './styles/index.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar } from 'react-bootstrap';



ReactDOM.render(
  <Router history={hashHistory}>
    <Route component={Main}>
      {routes}
    </Route>
  </Router>,
  document.getElementById('root')
)
