import React, { useState } from "react";
import axios from 'axios';

const Login = (props) => {
 //2. Add whatever state nessiary for form functioning. 
  const [credentials, setCredentials] = useState({username: "Lambda", password: "School"})
  const [error, setError] = useState("");

  const handleChange = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value      
    });
  };

  const login = e => {
    e.preventDefault();
//4. If either the username or password is not entered, display the following words with the p tag provided: Username or Password not valid.    
    if (!credentials.username || !credentials.password) {
      return(setError("Username or Password not valid."));
    }
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  // const error = "";
  //replace with error state
    axios.post('http://localhost:5000/api/login', credentials)
      .then(res => { console.log("login response: ", res);
  //5. If the username / password is equal to Lambda / i<3Lambd4, save that token to localStorage.
  // ABOVE CREDENTIALS DO NOT RETURN A TOKEN; ONLY A 403 ERROR!
        localStorage.setItem("token", res.data.payload);
        props.history.push('/bubble');
      })
      .catch(err => {
         setError("Error logging in");
      })

  };

  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <div data-testid="loginForm" className="login-form">
        {/* <h2>Build login form here</h2> */}
      </div>
{/* //1. Build a form containing a username and password field. */}
      <form onSubmit={login}>
{/* //3. MAKE SURE YOUR USERNAME AND PASSWORD INPUTS INCLUDE data-testid="username" and data-testid="password" */}
         <label htmlFor="username">Username: </label>
          <input
            type="text" 
            name="username" 
            data-testid="username" 
            id="username" 
            value={credentials.username}
            onChange={handleChange}
          />
          <label htmlFor="password">Password: </label>
          <input
            type="password" 
            name="password" 
            data-testid="password" 
            id="password" 
            value={credentials.password}
            onChange={handleChange}
          />
          <button id="submit" >Log in</button>
        </form>
      <p data-testid="errorMessage" className="error">{error}</p>
    </div>
  );
};

export default Login;