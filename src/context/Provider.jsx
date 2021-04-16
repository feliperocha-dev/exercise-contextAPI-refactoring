import React, { useState } from "react";
import Context from "./Context";

function Provider({ children }) {
  const [cars, setCars] = useState({
    red: false,
    yellow: false,
    blue: false,
  });
  const [signalColor, setSignalColor] = useState('red');

  const moveCar = (name, move) => {
    setCars({
      ...cars,
      [name]: move,
    });
  }

  const changeSignal = (color) => {
    setSignalColor(color)
  }

  return (
    <Context.Provider value={{ moveCar, cars, changeSignal, signalColor }}>
      { children }
    </Context.Provider>
  );
}

export default Provider;
