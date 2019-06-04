import React from "react";
import Particles from "react-particles-js";
import "./App.css";
import particlesConfig from "./assets/particlesConfig.json";
import Bubble from "./components/Bubble";

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
      <div>
        <div className="Particles">
          <Particles params={particlesConfig} width={width} height={height} />
        </div>
        <div className="App">
          <Bubble />
          <div className="App-content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
            asperiores obcaecati cumque perferendis repudiandae eum aliquam
            vitae eveniet error illum ducimus totam, pariatur neque fugiat a
            iusto! Quasi, adipisci recusandae?
          </div>
        </div>
      </div>
    );
  }
}

export default App;
