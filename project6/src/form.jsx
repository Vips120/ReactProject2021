import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        }
    };
    onChangeName = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };
    handleSubmit = (e) => {
        e.preventDefault();
        alert(`hey your name ${this.state.name}`);
        this.setState({ name: "" });
    };
    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <form onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <input type="text"
                                        className="form-control"
                                        name="name"
                                        placeholder="enter text"
                                        value={this.state.name}
                                        onChange={this.onChangeName}
                                    />
                                </div>
                                <div className="form-group" style={{ marginTop: "20px" }}>

                                    <button type="submit" className="btn btn-danger btn-md">
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

export default Form;