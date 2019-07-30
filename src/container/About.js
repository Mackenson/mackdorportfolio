import React, { Component } from 'react';
import $ from 'jquery';
import 'jquery-ui';
import Nav from './Nav'
import '../css/About.css';
import mack1 from '../img/mack1.jpg';
import mack2 from '../img/mack2.jpg';
import mack3 from'../img/mack3.jpg';
import mack4 from'../img/mack4.jpg';

class About extends Component {

  render() {
    return (
      <div>
        <Nav />
        <header>
          <h1 id="main-title">Makenson Dorancy</h1>
          <div id="text">
            <p>
              I am a junior full-stack web developer. As much as I like working in
              the backend, fetching data from databas, setting up api end point,
              saving user informations in database. I have a big passions
              for front-end. I enjoy design and empliments new features.
              Outside of work I enjoy travel to new places and enjoy new foods.
            </p>
            <div id='img-box'>
              <img src={mack2} className='img-about' />
              <img src={mack3} className='img-about' />
              </div>
          </div>
        </header>
      </div>
    );
  }
}

export default About;
