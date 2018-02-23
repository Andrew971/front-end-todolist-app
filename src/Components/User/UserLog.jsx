import React from 'react';
import {Link} from 'react-router-dom'
const UserLog = ({ SignIn }) => {
  let name

    return (
      <div className="container userlog">
        <div className="col-md-6 col-md-offset-3" align="center">
        <form onSubmit={(e) => {
        e.preventDefault();
        SignIn(name.value);
        name.value = '';
      }}  action="/todo">
      <input type="text" className="form-control col-md-12" ref={type => {
          name = type;
        }} />        
      </form>

    <Link to="/todo"><h2>Press Enter and then click Here</h2></Link>


      </div>

</div>
    );
  };


  export default UserLog;