import React, { Component } from 'react';
import '../css/Header.css';
class Header extends Component {
  render() {
    return (
      <div id='header-text'>
          <h1 className="title">{this.props.title}</h1>
          <a onClick={this.props.button}>Projects</a>
      </div>
    );
  }
}

export default Header;
