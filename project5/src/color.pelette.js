import React, { Component } from 'react';
import { randomColor } from './helper';
import Box from './box';

class ColorPelette extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numberPallete: 15,
            colors: []
        }
        this.generateColor();
    };

    generateColor = () => {
        for (let i = 0; i < this.state.numberPallete; i++) {
            this.state.colors.push({ hexcode: randomColor() });
        }
    };

    updateColor = (idx) => {
        let color = randomColor();
        this.state.colors[idx].hexcode = color;
        this.setState({ colors: this.state.colors });
    };
    render() {
        console.log(this.state.colors);
        return (
            <div className="row">
                {
                    this.state.colors.map((color, idx) => {
                        return (<Box key={idx} id={idx} updatecolor={this.updateColor} color={color} />);
                    })
                }
            </div>
        )
    }
}

export default ColorPelette;