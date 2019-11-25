import React from 'react';
import { HashRouter as Router, Link, Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Edmund's Blog</h1>
          <nav>
            <ul>
              <li>
                <Link to="/bio">Bio</Link>
              </li>
              <li>
                <Link to="/portfolio">Portfolio</Link>
              </li>
            </ul>
          </nav>
        </header>
        <div className="App-body">
          <Switch>
            <Route path="/bio">
              <Bio />
            </Route>
            <Route path="/portfolio">
              <Portfolio />
            </Route>
          </Switch>
        </div>

        <div className="App-footer">
          <p>Footer content</p>
        </div>
      </div>
    </Router>
  );
}

class Bio extends React.Component {
  render() {
    return(
      <div className="Bio">
        Here is my bio section.
      </div>
    );
  }
}

class Portfolio extends React.Component {
  render() {
    return(
      <div className="Portfolio">
        Here is my portfolio.
      </div>
    );
  }
}

export default App;
