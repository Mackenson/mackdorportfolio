import React, { Component } from 'react';
import '../css/Project.css';
import { Link } from 'react-router';
import nature from "../img/nature.jpg"
import see from "../img/seeuup.jpg"
import etomon from "../img/etomon.jpg"
import phood from "../img/phood.png"

class Project extends Component {
  render() {
    return (
      <div>
        <div id='top-box'>
          <h1>My Latest Work</h1>
          <p>Strong relationships based upon trust and respect.<br />
              I strive to exceed my clients expectations,
              delivering cutting edge web technologies that suprise and inspire.
          </p>
        </div>
          <div id='main-box'>
            <a href='https://damp-earth-88250.herokuapp.com/' target="_blank">
              <div className='first-box'>
                <span className='h1'><h1>Picasso</h1></span>
                <img className='image' src={nature} alt='nature photo' />
              </div>
          </a>
          <a href='https://www.etomon.com/' target="_blank">
            <div className='first-box'>
              <span className='h1'><h1>Etomon</h1></span>
              <img className='image' src={see} alt='' />
            </div>
          </a>
          <a href='https://phoodsolutions.com/' target="_blank">
            <div className='first-box'>
              <span className='h1'><h1>Phood</h1></span>
              <img className='image' src={phood} alt='' />
            </div>
          </a>


        </div>
      </div>
    );
  }
}

export default Project;
