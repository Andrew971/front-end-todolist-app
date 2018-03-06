import axios from 'axios'

class Auth {
  constructor() {
    const token = localStorage.getItem('token')
    this.token = token
    this.apiUrl = 'https://backend-todo-list.herokuapp.com/'
  }

  isAuthenticated = () => {
    return this.token ? true : false
  }

  authenticate(username, password, cb) {
    //Use axios to post the username/password to the server
    axios.post('http://localhost:8080/login', {
      username,
      password
    }).then((response) => {
      //If we get a token, update isAuthenticated/token to indicate that
      //the user is now authenticated. Call the callback.
      if(response.data.token) {
        console.log(this.isAuthenticated)

        //this.isAuthenticated = true
        this.token = response.data.token
        console.log(this.token)
        console.log(this.isAuthenticated)
        localStorage.setItem('token',response.data.token)
        cb(true)
      } else {
        cb(false)
      }
    })
  }
  //Signout method - signs out the user, and calls a signout endpoint on
  //the server. 
  signout(token, cb) {
    axios.get(this.apiUrl, {
      headers: {
        'Authorization': token
      }
    }).then((response) => {
      //Reset the authentication properties and token to indicate
      //the user is not logged in. 
      //this.isAuthenticated = false
      this.token = null
      localStorage.removeItem('token')
      cb(response.data)
    })
  }
  //Signup method - signs up a user on the server
  signup(username, password, cb) {
    axios.post(this.apiUrl+'signup', {
      username,
      password
    }).then((response) => {
      cb(response.data)
    })
  }
}

export default new Auth()

