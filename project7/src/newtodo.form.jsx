import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid';

class NewTodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: ''
        }
    }
    handleChange = (evt) => {
        this.setState({ [evt.target.name]: evt.target.value });
    };
    handleSubmit = (evt) => {
        evt.preventDefault();
        this.props.todoAction({ ...this.state, id: uuidv4() });
        evt.target.reset();
    }
    render() {
        return (
            <React.Fragment>
                <form onSubmit={this.handleSubmit}>
                    <input type="text"
                        name="task"
                        value={this.state.task}
                        placeholder="enter task"
                        onChange={this.handleChange}
                    />
                    <button type="submit">
                        Submit
                    </button>
                </form>
            </React.Fragment>
        )
    }
};

export default NewTodoForm;