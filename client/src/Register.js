import React, { Component } from 'react';
import axios from 'axios';

export default class Register extends Component {
  state = {
    username: "",
    password: "",
  }
  handleChange = event => {
    this.setState({[event.target.name]: event.target.value})
  }
  handleSubmit = event => {
    event.preventDefault();
    axios.post("http://localhost:5000/api/users", this.state)
      .then(user => {
        console.log(user);
        this.setState({
          username: "",
          password: "",
        })
        this.history.push('/login')
      })
      .catch(error => {
        console.log(error);
      })
  }
  render() {
    return (
      <div>
        <h2>Register</h2>
        <form onSubmit={this.handleSubmit}>
          <label>Username: </label>
          <input
            name="username"
            placeholder="username"
            value={this.state.username}
            onChange={this.handleChange} />
          <input
            name="password"
            placeholder="password"
            value={this.state.password}
            onChange={this.handleChange} />
          <button onSubmit={this.handleSubmit} type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}