import React from 'react';
const Box = (props) => {
    return ((<div style={{
        width: '100px', height: '100px',
        padding: '10px',
        border: '2px solid white',
        backgroundColor: props.color.hexcode
    }}
        onClick={() => props.updatecolor(props.id)}
    >

    </div>))
};

export default Box;