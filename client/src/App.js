import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Nav from './Components/Nav';
import SignUp from './Components/Nav';
import Login from './Components/Login';
import Jokes from './Components/Jokes';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <h3>Dad Jokes</h3>
        <Route path='/signup' component={SignUp} />
        <Route path='/login' component={Login} />
        <Route path='/jokes' component={Jokes} />
      </div>
    );
  }
}

export default App;