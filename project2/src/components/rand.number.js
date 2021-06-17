import React, { Component } from 'react';

class Random extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 1
        }

    };

    numberGenrator = (e) => {
        let idx = Math.floor(Math.random() * 10);
        this.setState({ number: idx });
    };

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h3>
                            Current number is: {this.state.number}
                        </h3>
                        {
                            this.state.number !== 7 ?
                                <button type="button" className="btn btn-outline-primary"
                                    onClick={this.numberGenrator}
                                >
                                    Click Here
                                </button>
                                :
                                <h2>YOU WON!!!!</h2>

                        }
                    </div>
                </div>
            </div>
        )
    };
};

export default Random;