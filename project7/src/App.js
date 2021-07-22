import React, { Component } from 'react';
import NewTodoForm from './newtodo.form';
import TodoList from './todolist';
class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <React.Fragment>
        <TodoList />
      </React.Fragment>
    )
  }
}

export default App;
