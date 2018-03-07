import React, { Component } from 'react';
import { Link,Redirect } from 'react-router-dom'
import Auth from '../../../js/Authentication.js'


export default class Signup extends Component {
  constructor() {
    super()
    this.state = {
      redirectToReferrer: false,
      errorMessage: ''
    }
  }
  login = () => {
    const { username, password } = this.loginForm
    Auth.authenticate(username.value, password.value, (success) => {
      if (success) {
        //If user successfully authenticates, redirect to the 
        //page that sent them to the login page
        this.setState({
          redirectToReferrer: true
        })
      } else {
        //Set the state to have an error message
        this.setState({
          errorMessage: 'Invalid Login Credentials'
        })
      }
    })
  }

  render() {
    const { redirectToReferrer } = this.state

    if (redirectToReferrer === true) {
      return <Redirect to='/todo' />
    }
    return (

      <div className="container userlog">

        <div className="col-md-6 col-md-offset-3" align="center">
          <form ref={self => this.loginForm = self}>
            <input type="text" className="form-control col-md-12" placeholder="Type your name here" name="username" />
            <input type="password" className="form-control col-md-12" placeholder="Type your password here" name="password" />
          </form>
          <button onClick={() => { this.login() }}>Log in</button>
          {
          (this.state.errorMessage)
            ? <p style={{ color: 'red', fontWeight: 'bold' }}>failed to log in</p>
            : ''
        }
          <Link to="/"><h2>Signup</h2></Link>


        </div>

      </div>
    );
  };
}