import React, { Component } from 'react';

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: this.props.t.task,
            isDone: false,
            isEditable: false
        }
    }
    handelChange = (evt) => {
        this.setState({ [evt.target.name]: evt.target.value })
    };
    onEdit = () => {
        this.setState({ isEditable: !this.state.isEditable })
    };
    onSubmit = (evt) => {
        evt.preventDefault();
        this.props.updateTodoAction(this.props.id, this.state.task);
        this.setState({ isEditable: false })
    };
    taskDone = () => {
        this.setState({ isDone: !this.state.isDone })
        console.log(this.state.isDone);
    };
    render() {
        let result;
        if (this.state.isEditable) {
            result = (
                <React.Fragment>
                    <div className="container">
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <input type="text"
                                    name='task'
                                    className="form-control"
                                    value={this.state.task}
                                    onChange={this.handelChange}
                                    placeholder="enter task" />
                            </div>

                            <button type="submit"
                                className="btn btn-danger btn-md"

                            >Save</button>
                        </form>

                    </div>

                </React.Fragment>
            )
        } else {
            result = (
                <React.Fragment>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="card">
                                    <div className="card-body">

                                        <h3
                                            onClick={this.taskDone}
                                            style={{
                                                textDecoration: this.state.isDone ? 'line-through' : ''
                                            }}
                                        >
                                            {this.props.t.task}
                                        </h3>
                                        <div
                                            style={{
                                                display: 'flex',
                                                justifyContent: 'flex-end',
                                                paddingTop: '-30px',
                                                cursor: 'pointer'

                                            }}
                                        >

                                            <i class="fa fa-plus fa-1x" aria-hidden="true"
                                                onClick={this.onEdit}
                                                style={{ marginRight: '5px' }}
                                            ></i>
                                            <i class="fa fa-trash-o fa-1x" aria-hidden="true"
                                                onClick={() => this.props.deletetodoAction(this.props.id)}
                                            ></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </React.Fragment>
            )
        }
        return result;
    }
};

export default Todo;