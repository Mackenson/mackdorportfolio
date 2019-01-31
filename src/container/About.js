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
    var myIndex = 0;
// TODO: make this better
  function show() {
    var i;
    var x = document.getElementsByClassName("slides");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}
    // TODO: x[myIndex] is underfine
      // x[myIndex-1].style.display = "block";
    setTimeout(show, 2000); // Change image every 2 seconds
  }
    return (
      <div>
        <Nav />
        <div>
          <div>
            <img onClick={show()} className="slides" src={mack1} />
            <img onClick={show()} className="slides" src={mack2} />
            <img onClick={show()} className="slides" src={mack3} />
            <img onClick={show()} className="slides" src={mack4} />
          </div>
        </div>
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
