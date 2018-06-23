import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Login from "./Login";
import Register from "./Register";
import Jokes from "./Jokes";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/register">Register</Link></li>
        </ul>
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/" component={Jokes} />
      </div>
    );
  }
}

export default App;
