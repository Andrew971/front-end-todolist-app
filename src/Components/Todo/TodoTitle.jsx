import React from 'react';

const TodoTitle = ({ todoCount, todoComplit, flag }) => {
  let arr= todoComplit.filter((item)=>{
    return item.status === true
  })
  let message= ""
  if(flag===false){
   message = (todoCount > 1) ?
      `You have ${todoCount} tasks` :
      `You have ${todoCount} task`; 
     }
  else{
    message = (todoCount > 1) ?
    `You have ${arr.length} tasks completed` :
    `You have ${arr.length} task completed`; 
  }
    // let message = (todoCount > 1) ?
    //   `You have ${arr.length}/${todoCount} things completed` :
    //   `You have ${arr.length}/${todoCount} thing completed`;
    return (
      <div align="center">
        <h3>{message}</h3>
      </div>
    )
  
  
  }


  export default TodoTitle;