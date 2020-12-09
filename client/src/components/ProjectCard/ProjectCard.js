import React from "react";
import "./ProjectCard.css";

class ProjectCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      windowWidth: window.innerWidth,
    };

    this.handleWindowResize = this.handleWindowResize.bind(this);
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleWindowResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowResize);
  }

  handleWindowResize() {
    this.setState({
      windowWidth: window.innerWidth,
    });
  }

  render() {
    let isMobile = this.state.windowWidth < 1000 ? true : false;
    let isTablet = this.state.windowWidth < 1200 ? true : false;

    let tabletClass = "";

    if (isMobile) {
      return (
        <div className="ProjectCardMobile">
          <h3>{this.props.title}</h3>
          <div className="ProjectImage">
            <a href={this.props.projLink}>
              <img src={this.props.imgsrc} alt={this.props.title} />
            </a>
          </div>
          <div className="DescriptionBody">{this.props.description}</div>
        </div>
      );
    } else {
      if (isTablet) {
        tabletClass = "CardTablet";
      }

      return (
        <div className={`ProjectCard ${tabletClass}`}>
          <div className="ProjectImage">
            <a href={this.props.projLink}>
              <img src={this.props.imgsrc} alt={this.props.title} />
            </a>
          </div>
          <div className="ProjectDescription">
            <h3>{this.props.title}</h3>
            <div className="DescriptionBody">{this.props.description}</div>
          </div>
        </div>
      );
    }
  }
}

export default ProjectCard;
