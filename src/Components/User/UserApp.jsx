import React, { Component } from 'react';
// import axios from 'axios';


export default class User extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: this.props.user,
      date: this.props.clock,
      greeting: ""
    }
    this.apiUrl = this.props.api
  }

  componentDidMount() {
    // Make HTTP reques with Axios
    let curHr = this.state.date.getHours()
    if (curHr < 12) {
      this.setState({ greeting: 'Good morning' })
    } else if (curHr < 18) {
      this.setState({ greeting: 'Good afternoon' })
    } else {
      this.setState({ greeting: 'Good evening' })
    }
    let username = localStorage.getItem('username')
    this.setState({ user: username });
  }

  render() {

    return (
      <div className="container" align="center">
        <h1>{this.state.greeting} {this.state.user}!</h1>
      </div>
    );
  }
}



