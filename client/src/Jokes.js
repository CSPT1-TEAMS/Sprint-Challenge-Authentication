import React, { Component } from 'react';
import axios from 'axios';

export default class Jokes extends Component {
  state = {
    jokes: [],
    loggedIn: false,
  }
  componentWillMount() {
    const token = localStorage.getItem('token')
    axios.get('http://localhost:5000/api/jokes', {headers: {Authorization: token }})
      .then(response => {
        console.log(response)
        this.setState({
          jokes: response.data,
          loggedIn: true,
        })
      })
      .catch(err => {
        this.history.push('/login')
        console.log(err);
      })
  }
  render() {
    const {loggedIn, jokes} = this.state;
    return(
      <div>
       {loggedIn
        ? jokes.map(joke => {
            return (
              <div>
                {joke.setup}
                {joke.punchline}
              </div>
            )
        })
        : <p>Loading.....</p>
       }
      </div>
    )
  }
}