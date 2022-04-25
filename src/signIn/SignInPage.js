
import { useRef, useState } from 'react';
import usersList from './usersList';
import './RegisterPage.css'

import {
    BrowserRouter as Router,
    Link,
    Navigate,
    Route
} from "react-router-dom";

var userNameInput = "";
function SignPage2() {
    const [isCorrect, setIsCorrect] = useState(false);
    function CheckInput(event) {
        // get values from the inputs.
        var flag = true;
        const form = document.getElementById('form');
        const userName = document.getElementById('userName');
        const password = document.getElementById('password');

        userNameInput = userName.value.trim();
        const passwordInput = password.value.trim();

        if (userNameInput === '') {
            setErrorFor(userName, 'UserName cannot be blank');
            flag = false;
        }
        else {
            const formControl = userName.parentElement;
            formControl.className = 'form-control design';
        }
        if (passwordInput === '') {
            setErrorFor(password, 'Password cannot be blank');
            flag = false;
        }
        else {
            const formControl = password.parentElement;
            formControl.className = 'form-control design';
        }
        if (userNameInput !== '' && passwordInput !== '' && !isUser(userNameInput, passwordInput)) {
            setErrorFor(userName, 'User doesnot exist')
            setErrorFor(password, 'User doesnot exist');
            flag = false;
        }
        if (flag === true) {
            setIsCorrect(true);
        }

    }

    function setErrorFor(input, message) {
        const formControl = input.parentElement;
        const small = formControl.querySelector('small');
        small.innerText = message;
        formControl.className = 'form-control design error';
    }

    const isUser = function (name, password) {
        return usersList.some(code => { return (code.username === name && code.password === password); });
    }


    return (
        <div id='containerAll'>
            {(isCorrect) ?
                (<Navigate to="/chat" state={userNameInput} />) :
                (
                    <div className="container" id='container'>
                        <div className="header">
                            <h3>Sign in</h3>
                        </div>
                        <div className="form" id="form">
                            <div className='form-control design'>
                                <label>Username</label>
                                <input type="text" id='userName'></input>
                                <small>Error message</small>
                            </div>

                            <div className='form-control design'>
                                <label>Password</label>
                                <input type="password" id="password"></input>
                                <small>Error message</small>
                            </div>

                            <button onClick={CheckInput}>Submit</button>
                            <div className="signup">
                                Not registered? <a href="/Register">Click here</a> to sign up
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default SignPage2;
