import React, { Component } from 'react';
import '../css/Project.css';
import { Link } from 'react-router';
import nature from "../img/nature.jpg"
import see from "../img/seeuup.jpg"
import etomon from "../img/etomon.jpg"
import phood from "../img/phood.png"
import { Card, CardImg, CardBody, CardTitle } from 'reactstrap';
import Fade from 'react-reveal/Fade';

const project = [
       {
        'link': 'https://damp-earth-88250.herokuapp.com/',
        'name': 'Picasso',
        'photo': nature,
        'description': 'Picasso is a painting app as an Artist you will be able ' +
        'to upload drawing and have other people review the drawing for you with ' +
        'a title, description and 5 stars'
      },
      {
        'link': 'https://www.etomon.com/',
        'name': 'Etomon',
        'photo': etomon,
        'description': 'Etomon is a learning platfrom as a students you will ' +
        'look for a tutor to help you with homework or projects'
    },
     {
      'link': 'https://phoodsolutions.com/',
      'name': 'Phood',
      'photo': phood,
      'description': 'Phood is a waste tracking software to help company with ' +
      'tracking their waste and show them a better solution to cut the waste an half.'
    }
]

class Project extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false
    }
    this.onMouseEnterHandler = this.onMouseEnterHandler.bind(this);
  }

  onMouseEnterHandler () {
    this.setState({
        show: !this.state.show
    });
  }

  render() {
    const getProject = project.map((item)=>{
      return(
        <a href={item.link} target="_blank"
          onMouseEnter={this.onMouseEnterHandler}
          onMouseLeave={this.onMouseEnterHandler}
          >
          <Card className='first-box'>
            <CardBody>
              <CardTitle>{item.name}</CardTitle>
              <CardImg className="img-card" src={item.photo} alt="Card image cap" />
                <Fade left cascade collapse when={this.state.show}>
                  {item.description}
                </Fade>
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
