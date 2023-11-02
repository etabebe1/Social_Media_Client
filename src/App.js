import { React, useContext } from "react";


import Home from "./pages/Home/HomePage";
import Profile from "./pages/Profile/ProfilePage";
import Login from "./pages/Login/LoginPage";
import Signup from "./pages/Signup/Signup";

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

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {user ? <Home></Home> : <Login></Login>}
        </Route>
        <Route path="/login">
          {user ? <Redirect to="/" /> : <Login></Login>}
        </Route>
        <Route path="/Signup">
          {user ? <Redirect to="/" /> : <Signup></Signup>}
        </Route>
        <Route path="/profile/:username">
          <Profile></Profile>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
