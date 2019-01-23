import React, { Component } from 'react';
import '../css/Project.css';
import nature from "../img/nature.jpg"
import see from "../img/seeuup.jpg"
import etomon from "../img/etomon.jpg"

class Project extends Component {
  render() {
    return (
      <div>
        <div id='main-box'>
          <div className='first-box'>
            <span className='h1'><h1>Picasso</h1></span>
            <img className='image' src={nature} alt='nature photo' />
          </div>
          <div className='first-box'>
            <span className='h1'><h1>Etomon</h1></span>
            <img className='image' src={see} alt='' />
          </div>
          <div className='first-box'>
            <span className='h1'><h1>SeeUUP</h1></span>
            <img className='image' src={etomon} alt='' />
          </div>
        </div>
      </div>
    );
  }
}

export default Project;
