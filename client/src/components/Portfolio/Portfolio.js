import React from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';
import './Portfolio.css';

class Portfolio extends React.Component {
  render() {
    let desc1 =
    <>
      <p>Website dedicated to providing useful information for each game to League of Legends players looking to analyze their gameplay.</p>
      <p>Provides important stats such as Kills, Deaths, Assists, and gold and experience earned to analyze overall performance.</p>
      <p>Developed using React and Node.JS.</p>
    </>;
    let desc2 = 
    <>
      <p>Application developed to monitor latency to League of Legends servers outside of game, so that players can check if their internet connection is stable and won't impair their ingame performance.</p>
      <p>Uses built in TCP/IP ping command in operating system to connect to the server IP address to check connection quality.</p>
      <p>Developed using Python and Tkinter.</p>
    </>
    return(
      <div className="Portfolio">
        <h2>
          Portfolio
        </h2>
        <ProjectCard 
          imgsrc="/lolstats2.png"
          title="League of Legends Stats App"
          description={desc1}
          projLink="https://lol-stats-analysis.herokuapp.com/"
        />
        <ProjectCard
          imgsrc="/ping_app_demo.png"
          title="League of Legends Ping Checker"
          description={desc2}
          projLink="https://github.com/EdmundLai/League-of-Legends-Ping-App/"
        />
      </div>
    );
  }
}

export default Portfolio;