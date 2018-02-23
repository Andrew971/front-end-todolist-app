import React from 'react';
const UserSign = ({ SignIn }) => {
  let name

  return (
    <div className="container userlog">
      <div className="col-md-6 col-md-offset-3" align="center">
        <form onSubmit={(e) => {
          SignIn(name.value);
          name.value = '';
        }} action="/todo">
          <input type="text" className="form-control col-md-12" ref={type => {
            name = type;
          }} placeholder="Type your name here"/>
        </form>
      </div>
    </div>
  );
};


export default UserSign;