import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      number: 0
    }
  }
  increment = () => {
    this.setState({ number: this.state.number + 1 })
  };

  killing = () => {
    this.setState(str => { return { number: str.number + 1 } })
    this.setState(str => { return { number: str.number + 1 } })
    this.setState(str => { return { number: str.number + 1 } })
  }

  completeTodo(id) {
    const theTodo = this.state.todos.find(data => data.id === id);
    theTodo.done = true;    //  dont change the state
    this.setState({ todos: this.state.todos });   // dont do that
  };

  completeTodo(id) {
    const newTodos = this.state.todos.map(data => {
      if (data.id === id) {
        return { ...data, done: true };
      }
      return data;
    });
    this.setState({ todos: newTodos });
  };

  render() {
    return (
      <div className="container">
        <h1>{this.state.number}</h1>
        <button type="button"
          onClick={this.increment}
        >Click</button>
        <button type="button"
          onClick={this.killing}
        >Click</button>
      </div>
    )
  }
}

export default App;



