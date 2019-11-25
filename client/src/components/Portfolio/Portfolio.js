import React from 'react';

class Portfolio extends React.Component {
  render() {
    return(
      <div className="Portfolio">
        <h2>
          Portfolio
        </h2>
        <ul>
          <li>
            <a href="https://lol-stats-analysis.herokuapp.com/">League of Legends Stats App</a>
          </li>
          <li>
            <a href="https://github.com/EdmundLai/League-of-Legends-Ping-App">League of Legends Ping Checker</a>
          </li>
          <li>
            <a href="https://github.com/EdmundLai/react-blog">Sample Food Blog</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Portfolio;