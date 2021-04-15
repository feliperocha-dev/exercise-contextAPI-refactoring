import React, { Component } from 'react';
import './App.css';
import Cars from './Cars';
import MyContext from './context/Context';

const { Provider } = MyContext;

class App extends Component {
  constructor() {
    super();
    this.state = {
      cars: {
        red: false,
        blue: false,
        yellow: false,
        test: false,
      },
    };
    this.moveCar = this.moveCar.bind(this);
  }

  moveCar(name, side) {
    console.log(name, side)
    this.setState((prevState) => ({
      cars: {
        ...prevState.cars,
        [name]: side,
      },
    }));
  }

  render() {
    const { cars } = this.state;
    const carsObj = {
      moveCar : this.moveCar,
      cars,
    }
    return (
      <Provider value={ carsObj }>
        <Cars />
      </Provider>
    );
  }
}

export default App;
