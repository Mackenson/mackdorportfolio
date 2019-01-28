import React, { Component } from 'react';
import '../css/Nav.css';
import { Link } from 'react-router';

class Nav extends Component {
  render() {
    const navList = ["Home", "About", "Projects", "Contact"];
    const list = navList.map((item)=>{
      return(
        <li><Link to={"/" + item}>{item}</Link></li>
      );
    })
    return (
      <div>
        <nav>
          <h1 className="logo">MD</h1>
          <ul>
            {list}
          </ul>
        </nav>
      </div>
    );
  }
}

export default Nav;
