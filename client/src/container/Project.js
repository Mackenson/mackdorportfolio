import React, { Component } from 'react';
import '../css/Project.css';
class Project extends Component {
  render() {
    function projectTitle() {
      console.log("yes let's go");
    }
    return (
      <div>
        <div id='main-box'>
          <div className='first-box' onClick={projectTitle}>
            <h1>Picasso</h1>
          </div>
          <div className='first-box'>
            <h1>Etomon</h1>
          </div>
          <div className='first-box'>
            <h1>SeeUUP</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Project;
