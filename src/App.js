import React from "react";
import Particles from "react-particles-js";
import "./App.css";
import Flower from "./components/Flower";
import particlesConfig from "./particlesConfig.json";
import { useWindowSize } from "./hooks/useResize";

const App = () => {
  const dimensions = useWindowSize(150);
  const { width, height } = dimensions;

  return (
    <div>
      <div className="Particles">
        <Particles params={particlesConfig} width={width} height={height} />
      </div>
      <div className="App">
        <Flower />
      </div>
    </div>
  );
};

export default App;
