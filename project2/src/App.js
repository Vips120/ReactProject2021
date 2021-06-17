import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Pokedex from './components/pokedex';
import Random from './components/rand.number';


class App extends React.Component {
  static defaultProps = {
    items:
      [
        { id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
        { id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
        { id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
        { id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
        { id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
        { id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
        { id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },
        { id: 133, name: 'Eevee', type: 'normal', base_experience: 65 }
      ]
  };
  render() {
    let arr1 = [];
    let arr2 = [...this.props.items];
    while (arr1.length < arr2.length) {
      let arrIdx = Math.floor(Math.random() * arr2.length);
      let arrItem = arr2.splice(arrIdx, 1)[0];
      arr1.push(arrItem);
    };
    let exp1 = arr1.reduce((acc, result) => acc + result.base_experience, 0);
    let exp2 = arr2.reduce((acc, result) => acc + result.base_experience, 0);
    return (
      <React.Fragment>
        <Random />
        <Pokedex pokeDex={arr1} pokeCard={arr2} exp1={exp1} exp2={exp2} />
      </React.Fragment>
    );
  };
};

export default App;
