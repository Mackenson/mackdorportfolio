import React, { Component } from 'react';
import '../css/Header.css';
class Header extends Component {
  render() {
    return (
      <div>
        <header>
          <h1 className="title">{this.props.title}</h1>
          <a href="#project">{this.props.button}</a>
        </header>
      </div>
    );
  }
}

export default Header;
