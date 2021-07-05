import React from 'react';
import './img.css';
const Img = (props) => {
    return (
        <React.Fragment>
            <div className="bg" style={{ display: 'flex', justifyContent: 'center' }}>
                <div className="icon">

                    <img src={props.url.imgUrl} alt={props.url.side} />
                </div>
            </div>
        </React.Fragment>
    )
};



export default Img;