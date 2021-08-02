import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid';

class NewTodoForm extends Component {
    constructor(props) {
        super(props);
        console.log(this.props);
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
        this.setState({ task: '' })
    }
    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <form onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <input type="text"
                                        name="task"
                                        className="form-control"
                                        value={this.state.task}
                                        placeholder="enter task"
                                        onChange={this.handleChange}
                                    />
                                </div>
                                <div className="form-group"
                                    style={{ marginTop: '10px' }}
                                >

                                    <button type="submit"
                                        className="btn btn-danger btn-md"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </React.Fragment>
        )
    }
};

export default NewTodoForm;