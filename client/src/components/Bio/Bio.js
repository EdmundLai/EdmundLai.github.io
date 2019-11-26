import React from 'react';
import edmund from './edmund.jpg';
import './Bio.css';

class Bio extends React.Component {
  render() {
    return(
      <div className="Bio">
        <div className="BioText">
          <p>Hi, I'm Edmund!</p>
          <p>
            I'm passionate about creating code that helps make people's lives easier.
          </p>
          <p>
            I'm a web developer, musician, and always curious to learn more about the world we live in.
          </p>
          <p>
            I'm also interested in game development and games in general, so I enjoy making projects that can help people improve their gameplay or tilt a little less.
          </p>
        </div>
        <div className="BioImg">
          <img src={edmund} alt="Edmund Lai"/>
        </div>
      </div>
    );
  }
}

export default Bio;