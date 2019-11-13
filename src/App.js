import React from "react";
import "./App.css";
import Flower from "./components/Flower";

class App extends React.Component {
  state = { width: window.innerWidth, height: window.innerHeight };
  resizeTimer;

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
      <div>
        <div className="Particles">
          {/* <Particles params={particlesConfig} width={width} height={height} /> */}
        </div>
        <div className="App">
          <Flower />
        </div>
      </div>
    );
  }
}

export default App;
