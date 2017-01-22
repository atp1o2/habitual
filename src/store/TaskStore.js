import Reflux from 'reflux';
import Actions from '../actions/Actions'

var store = Reflux.createStore({
  listenables: Actions

  // onUpdateTask () {
  //   task.completed = 'False' ? 'True' : 'False';
  //   this.trigger({task});
  // }
});

export default store;
