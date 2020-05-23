import React from "react";
import Particles from "react-particles-js";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import "./App.css";
import { useWindowSize } from "./hooks/useWindowSize";
import BitsPage from "./pages/BitsPage";
import HomePage from "./pages/HomePage";
import particlesConfig from "./particlesConfig.json";

const App = () => {
  const dimensions = useWindowSize(150);
  const { width, height } = dimensions;

  return (
    <Router>
      <div>
        <div className="Particles">
          <Particles params={particlesConfig} width={width} height={height} />
        </div>
        <div className="App">
          <Switch>
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
            <Route path="/home">
              <HomePage />
            </Route>
            <Route path="/bits">
              <BitsPage />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
