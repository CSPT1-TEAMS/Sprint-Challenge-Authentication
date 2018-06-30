import React, { Component } from 'react'
import axios from 'axios'

import Form from './Form'
import Jokes from './Jokes'

class App extends Component {
  state = {
    username: '',
    password: '',
    loggedIn: false,
    jokes: []
  }

  handleChange = e => {
    e.preventDefault()
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = async e => {
    try {
      e.preventDefault()
      const { password, username } = this.state
      const response = await axios.post('http://localhost:5000/api/login', { username, password })
      if (response.data.token) {
        localStorage.setItem('token', response.data.token)
        this.setState({ loggedIn: true })
        this.getJokes()
      }
    } catch (err) {
      console.log(err)
    }

  }

  getJokes = async () => {
    try {
      const token = localStorage.getItem('token')
      const response = await axios.get('http://localhost:5000/api/jokes', { headers: { Authorization: token } })
      const { data: jokes } = response
      this.setState({ jokes })
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    const { jokes, loggedIn } = this.state
    if (loggedIn && jokes) {
      return <Jokes jokes={jokes} />
    } else {
      return <Form {...this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
    }
  }
}

export default App
