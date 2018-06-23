import React, { Component } from 'react';
import axios from 'axios';

class Jokes extends Component {
    state = {
        jokes: []
    }
    componentDidMount() {
        const token = localStorage.getItem('token');
        if (token === null) return;

        axios.get('http://localhost:5000/api/jokes',
            { headers: { 'Authorization:': token } })
            .then(jokes => {
                this.setState({ jokes: jokes.data })
            })
            .catch(err => {
                console.log(err);
            })
    }
    render () {
        return (
            <ul>
                { this.state.jokes.map(jokes => {
                    return (
                        <div>
                            <li>{ jokes.setup }</li>
                            <li>{ jokes.punchline }</li>
                        </div>
                    )
                })}
            </ul>
        )
    }
}

export default Jokes;