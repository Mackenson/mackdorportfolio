import React, { Component } from 'react';
import Name from '../components/Name';
import Email from '../components/Email';
import Message from '../components/Message';
import '../css/Contact.css';


class Contact extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      message: ''
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
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


  handleFormSubmit(event) {
    event.preventDefault()
    let formPayload = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message
    }
    // this.props.addNewReview(formPayload)
  }

  render() {
    return(
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

    )
  }
}

export default Contact;
