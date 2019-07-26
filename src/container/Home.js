
import React, { Component } from 'react';
import '../App.css';
import video from "../video/video.mp4"
import '../css/Home.css';
import Nav from "./Nav";
import Header from "./Header";
import Contact from "./Contact";
import Project from "./Project";

import * as Scroll from 'react-scroll';
import { Link, Element , Events, animateScroll as scroll } from 'react-scroll'


// const scroll     = Scroll.animateScroll;
class Home extends Component {

  scrollTo () {
    scroll.scrollTo(900);
  }

  render() {
    return (
      <div>
        <Nav
          logoTitle= 'MD'
          button = { this.scrollTo }
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
              title="Mackenson Dorancy"
              button = { this.scrollTo }
            />
          </div>
      </header>
      <Project />
      <Contact />
      </div>
    );
  }
}

export default Home;
