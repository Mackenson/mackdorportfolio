import React, { Component } from 'react';
import Name from '../components/Name';
import Email from '../components/Email';
import Message from '../components/Message';
import Nav from './Nav'
import '../css/Contact.css';
import axios from 'axios'


class Contact extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      message: ''
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleMessage = this.handleMessage.bind(this);
  }

  handleName(event) {
    let newName = event.target.value
      this.setState({ name: newName })
  }

  handleEmail(event) {
    let newEmail = event.target.value
      this.setState({ email: newEmail })
  }

  handleMessage(event) {
    let newMessage = event.target.value
      this.setState({ message: newMessage })
  }

  async handleFormSubmit (e){
    e.preventDefault()
  try {
    let formPayload = {
      'name': this.state.name,
      'email': this.state.email,
      'message': this.state.message
    }

    const {name, email, message} = this.state

    const response = axios.post('/api/contact', { name, email, message });
    if (response) {
      this.setState({
        name: '',
        email: '',
        message: ''
      })
      console.log('awesome');
    }

  } catch (e) {
    console.log(e);
  }
}

  render() {
    return(
      <div>
        <Nav />
        <h1 id='contact-h1'>Contact Me</h1>
        <div id='main-form'>
          <div id='first-part'>
            <h3>Contact Information</h3>
            <hr />
          <p> Mackenson Dorancy<br /> Medford, MA <br /> 02155</p>
            <hr />
          <p><b>E:</b>mackensondorancy@yahoo.com <br /><b>P:</b>857-249-4847</p>
          </div>
          <form className="contact-form" onSubmit={this.handleFormSubmit}>
            <Name
              label="Name"
              name={this.state.name}
              handleName={this.handleName}
            />
            <Email
              label="Email"
              email={this.state.email}
              handleEmail={this.handleEmail}
            />
            <Message
              label="Message"
              message={this.state.message}
              handleMessage={this.handleMessage}
            />
            <input className="button" type="submit" value="Send Message" />
          </form>
        </div>
      </div>
    )
  }
}

export default Contact;
