import React, { Component } from 'react';
import Form from './form';
import MultiForm from './multiform';
class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        {/* <Form /> */}
        <MultiForm />
      </React.Fragment>
    );
  }
};

export default App;
