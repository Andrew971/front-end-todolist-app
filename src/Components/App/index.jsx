import React, { Component } from 'react';
import TodoApp from './Todo/TodoApp.jsx';
import Clock from './Clock';
import UserApp from './User/UserApp.jsx';
import UserSign from './User/UserSign.jsx';
import UserLog from './User/UserLog.jsx';
import { Route} from 'react-router-dom'
import PrivateRoute from '../../js/PrivateRoute'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      user: ''
    };
   
  }
 
  
  componentDidMount=()=>{
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
    
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
    return (

      <div align="center">
        <Clock clock={this.state.date} />

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
    );
  }
}


