import React from 'react';



const TodoList = ({ todos, remove, handleCheckbox, ClearOut, changeList }) => {
 
  const List = todos.map((todo) => {

    return (
      <div className="list-group-item row" key={todo.id}>
        <div className="col-md-2" align="center"><input id={todo.id} type="checkbox" onChange={() => { handleCheckbox(todo.id) }} checked={todo.Status} /></div>
        <div className="col-md-8" align="justify"><label htmlFor={todo.id} className={todo.Status === true ? "checkbox" : ''}>{todo.Text}</label></div>
        <div className="col-md-2" align="center"><a onClick={() => { remove(todo.id) }}><i className="far fa-trash-alt"></i></a></div>
      </div>);
  });

  let arr = todos.filter((todo) => {
    return todo.status === true
  })

  let text = (arr.length > 1) ?
    `clear ${arr.length} tasks` :
    "";
  return (
    <div className="list">
      <div className="option">
        <div onClick={() => { changeList(2) }}>Active</div>
        <div onClick={() => { changeList(3) }}>Complete</div>
      </div>
      <div className="list-group">{List}</div>
      <div className="clear" onClick={() => { ClearOut() }}>{text}</div>
    </div>

  );
}



export default TodoList;