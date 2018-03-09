import React, { Component } from 'react';
import axios from 'axios';
import TodoTitle from './TodoTitle'
import TodoForm from './TodoForm'
import TodoList from './TodoList'


console.clear();

export default class TodoApp extends Component {
  constructor(props) {
    // Pass props to parent class
    super(props);
    // Set initial state
    this.state = {
      userId: '',
      data: [],
      flag: false
    }
    // this.apiUrl = 'http://localhost:8080/'
    this.apiUrl = 'https://backend-todo-list.herokuapp.com/'
  }


  getdata = () => {

  }
  // Lifecycle method
  componentWillMount() {
    // Make HTTP reques with Axios

    const token = localStorage.getItem('token')
    axios.post(this.apiUrl, null, {
      headers: {
        'Authorization': token
      }
    })
      .then((res) => {
        let Filter = res.data.todos.filter((item) => {
          return item.Status !== true
        })
        this.setState({
          data: Filter,
          userId: res.data.userid
        })
      })
  }

  // Add todo handler
  addTodo(val) {
    let Input = {
      text: val,
      status: false,
    }

    axios.post(this.apiUrl + "todo", { Input, parentId: this.state.userId }
    )
      .then((res) => {
        let Filter = res.data.filter((item) => {
          return item.Status !== true
        })
        this.setState({
          data: Filter,
          flag: false
        });
      })
  }

  // Handle remove
  handleRemove=(id) => {
    axios.post(this.apiUrl + "todo/" + id, { parentId: this.state.userId })
      .then((res) => {
        console.log(res.data)

        this.setState({ data: res.data });
      })
  }

  // Handle checkbox
  handleCheckBox(id) {
    const state = this.state.data.find((list) => {
        return list.id === id
    })

    axios.post(this.apiUrl + "todo/update/" + id, {
      parentId: this.state.userId,
      status: !state.status 
    })
      .then((res) => {

        let Filter = res.data.filter((item) => {
          return item.Status !== true
        })
        this.setState({
          data: Filter
        });
      })
  }

  //Handle the clear all tasks button 
  handleClearOut = () => {

    const deleteList = this.state.data.filter((list) => {
      return list.Status === true;
    });

    deleteList.forEach((test) => {
      axios.post(this.apiUrl + "todo/" + test.id, { parentId: this.state.userId }).then((res) => {
        this.setState({ data: res.data })
      })
    })
  }

  //Handle the slection All Active or Complete
  changeList = (num) => {

    axios.post(this.apiUrl + 'todo/get', { parentId: this.state.userId })
      .then((res) => {
        if (num === 2) {
          this.setState({ data: res.data })
          let newlist = this.state.data.filter((list) => {
            return list.Status === false;
          });
          this.setState({
            data: newlist,
            flag: false
          });
        }

        if (num === 3) {
          this.setState({ data: res.data })
          let newlist = this.state.data.filter((list) => {
            return list.Status === true;
          });
          this.setState({
            data: newlist,
            flag: true
          });
        }
      });
  }

  render() {
    // Render JSX
    return (
      <div>
        <div className="container">
          <div className="col-md-6 col-md-offset-3" align="center">
            <TodoTitle
              todoCount={this.state.data.length}
              todoComplit={this.state.data}
              flag={this.state.flag}
            />
            <TodoForm addTodo={this.addTodo.bind(this)} />
            <TodoList
              todos={this.state.data}
              remove={this.handleRemove.bind(this)}
              handleCheckbox={this.handleCheckBox.bind(this)}
              ClearOut={this.handleClearOut.bind(this)}
              changeList={this.changeList}
            />
          </div>
        </div>
      </div>
    );
  }
}


