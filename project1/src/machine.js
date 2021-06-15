import React from 'react';


class Machine extends React.Component {
    static defaultProps = {
        appname: 'DUMMY MACHINE'
    };
    win = {
        backgroundColor: 'green',
        color: 'white'
    };
    loss = {
        backgroundColor: 'red',
        color: 'black'
    };
    render() {
        console.log(this.props);
        let { slot1, slot2, slot3 } = this.props;
        let result = (slot1 === slot2 && slot2 === slot3) ? 'winner' : 'looser';

        return (
            <div className="container">
                <h3>
                    {this.props.appname}
                </h3>
                <h1 style={result === 'winner' ? this.win : this.loss} >{result}</h1> {slot1} {slot2} {slot3}
            </div>
        );
    };
};

export default Machine;