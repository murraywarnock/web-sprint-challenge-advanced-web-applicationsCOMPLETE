import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import axiosWithAuth from './helpers/axiosWithAuth';
import PrivateRoute from './components/PrivateRoute';
import BubblePage from './components/BubblePage';

import Login from "./components/Login";
import "./styles.scss";

function App() {

  const logout = () => {
    // const token = localStorage.getItem("token")
    localStorage.removeItem("token");
    window.location.href = "/login";

  };

  return (
    <Router>
      <div className="App">
        <header>
          Color Picker Sprint Challenge
          <a data-testid="logoutButton" href="/" onClick={logout}>logout</a>
        </header> 
        <Switch>
          <PrivateRoute exact path="/bubble" component={BubblePage} />
          {/* <Route path="/login" component={Login} /> */}
          <Route exact path="/" component={Login} />
          <Route exact path="/" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

//Task List:
//1. Render BubblePage as a PrivateRoute
//2. Build the logout button to remove the localStorage Item.