import React from "react";
import Particles from "react-particles-js";
import "./App.css";
import particlesConfig from "./assets/particlesConfig.json";

class App extends React.Component {
  state = { width: window.innerWidth, height: window.innerHeight };
  resizeTimer;

  componentWillMount() {
    this.updateDimensions();
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  updateDimensions = () => {
    clearTimeout(this.resizeTimer);
    this.resizeTimer = setTimeout(() => {
      this.setState({ width: window.innerWidth, height: window.innerHeight });
    }, 150);
  };

  render() {
    const { width, height } = this.state;
    return (
      <div className="App">
        <Particles params={particlesConfig} width={width} height={height} />
        <div className="App-content">Content will render here</div>
      </div>
    );
  }
}

export default App;
