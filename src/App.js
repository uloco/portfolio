import _ from "lodash";
import React, { useEffect, useState } from "react";
import Particles from "react-particles-js";
import "./App.css";
import Flower from "./components/Flower";
import particlesConfig from "./particlesConfig.json";

const App = () => {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const handleResize = _.debounce(() => {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      });
    }, 150);

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

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
