import React, { Component } from 'react';


export default class User extends Component {
  constructor(props) {
    super(props)
    this.state = {
      date: this.props.clock,
      greeting: ""
    }
  }

  componentDidMount() {
    // Make HTTP reques with Axios
    let curHr = this.props.clock.getHours()
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
        <h1>{this.state.greeting} {this.props.user}!</h1>
      </div>
    );
  }
}



