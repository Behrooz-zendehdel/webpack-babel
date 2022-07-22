import React from "react";
import "./App.css";
import images from "./assets/green.png";
const App = () => {
  return (
    <div className="App">
      <h1>react app - {process.env.NODE_ENV}</h1>
      <img src={images} alt="name" />
    </div>
  );
};

export default App;
