import React from 'react';
function RandomNumber() {
    return Math.floor(Math.random() * 10) + 1;
};

class Numpicker extends React.Component {
    render() {
        const num = RandomNumber();
        return (
            <div>
                <h1>NumPicker: {num}</h1>
                <hr />
                {(num === 7) ?
                    <img src={'https://images.unsplash.com/photo-1601933470096-0e34634ffcde?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'}
                        width='400px'
                        height='400px'
                    />
                    :
                    <h1>SORRY!!!</h1>
                }
            </div>
        )
    }
};

export default Numpicker;