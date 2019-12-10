import React from 'react';
import './Bio.css';

class Bio extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      windowWidth: window.innerWidth
    }

    this.handleWindowResize = this.handleWindowResize.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleWindowResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowResize);
  }

  handleWindowResize() {
    this.setState({
      windowWidth: window.innerWidth
    });
  }

  render() {
    let isMobile = this.state.windowWidth < 640 ? true : false;
    let isTablet = this.state.windowWidth < 950 ? true : false;

    let containerClass = "BioContainer";

    if(isMobile) {
      return(
        <div className="Bio">
          <h2>About Me</h2>
          <div className="BioContainerMobile">
            <div className="BioImg">
              <img src="/edmund.jpg" alt="Edmund Lai"/>
            </div>
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
          </div>
        </div>
      );
    } else {
      if(isTablet) {
        containerClass = "BioContainerTablet";
      }
      return(
        <div className="Bio">
          <h2>About Me</h2>
          <div className={containerClass}>
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
              <img src="/edmund.jpg" alt="Edmund Lai"/>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Bio;