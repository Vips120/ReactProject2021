import React from 'react';
import Machine from './machine';
import Numpicker from './numpicker';
import './index.css';
class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        {/* <Numpicker /> */}
        <Machine
          slot1='🍓'
          slot2='🍓'
          slot3='🍓'
        />
        <Machine
          slot1='🍪'
          slot2='🍪'
          slot3='🍓'
        />
        <Machine
          slot1='🧁'
          slot2='🧁'
          slot3='🧁'
        />
      </React.Fragment>
    );
  };
};
export default App;
