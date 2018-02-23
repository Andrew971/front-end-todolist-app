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
      data: [],
      flag: false
    }
    this.todo = 'http://localhost:8080/todo'

  }
  // Lifecycle method
  componentWillMount() {
    // Make HTTP reques with Axios
    axios.get(this.todo)
      .then((res) => {
        // Set state with result
        let Filter = res.data.filter((item)=>{
          return item.status !== true
        })
        this.setState({ data: Filter });
      });
  }

  // Add todo handler
  addTodo(val) {
    let Input = {
      id: Date.now(),
      text: val,
      status: false,
      date: Date.now()
    }
    axios.post(this.todo, Input)
      .then((res) => {
        let Filter = res.data.filter((item)=>{
          return item.status !== true
        })
        this.setState({ data: Filter });
      })
  }

  // Handle remove
  handleRemove(id) {

    axios.delete(this.todo + '/' + id)
      .then((res) => {
        let Filter = res.data.filter((item)=>{
          return item.status !== true
        })
        this.setState({ data: Filter });
      })
  }

  // Handle checkbox
  handleCheckBox(id) {
    let items = this.state.data.filter((item) => {
      if (item.id === id) {
        return item.status = !item.status
      }
    })

    const state = this.state.data.find((list) => {
      if (list.id === id)
        return list
    })

    axios.post(this.todo + '/' + id, { status: state.status })
      .then((res) => {
        
        let Filter = res.data.filter((item)=>{
          return item.status !== true
        })
        this.setState({
          data: Filter
        });
      })

  }

  //Handle the clear all tasks button 
  handleClearOut() {

    const deleteList = this.state.data.filter((list) => {
      return list.status === true;
    });

    deleteList.forEach((test) => {
      axios.delete(this.todo + '/' + test.id)
        .then((res) => {
          this.setState({ data: res.data })
        })
    })
  }

  //Handle the slection All Active or Complete
  changeList(num) {
    axios.get(this.todo)
      .then((res) => {
        // Set state with result
        if (num === 2) {
          this.setState({ data: res.data })
          let newlist = this.state.data.filter((list) => {
            return list.status === false;
          });
          this.setState({ 
            data: newlist,
            flag:false
           });
        }

        if (num === 3) {
          this.setState({ data: res.data })
          let newlist = this.state.data.filter((list) => {
            return list.status === true;
          });
          this.setState({ 
            data: newlist,
            flag:true
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
            <TodoTitle todoCount={this.state.data.length} todoComplit={this.state.data} flag={this.state.flag} />
            <TodoForm addTodo={this.addTodo.bind(this)} />
            <TodoList
              todos={this.state.data}
              remove={this.handleRemove.bind(this)}
              toggle={this.handleCheckBox.bind(this)}
              ClearOut={this.handleClearOut.bind(this)}
              changeList={this.changeList.bind(this)}
            />
          </div>
        </div>
      </div>
    );
  }
}


