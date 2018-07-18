import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// components
import Signup from './components/sign-up'
import Login from './components/login-form'
import Add from './components/add'
import Home from './components/hom.js';

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path = '/' component = {Home} />
        <Route exact path = '/add' component = {Add} />
        <Route exact path = '/login' component = {Login} />
        <Route exact path = '/signup' component = {Signup} />
      </Switch>
    </div>
  </Router>
);

export default App;
