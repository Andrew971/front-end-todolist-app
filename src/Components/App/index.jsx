import React, { Component } from 'react';
import TodoApp from './Todo/TodoApp.jsx';
import ClockApp from './Clock/ClockApp.jsx';
import UserApp from './User/UserApp.jsx';
import UserSign from './User/UserSign.jsx';
import UserLog from './User/UserLog.jsx';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import PrivateRoute from '../../js/PrivateRoute'
import axios from 'axios';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      user: ''
    };
    // this.apiUrl = 'http://localhost:8080/'
    this.apiUrl = 'https://backend-todo-list.herokuapp.com/'
  }

  
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );

    let username = localStorage.getItem('username')
    this.setState({ user: username });
  }

  componentWillUnmount() {
    clearInterval(this.timerID);


  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (<Router>

      <div align="center">
        <ClockApp clock={this.state.date} />

        <Route exact path="/" render={() =>
          <UserSign />
        } />

        <Route exact path="/login" render={() =>
          <UserLog />
        } />

        <Route path="/todo" render={() =>
          <UserApp clock={this.state.date} user={this.state.user} />
        } />

        <PrivateRoute path="/todo" render={() =>
          <TodoApp />
        } />

      </div>
    </Router>
    );
  }
}


