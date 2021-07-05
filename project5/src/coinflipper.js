import React, { Component } from 'react';
import Img from './img';

class Coinflip extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            < Img url={this.props.coin} />
        )
    }
};

export default Coinflip;

