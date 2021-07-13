import React, { Component } from 'react';


class Box extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: '',
            height: '',
            backgroundColor: ''
        };
    }

    resetBox = () => {
        let item = {
            width: this.state.width,
            height: this.state.height,
            backgroundColor: this.state.backgroundColor
        };
        this.props.remove(item);
    };
    render() {

        let styles = {
            width: `${this.props.width}px`,
            height: `${this.props.height}px`,
            backgroundColor: this.props.bg
        };
        if (this.props.width && this.props.height && this.props.bg) {
            return (
                <React.Fragment>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div style={styles}>

                                </div>
                                <div className="form-group" style={{ marginTop: "20px" }}>

                                    <button type="button" className="btn btn-danger btn-md"
                                        onClick={this.resetBox}
                                    >
                                        Reset
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            );
        } else {
            return null;
        }
    }
};

export default Box;