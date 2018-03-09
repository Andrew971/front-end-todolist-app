import React, { Component } from 'react';
import axios from 'axios';


export default class User extends Component {
  constructor(props) {
    super(props)
    this.state = {
      date: this.props.clock,
      greeting: "",
      user:''
    }
    this.apiUrl = 'http://localhost:8080/'

  }
  componentWillMount=()=>{
    const token = localStorage.getItem('token')
    axios.post(this.apiUrl, null, {
      headers: {
        'Authorization': token
      }
    })
      .then((res) => {
        this.setState({
          user: res.data.username
        })
      })
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
    
  }

  render() {

    return (
      <div className="container" align="center">
        <h1>{this.state.greeting} {this.state.user}!</h1>
      </div>
    );
  }
}



