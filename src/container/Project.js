import React, { Component } from 'react';
import '../css/Project.css';
import { Link } from 'react-router';
import nature from "../img/nature.jpg"
import see from "../img/seeuup.jpg"
import etomon from "../img/etomon.jpg"
import phood from "../img/phood.png"
import { Card, CardImg, CardBody, CardTitle } from 'reactstrap';

const project = [
       {
        'link': 'https://damp-earth-88250.herokuapp.com/',
        'name': 'Picasso',
        'photo': nature
      },
      {
        'link': 'https://www.etomon.com/',
        'name': 'Etomon',
        'photo': see
    },
     {
      'link': 'https://phoodsolutions.com/',
      'name': 'Phood',
      'photo': phood
    }
]
class Project extends Component {
  render() {
    const getProject = project.map((item)=>{
      return(
        <a href={item.link} target="_blank">
          <Card className='first-box'>
            <CardBody>
              <CardTitle>{item.name}</CardTitle>
              <CardImg className="img-card" src={item.photo} alt="Card image cap" />
            </CardBody>
          </Card>
      </a>
      );
    })
    return (
      <div>
        <div id='top-box'>
          <h1>My Latest Work</h1>
          <p>Strong relationships based upon trust and respect.<br />
              I strive to exceed my clients expectations,
              delivering cutting edge web technologies that suprise and inspire.
          </p>
        </div>
          {getProject}
      </div>
    );
  }
}

export default Project;
