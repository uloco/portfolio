import React from "react";
import Particles from "react-particles-js";
import "./App.css";
import particlesConfig from "./particlesConfig.json";
import { useWindowSize } from "./hooks/useWindowSize";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import BitsPage from "./pages/BitsPage";

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
