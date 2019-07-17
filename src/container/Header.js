import React, { Component } from 'react';
import '../css/Header.css';
class Header extends Component {
  render() {
    return (
      <div>
        <header>
          <h1 className="title">{this.props.title}</h1>
          <a onClick={this.props.button}>Projects</a>
        </header>
      </div>
    );
  }
}

export default Header;
