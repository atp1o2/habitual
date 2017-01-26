import React, { Component } from 'react';
import Masthead from './Masthead';

class Main extends Component {
  render () {
    return (
      <div>
        <Masthead/>
        <main className="">
          {this.props.children}
        </main>
      </div>
    );
  }
}

export default Main;
