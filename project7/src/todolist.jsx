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
    };
    updateTodo = (id, data) => {
        let utodo = this.state.todos.map(t => {
            if (t.id === id) {
                return { ...t, task: data };
            }
            return t;
        });
        this.setState({ todos: utodo });
    };

    render() {
        let todos = this.state.todos.map(todo => <Todo key={todo.id} t={todo}
            id={todo.id}
            deletetodoAction={this.removeTodo}
            updateTodoAction={this.updateTodo}
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