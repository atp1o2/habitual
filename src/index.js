import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, hashHistory } from 'react-router';
import routes from './router';
import Main from './components/Main';
import './styles/index.css';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route component={Main}>
      {routes}
    </Route>
  </Router>,
  document.getElementById('root')
)
