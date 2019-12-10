import React from 'react';
import './ProjectCard.css';

class ProjectCard extends React.Component {
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

    let isMobile = this.state.windowWidth < 500 ? true : false;

    if(isMobile) {
      return(
        <div className="ProjectCardMobile">
          <h3>{this.props.title}</h3>
          <div className="ProjectImage">
            <a href={this.props.projLink}>
              <img src={this.props.imgsrc} alt={this.props.title}/>
            </a>
          </div>
          <div className="DescriptionBody">
            {this.props.description}
          </div>
        </div>
      );
    } else {
      return(
        <div className="ProjectCard">
          <div className="ProjectImage">
            <a href={this.props.projLink}>
              <img src={this.props.imgsrc} alt={this.props.title}/>
            </a>
          </div>
          <div className="ProjectDescription">
            <h3>{this.props.title}</h3>
            <div className="DescriptionBody">
              {this.props.description}
            </div>
          </div>
        </div>
      );
    }
  }
}

export default ProjectCard;