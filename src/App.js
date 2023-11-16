import { React, useContext } from "react";

import Home from "./pages/Home/HomePage";
import Profile from "./pages/Profile/ProfilePage";
import Login from "./pages/Login/LoginPage";
import Signup from "./pages/Signup/Signup";
import Messenger from "./pages/messenger/Messenger";

// importing React Router form react-router-dom
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { user } = useContext(AuthContext);
  // console.log(user)

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {user ? <Home /> : <Login />}
        </Route>
        <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
        <Route path="/signup">{user ? <Redirect to="/" /> : <Signup />}</Route>
        <Route path="/messenger">
          {!user ? <Redirect to="/" /> : <Messenger />}
        </Route>
        <Route path="/profile/:username">
          <Profile />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
