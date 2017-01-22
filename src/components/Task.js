import React from 'react';
import Reflux from 'reflux';
import TaskStore from '../store/TaskStore';
import TaskView from '../views/TaskView';

// var task = {
//   description: 'Learn Redux',
//   completed: "False",
// };

const Task = React.createClass({
  // "If all you want to do is update the state of your component to whatever the data store transmits, you can use Reflux.connect(listener,[stateKey]) as a mixin.
  mixins: [
    Reflux.connect(TaskStore, 'nothing')
  ],

  getInitialState () {
    return {
      description: 'Learn Redux',
      completed: false
    };
  },

  changeCompleted () {
    this.setState({
      completed: true
    })
  },

  render () {
    return (
      <div>
        <TaskView
          onClick={this.changeCompleted}
          description={this.state.description}
          completed={this.state.completed}
        />
      </div>
    );
  }
})

export default Task;
