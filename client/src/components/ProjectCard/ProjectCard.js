import React from "react";
import "./ProjectCard.css";

var classNames = require("classnames");

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
    const cardType =
      this.state.windowWidth < 1280 ? "CardMobile" : "CardStandard";

    const classContainer = classNames("ProjectCard", cardType);

    const projTitle =
      cardType === "CardMobile" ? <h3>{this.props.title}</h3> : <></>;

    const projImage = (
      <div className="ProjectImage">
        <a href={this.props.projLink}>
          <img src={this.props.imgsrc} alt={this.props.title} />
        </a>
      </div>
    );

    const projDescription =
      cardType === "CardMobile" ? (
        <div className="DescriptionBody">{this.props.description}</div>
      ) : (
        <div className="ProjectDescription">
          <h3>{this.props.title}</h3>
          <div className="DescriptionBody">{this.props.description}</div>
        </div>
      );

    return (
      <div className={classContainer}>
        {projTitle}
        {projImage}
        {projDescription}
      </div>
    );
  }
}

export default ProjectCard;
