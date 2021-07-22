import React, { Component } from 'react';
import NewTodoForm from './newtodo.form';
import Todo from './todo';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: []
        }
    }

    createTodo = (data) => {

        this.setState({
            todos: [...this.state.todos, data]
        });
    };
    removeTodo = (id) => {
        this.setState({ todos: this.state.todos.filter(item => item.id !== id) });
    }

    render() {
        let todos = this.state.todos.map(todo => <Todo key={todo.id} t={todo}
            id={todo.id}
            deletetodoAction={this.removeTodo}
        />)
        return (
            <React.Fragment>
                <ul>
                    {todos}
                </ul>
                <NewTodoForm todoAction={this.createTodo}

                />
            </React.Fragment>
        )
    }

};

export default TodoList;