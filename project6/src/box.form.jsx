import React, { Component } from 'react';
import Box from './box';
class BoxForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: '200',
            height: '200',
            backgroundColor: 'red'
        };
    }
    onChangeName = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };
    handleSubmit = (e) => {
        e.preventDefault();
        this.setState((st) => ({ ...st, width: this.state.width, height: this.state.height, backgroundColor: this.state.backgroundColor }));
    };
    remove = (item) => {
        this.setState((st) => ({ ...st, width: item.width, height: item.height, backgroundColor: item.backgroundColor }));
    }
    render() {
        return (<React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <input type="text"
                                    className="form-control"
                                    name="width"
                                    placeholder="enter width"
                                    value={this.state.width}
                                    onChange={this.onChangeName}
                                />
                            </div>
                            <div className="form-group">
                                <input type="text"
                                    className="form-control"
                                    name="height"
                                    placeholder="enter text"
                                    value={this.state.height}
                                    onChange={this.onChangeName}
                                />
                            </div>
                            <div className="form-group">
                                <input type="text"
                                    className="form-control"
                                    name="backgroundColor"
                                    placeholder="enter backgroundcolor"
                                    value={this.state.backgroundColor}
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
                <hr />
                <Box width={this.state.width} height={this.state.height} bg={this.state.backgroundColor}
                    remove={this.remove}
                />
            </div>
        </React.Fragment>

        )
    }
};

export default BoxForm;