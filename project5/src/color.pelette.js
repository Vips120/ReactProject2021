import React, { Component } from 'react';
import { randomColor } from './helper';

class ColorPelette extends Component {
    static defaultProps = {
        colors: ['red', 'purple', 'orange', 'cyan', 'black']
    }
    constructor(props) {
        super(props);
        this.state = {
            color: randomColor(this.props.colors)
        }
    };

    colorPalette = () => {
        randomColor(this.props.colors);
    };
    render() {
        return (
            <div className="row">
                <div style={{ width: '100px', height: '100px', backgroundColor: this.state.color }}>

                </div>
            </div>
        )
    }
}

export default ColorPelette;