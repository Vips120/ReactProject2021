import React, { Component } from 'react';
import './App.css';
class Dice extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <img
                            className={this.props.rolling ? 'shake' : ''}
                            src={`https://img.icons8.com/windows/96/000000/dice-${this.props.num}.png`}

                        />
                    </div>
                </div>

            </div >
        )
    }
};

export default Dice;