import React from "react";
import "./Bio.css";

import BioPicture from "../../assets/edmund2.jpg";

import CallIcon from "@material-ui/icons/Call";
import EmailIcon from "@material-ui/icons/Email";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

var classNames = require("classnames");

class Bio extends React.Component {
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
    const containerClassType =
      this.state.windowWidth < 640
        ? "ContainerMobile"
        : this.state.windowWidth < 950
        ? "ContainerTablet"
        : "ContainerStandard";

    const containerClass = classNames("BioContainer", containerClassType);

    const mobileLink =
      containerClassType === "ContainerMobile" ? (
        <a href="tel:4252322309">
          <CallIcon fontSize="large" />
        </a>
      ) : (
        <></>
      );

    const bioContent =
      containerClassType === "ContainerMobile" ? (
        <>
          <BioImg />
          <BioText />
        </>
      ) : (
        <>
          <BioText />
          <BioImg />
        </>
      );

    return (
      <div className="BioPage">
        <div className="Bio">
          <h2>About Me</h2>
          <div className={containerClass}>{bioContent}</div>
          <p>
            Feel free to contact me below, or look at the code behind my
            projects.
          </p>
          <div className="SocialLinks">
            {mobileLink}
            <a href="mailto:edmund.lai.07@gmail.com">
              <EmailIcon fontSize="large" />
            </a>
            <a href="https://www.linkedin.com/in/edmund-lai-8b9112129/">
              <LinkedInIcon fontSize="large" />
            </a>
            <a href="https://github.com/EdmundLai">
              <GitHubIcon fontSize="large" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

const BioImg = () => (
  <div className="BioImg">
    <img src={BioPicture} alt="Edmund Lai" />
  </div>
);

const BioText = () => (
  <div className="BioText">
    <p>Hi, I'm Edmund!</p>
    <p>
      I'm passionate about creating code that helps make people's lives easier.
    </p>
    <p>
      I'm a web developer, musician, and always curious to learn more about the
      world we live in.
    </p>
  </div>
);

export default Bio;
