import React, { Component } from 'react';
import '../css/Nav.css';
class Nav extends Component {
  render() {
    const navList = ["Home", "About", "Projects", "Contact"];
    const list = navList.map((item)=>{
      return(
        <li><a href={"#" + item}>{item}</a></li>
      );
    })
    return (
      <div>
        <nav>
          <h1 className="logo">{this.props.logoTitle}</h1>
          <ul>
            {list}
          </ul>
        </nav>
      </div>
    );
  }
}

export default Nav;
