import React, { Component } from 'react';
import Dice from './dice';
class App extends Component {
  static defaultProps = {
    dice: ["one", "two", "three", "four", "five", "six"]
  };
  constructor(props) {
    super(props);
    this.state = {
      roll1: "one",
      roll2: "one",
      isDicing: false
    };
  };
  rollDice = () => {
    let idxDice1 = Math.floor(Math.random() * this.props.dice.length);
    let idxDice2 = Math.floor(Math.random() * this.props.dice.length);
    this.setState({ roll1: this.props.dice[idxDice1], roll2: this.props.dice[idxDice2], isDicing: true });
    setTimeout(() => {
      this.setState({ isDicing: false })
    }, 400);

  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-1">
            <Dice
              num={this.state.roll1}
              rolling={this.state.isDicing}
            />

          </div>
          <div className="col-md-2">
            <Dice
              num={this.state.roll2}
              rolling={this.state.isDicing}
            />
          </div>

          <div className="col-md-12">
            <button type="button" className="btn btn-outline-primary btn-md"
              onClick={this.rollDice}
            >
              {this.state.isDicing ? 'Rolling....' : 'Roll Dice'}
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default App;