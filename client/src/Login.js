import React, { Component } from 'react';
import axios from 'axios';

export default class Login extends Component {
  state = {
    token: "",
    username: "",
    password: "",
  }
  handleChange = event => {
    this.setState({[event.target.name]: event.target.value})
  }
  handleSubmit = event => {
    const { username, password } = this.state;
    event.preventDefault();
    axios.post("http://localhost:5000/api/login", { username, password })
      .then(response => {
        console.log(response)
        localStorage.setItem("token", response.data.token)
        this.props.history.push('/')
      })
      .catch(error => {
        console.log(error);
      })
  }
  render() {
    return(
      <div>
        <h2>Login!</h2>
        <form onSubmit={this.handleSubmit}>
          <label>Username: </label>
          <input
            name="username"
            placeholder="username"
            value={this.state.username}
            onChange={this.handleChange}/>
          <label>Password: </label>
          <input
            name="password"
            placeholder="password"
            value={this.state.password}
            onChange={this.handleChange}/>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}
