import React, { Component } from 'react';
import '../styles/App.css';
import { Link } from 'react-router';

class MastheadView extends Component {
  render () {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Habitual</h2>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/About">About</Link></li>
        </div>
      </div>
    );
  }
}

export default MastheadView;
