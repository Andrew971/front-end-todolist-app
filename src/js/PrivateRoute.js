import React from 'react';
import { Route, Redirect } from 'react-router-dom'
import Auth from './Authentication.js'

// let userToken = localStorage.getItem('token')

//PrivateRoute - used as a wrapper for a Route so that we can check
//whether to display the provided component, or redirect to the login route
const PrivateRoute = ({ component: Component, render: Render, ...restOfProps }) => (
  //Return a Route. ...rest is all of the props minus the component that we
  //have retrieved through object desructuring. All props in ...rest are passed
  //to the Route component. Use render to check if user is authenticated
  <Route {...restOfProps} render={(routeProps) => {
    //Check if the user is authenticated. 
    return (Auth.isAuthenticated()
      //Check if a component was provided (will not be null). If a component
      //was provided, render the component, otherwise, call the
      //render function and pass along the props from the private route, as
      //well as the props from React Router
      ? Component 
        ? <Component {...routeProps} /> 
        : Render({...restOfProps, ...routeProps})
      : <Redirect to={{
        pathname: '/login',
        state: { from: routeProps.location }
    }} />
    )   
  }} />
)


export default PrivateRoute;