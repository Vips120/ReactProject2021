import React, { Component } from 'react';
import NewTodoForm from './newtodo.form';
import TodoList from './todolist';
import './App.css';
class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <React.Fragment>
        <div className="container">

          <TodoList />
        </div>
      </React.Fragment>
    )
  }
}

export default App;
