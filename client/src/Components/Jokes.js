import React, { Component } from 'react';
import axios from 'axios';

import './jokes.css'

class Jokes extends Component {
    state = {
        jokes: [],

    }
    componentWillMount() {
        const token = localStorage.getItem('token');
        if (token === null) return;

        axios.get('http://localhost:5000/api/jokes',
            { headers: { Authorization:token } })
            .then(jokes => {
                this.setState({ 
                    jokes: jokes.data })
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
                        <div key={jokes.id} id = 'jokes'>
                            <li key={jokes.setup}>{ jokes.setup }</li>
                            <li key={jokes.punchline}>{ jokes.punchline }</li>
                        </div>
                    )
                })}
            </ul>
        )
    }
}

export default Jokes;