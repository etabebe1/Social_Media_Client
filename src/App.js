import React from "react";

// importing React Router

import Home from "./pages/Home/HomePage";
import Profile from "./pages/Profile/ProfilePage";
import Login from "./pages/Login/LoginPage";
import Register from "./pages/Register/Register";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/register">
          <Register></Register>
        </Route>
        <Route path="/profile/:username">
          <Profile></Profile>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
