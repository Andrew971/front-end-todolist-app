import React from 'react';

const TodoForm = ({ addTodo }) => {
  let input
    return (
      <form onSubmit={(e) => {
        e.preventDefault();
        addTodo(input.value);
        input.value = '';
      }}>
  
        <input type="text" className="form-control col-md-12" ref={type => {
          input = type;
        }} placeholder="What is your plan for today?"/>
        <br />
      </form>
    );
  };


  export default TodoForm;