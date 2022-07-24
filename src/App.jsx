import React from "react";
import "./App.css";
import Hero from "./Components/Hero/Hero";
import Plans from "./Components/Plans/Plans";
import Programs from "./Components/Programs/Programs";
import Reasons from "./Components/Reasons/Reasons";
import Testimonials from "./Components/Testimonials/Testimonials";

const App = () => {
  return (
    <div className="App">
      <Hero />
      <Programs />
      <Reasons />
      <Plans />
      <Testimonials />
    </div>
  );
};

export default App;
