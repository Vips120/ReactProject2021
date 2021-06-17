import React from 'react';
import '../App.css';
import LooserPokeCard from './looser.pokercard';
import WinnerPokeCard from './winner.pokecard';
class Pokedex extends React.Component {
    looser_title = 'LOOSER';
    winner_title = 'WINNER';

    render() {
        if (!this.props) return <h1>LOADING...</h1>;
        let imgUrl = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';
        return (
            <React.Fragment>
                <div className="container">
                    <h3 className="text-center" style={{ color: 'royalblue', color: 'red' }}>{this.looser_title}</h3>
                    <p className="text-center">
                        Total Experience: {this.props.exp1}
                    </p>
                    <div className="row">
                        {
                            this.props.pokeDex.map((item) => {
                                return (
                                    <LooserPokeCard key={item.id} item={item} imgUrl={imgUrl} />
                                );
                            })

                        }
                    </div>
                </div>
                <hr />
                <div className="container">
                    <h3 className="text-center" style={{ color: 'royalblue', color: 'green' }}>{this.winner_title}</h3>
                    <p className="text-center">
                        Total Experience: {this.props.exp2}
                    </p>
                    <div className="row">
                        {

                            this.props.pokeCard.map((item) => {
                                return (
                                    <WinnerPokeCard key={item.id} item={item} imgUrl={imgUrl} />
                                );
                            })

                        }
                    </div>
                </div>
            </React.Fragment>
        );
    };
};

export default Pokedex;