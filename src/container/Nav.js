import React, { Component } from 'react';
import '../css/Nav.css';
class Nav extends Component {
  render() {
    return (
      <div>
        <header>
          <nav>
            <h1 className="logo">Welcome to Mackenson Dorancy Profolio</h1>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Projects</a></li>
              <li><a href="#">contact</a></li>
            </ul>
          </nav>
        </header>
      </div>
    );
  }
}

export default Nav;
