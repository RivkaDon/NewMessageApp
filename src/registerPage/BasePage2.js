import './BasePage2.css'
import LogIn from './LogIn';
import { useRef, useState } from 'react';
import usersList from './usersList';

import {
  BrowserRouter as Router,
  Link,
  Navigate,
  Route
} from "react-router-dom";

import ChatPage from '../ChatPage/ChatPage';

function BasePage2() {

  const inputUserName = useRef(null);
  const inputPassword = useRef(null);


  const [isCorrect, setIsCorrect] = useState(false);

  const onClickCheckExist = function (event) {
    console.log('1');
    console.log(isUser(inputUserName.current.value, inputPassword.current.value))

      if(isUser(inputUserName.current.value, inputPassword.current.value))
      {
        console.log('2');
        setIsCorrect(true);
      }
  }

  const isUser = function(name, password) {
    console.log(name);
    console.log(password);

    return usersList.some(code => {return(code.username === name && code.password === password);} );
  }
  

  return (
    <div>
      {(isCorrect) ?
        (<Navigate to="/chat" />) :
        (
          <div className="container" id='signInContainer'>
            <form>
              <div className="row mb-3 needs-validation">
                <label htmlFor="inputUsername3" className="col-sm-2 col-form-label">Username</label>
                <div className="col-sm-10">
                  <input ref={inputUserName} type="text" className="form-control" id="inputUsername3" required></input>
                  <div className="valid-feedback">
                    Looks good!
                  </div>
                </div>
              </div>
              <div className="row mb-3">
                <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                <div className="col-sm-10">
                  <input ref={inputPassword} type="password" className="form-control" id="inputPassword3" required></input>
                </div>
              </div>
              <div className="row mb-3">
              </div>
              <button type="submit" className="btn btn-primary" onClick={onClickCheckExist}>Login </button>
              <div className="signup">
                Not registered? <a href="#">Click here</a> to register
              </div>
            </form>
          </div>
        )
      }
    </div>
  )
}

export default BasePage2;
