import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { authActions } from '../actions/auth.actions'

function Login() {

  const [inputs, setInputs] = useState({
    username: '',
    password: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const { username, password } = inputs;
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs(inputs => ({ ...inputs, [name]: value }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);
    if (username && password) {
        dispatch(authActions.login(username, password));
    }
  }

  return (
    <div style={{width: '100%', height: '855px', display: 'flex', alignItems: 'center', justifyContent: 'center',}}>
      <form style={{width: '390px', height: '35%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', borderStyle: 'solid', borderWidth: '1px'}}>
        <h1>Login</h1>
        <div style={{width: '100%', height: '80%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around',}}>
          <div style={{width: '90%', height: '30%', display: 'flex', alignItems: 'center', justifyContent: 'space-around',}}>
            <label style={{fontSize: '20px'}}>Username</label>
            <input style={{fontSize: '15px'}}
                   type='text' name='username' value={username} onChange={handleChange}></input>
            {submitted && !username &&
              <div>Username is required</div>
            }
          </div>
          <div style={{width: '90%', height: '30%', display: 'flex', alignItems: 'center', justifyContent: 'space-around',}}>
            <label style={{fontSize: '20px'}}>Password</label>
            <input style={{fontSize: '15px'}}
                   type='password' name='password' value={password} onChange={handleChange}></input>
            {submitted && !password &&
              <div>Password is required</div>
            }
          </div>
          <div style={{width: '70%', height: '30%', display: 'flex', alignItems: 'center', justifyContent: 'space-around',}}>
            <button style={{width: '120px', height: '35px'}} onClick={handleSubmit}>
              Login
            </button>
            <button style={{width: '120px', height: '35px'}} >
              <Link to="/register" style={{display: 'flex', width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center', color: '#000', textDecoration: 'none'}}>Register</Link>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;