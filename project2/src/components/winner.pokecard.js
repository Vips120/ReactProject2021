import React from 'react';

const WinnerPokeCard = ({ item, imgUrl }) => {
    return (
        <React.Fragment>
            <div className="col-md-3">
                <div className="card text-center" style={{ margin: '10px' }}>
                    <div className="card-header">
                        <h4 style={{ color: 'royalblue' }}>
                            {item.name}
                        </h4>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">
                            <img
                                src={item.id.toString().length === 1 ? `${imgUrl}00${item.id}.png` : (item.id.toString().length === 2 ? `${imgUrl}0${item.id}.png` : `${imgUrl}${item.id}.png`)}
                                alt={item.name}
                                className="img-fluid" />
                        </h5>
                    </div>
                    <div className="card-footer text-muted">
                        <h4>type: {item.type}</h4>
                        <p>Exp: {item.base_experience}</p>
                    </div>
                </div>

            </div>
        </React.Fragment>
    )
};

export default WinnerPokeCard;