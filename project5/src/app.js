import React, { Component } from 'react';
import Coinflip from './coinflipper';
import { randomCoin } from './helper';
import ColorPelette from './color.pelette';
class App extends Component {
    static defaultProps = {
        coins: [
            { side: 'head', imgUrl: 'https://tinyurl.com/headcoind' },
            { side: 'tail', imgUrl: 'https://tinyurl.com/tailcoin' }
        ]
    };
    constructor(props) {
        super(props);
        this.state = {
            currCoin: null,
            noflips: 0,
            head: 0,
            tail: 0
        };
    };
    flipCoin = () => {
        let coin = randomCoin(this.props.coins);
        this.setState((st) => {
            return {
                currCoin: coin,
                noflips: st.noflips + 1,
                head: st.head + (coin.side === 'head' ? 1 : 0),
                tail: st.tail + (coin.side === 'tail' ? 1 : 0)
            }
        });
    };

    render() {
        return (
            <React.Fragment>
                <div className="container">
                    {
                        this.state.currCoin ?
                            <Coinflip
                                coin={this.state.currCoin}
                            />
                            :
                            ''
                    }
                    <div
                        style={{ display: 'flex', justifyContent: 'center' }}>

                        <button type="button" className="btn btn-md btn-primary"
                            onClick={this.flipCoin}
                        >
                            Click
                        </button>
                    </div>
                    <h1>
                        total flip count is {this.state.noflips} in that head is {this.state.head} and tail is {this.state.tail}
                    </h1>
                    {/* <Coinflip /> */}
                    <ColorPelette />
                </div>
            </React.Fragment >
        )
    }
};
export default App;