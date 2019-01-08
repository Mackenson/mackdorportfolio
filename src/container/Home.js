
import React, { Component } from 'react';
import '../App.css';
import video from "../video/video.mp4"
import '../css/Home.css';
import Nav from "./Nav";
import Header from "./Header";

class Home extends Component {
  render() {
    return (
      <div>
        <Nav
          logoTitle="MD"
        />
        <header className="v-header container">
          <div className="v-fullSreen">
            <video className="video-container video-container-overlay" autoPlay={true} loop muted={true}>
              <source src={video} type="video/mp4" />
            </video>
          </div>
          <div className="v-overlay"></div>
          <div className="v-text">
            <Header
              title="Mackenson Dorancy Portfolio"
              button="My Projects"
            />
          </div>
      </header>
      </div>
    );
  }
}

export default Home;
