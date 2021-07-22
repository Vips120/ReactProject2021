import React, { Component } from 'react';

class Todo extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <React.Fragment>
                <li>

                    {this.props.t.task}
                </li>
                <button>EDIT</button>
                <button onClick={() => this.props.deletetodoAction(this.props.id)}>X</button>
            </React.Fragment>
        )
    }
};

export default Todo;