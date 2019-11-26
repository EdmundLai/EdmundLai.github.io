import React from 'react';
import './ProjectCard.css';

class ProjectCard extends React.Component {
  render() {
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

export default ProjectCard;