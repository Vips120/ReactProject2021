import React, { Component } from 'react';
import Form from './form';
import MultiForm from './multiform';
import BoxForm from './box.form';
class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        {/* <Form /> */}
        {/* <MultiForm /> */}
        <BoxForm />
      </React.Fragment>
    );
  }
};

export default App;
