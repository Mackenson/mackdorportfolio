import React, { Component } from 'react';
import Nav from './Nav'
import '../css/About.css';
class About extends Component {
  render() {
    return (
      <div>
        <Nav />
        <header>
          <h1 id="main-title">Makenson Dorancy</h1>
          <h4>About Me</h4>
          <div id="text">
            <p>
              I am a junior full-stack web developer. As much as I like working in
              the backend, fetching data from databas, setting up api end point,
              saving user informations in database. I have a big passions
              for front-end. I enjoy design and empliments new features.
            </p>
          </div>

        </header>
      </div>
    );
  }
}

export default About;
