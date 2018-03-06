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

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      date: new Date(), 
      user:''
    };

  }

  SignIn(val) {
    // const Name = {name: val}
    localStorage.setItem("username", val)
    this.setState({user: val})
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );

    let username = localStorage.getItem('username')
    this.setState({user: username});
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
          <UserSign SignIn={this.SignIn.bind(this)}/>
        } />
        
        <Route exact path="/login" render={() => 
          <UserLog SignIn={this.SignIn.bind(this)} />
        } />

        <Route path="/todo" render={() => 
          <UserApp clock={this.state.date} user={this.state.user}/>
        } />

        <Route path="/todo" render={() => 
          <TodoApp />
        } />

      </div>
    </Router>
    );
  }
}


