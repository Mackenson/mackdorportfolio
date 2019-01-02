import React, { Component } from 'react';
import '../App.css';
import video from "../video/video.mp4"
import '../css/Home.css';

class Home extends Component {
  render() {
    return (
      <div>
        <header className="v-header container">
          <div className="v-fullSreen">
            <video className="video-container video-container-overlay" autoPlay={true} loop muted={true}>
              <source src={video} type="video/mp4" />
            </video>
          </div>
          <div className="v-overlay"></div>
          <div className="v-text">
            <h1>Welcome to Mackenson Dorancy Profolio</h1>
          </div>
      </header>
      </div>
    );
  }
}

export default Home;
