import React, { Component } from 'react';

export default class ClockApp extends Component {
   
    render() {
      return (
        <div className="container time" align="center">
          <h1>{this.props.clock.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</h1>
          
          <h2>{this.props.clock.toLocaleDateString([], { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</h2>
        </div>
      );
    }
  }
  


  
