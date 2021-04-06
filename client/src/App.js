import React from "react";
import { HashRouter as Router, Link, Switch, Route } from "react-router-dom";
import Bio from "./components/Bio/Bio";
import Portfolio from "./components/Portfolio/Portfolio";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Edmund Lai</h1>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/portfolio">Portfolio</Link>
              </li>
            </ul>
          </nav>
        </header>
        <div className="App-body">
          <Switch>
            <Route path="/portfolio">
              <Portfolio />
            </Route>
            <Route exact path="/">
              <Bio />
            </Route>
          </Switch>
        </div>

        <div className="App-footer">&#x24B8; 2021 Edmund Lai</div>
      </div>
    </Router>
  );
}

export default App;
