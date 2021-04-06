import React from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import "./Portfolio.css";

// import { HashRouter as Router, Link, Switch, Route } from "react-router-dom";

import LOLStatsPicture from "../../assets/lolstatsnew.PNG";
import PingDemoPicture from "../../assets/ping_app_demo.PNG";
import ContentKingPicture from "../../assets/content-king.png";
import DiscordClonePicture from "../../assets/discordclone_channel.PNG";

class Portfolio extends React.Component {
  render() {
    let desc1 = (
      <>
        <p>
          Website dedicated to providing useful information for each game to
          League of Legends players looking to analyze their gameplay.
        </p>
        <p>
          Provides important stats such as Kills, Deaths, Assists, and gold and
          experience earned to analyze overall performance.
        </p>
        <p>Developed using React and Node.JS.</p>
      </>
    );
    let desc2 = (
      <>
        <p>
          Application developed to monitor latency to League of Legends servers
          outside of game, so that players can check if their internet
          connection is stable and won't impair their ingame performance.
        </p>
        <p>
          Uses built in TCP/IP ping command in operating system to connect to
          the server IP address to check connection quality.
        </p>
        <p>Developed using Python and Tkinter.</p>
      </>
    );
    const desc3 = (
      <>
        <p>
          A content aggregator website that shows the top posts of each week
          from Reddit for each user's chosen topics.
        </p>
        <p>Content retrived using the Snoowrap library for JavaScript.</p>
      </>
    );

    const desc4 = (
      <>
        <p>A Discord Clone made using React.</p>
        <p>
          Allows for users to chat to other users in servers and channels.
          Available for anyone to use if they create an account.
        </p>
        <p>
          Created using React for the frontend, and EF Core, SignalR, SQL
          Server, and .NET for the backend.
        </p>
      </>
    );

    return (
      <div className="Portfolio">
        <h2>Portfolio</h2>

        <ProjectCard
          imgsrc={PingDemoPicture}
          title="League of Legends Ping Checker"
          description={desc2}
          projLink="https://github.com/EdmundLai/League-of-Legends-Ping-App/"
        />
        <ProjectCard
          imgsrc={LOLStatsPicture}
          title="League of Legends Stats App"
          description={desc1}
          projLink="https://lol-stats-analysis.herokuapp.com/"
        />

        <ProjectCard
          imgsrc={ContentKingPicture}
          title="Content King"
          description={desc3}
          projLink="https://king-of-content.herokuapp.com/"
        />
        <ProjectCard
          imgsrc={DiscordClonePicture}
          title="Discord Clone"
          description={desc4}
          projLink="discordclonereact.azurewebsites.net/"
        />
        <p>
          All the code for my projects can be found at my{" "}
          <a href="https://github.com/EdmundLai">GitHub</a>.
        </p>
      </div>
    );
  }
}

export default Portfolio;
