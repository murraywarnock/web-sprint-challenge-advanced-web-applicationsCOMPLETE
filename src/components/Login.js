import React, { useEffect, useState } from "react";
// import { useHistory as history } from 'react-dom';
import axios from 'axios';

const Login = (props) => {
  
  const [credentials, setCredentials] = useState({username: "Lambda", password: "School"})

  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  // const error = "";
  //replace with error state
  const [error, setError] = useState("");

  const handleChange = e => {
    setCredentials({
        ...credentials,
        [e.target.name]: e.target.value      
  });
  };

  const login = e => {
    e.preventDefault();

    axios.post('http://localhost:5000/api/login', credentials)
      .then(res => {
        localStorage.setItem("token", res.data.payload);
        props.history.push('/bubble');
      })
      .catch(err => {
        console.log("Axios login error: ", err);
        // setError(err);
      })

  };

  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <div data-testid="loginForm" className="login-form">
        <h2>Build login form here</h2>
      </div>
      <form onSubmit={login}>
         <label htmlFor="username">Username: </label>
          <input
            type="text"
            name="username"
            data-testid="username"
            value={credentials.username}
            onChange={handleChange}
          />
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            name="password"
            data-testid="pasword"
            value={credentials.password}
            onChange={handleChange}
          />
          <button>Log in</button>
        </form>
      <p data-testid="errorMessage" className="error">{error}</p>
    </div>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state nessiary for form functioning.
//3. MAKE SURE YOUR USERNAME AND PASSWORD INPUTS INCLUDE data-testid="username" and data-testid="password"
//4. If either the username or password is not entered, display the following words with the p tag provided: Username or Password not valid.
//5. If the username / password is equal to Lambda / i<3Lambd4, save that token to localStorage.