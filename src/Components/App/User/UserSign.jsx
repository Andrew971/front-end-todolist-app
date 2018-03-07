import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import Auth from '../../../js/Authentication.js'

export default class Signup extends Component {
  constructor() {
    super()
    this.state = {
      redirectToReferrer: false
    }
  }
  Signup = () => {
    const { username, password } = this.signupForm
    Auth.signup(username.value, password.value, (succes) => {
      this.setState({
        redirectToReferrer: true,
      })
    })
  }

  render() {
    const { redirectToReferrer } = this.state

    if (redirectToReferrer === true) {
      return <Redirect to='/login' />
    }
    return (
      <div className="container userlog">
        <div className="col-md-6 col-md-offset-3" align="center">
          <form ref={self => this.signupForm = self}>
            <input type="text" className="form-control col-md-12" placeholder="Type your name here" name="username" />
            <input type="password" className="form-control col-md-12" placeholder="Type your password here" name="password" />
          </form>
          <button onClick={() => {this.Signup()}}>signup</button>
        </div>
      </div>
    );
  };
}

