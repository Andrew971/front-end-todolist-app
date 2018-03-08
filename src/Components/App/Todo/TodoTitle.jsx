import React from 'react';

const TodoTitle = ({ todoCount, todoComplit, flag }) => {
  let arr= todoComplit.filter((item)=>{
    return item.Status === true
  })
  let message= ""
  if((flag===false)||(arr.length <1)){
   message = (todoCount > 1) ?
      `You have ${todoCount} tasks` :
      `You have ${todoCount} task`; 
     }
  else{
    message = (todoCount > 1) ?
    `You have ${arr.length} tasks completed` :
    `You have ${arr.length} task completed`; 
  }

    return (
      <div align="center">
        <h3>{message}</h3>
      </div>
    )
  
  
  }


  export default TodoTitle;