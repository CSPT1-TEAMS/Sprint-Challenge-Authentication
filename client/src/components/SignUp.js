import React, { Component } from 'react';
import axios from 'axios';
import { Button, Form, Input, Container } from 'reactstrap';

const jwt = require('jsonwebtoken');
const SECRET = 'this is not a secret';

const makeToken = (user) => {
    const payload = {
        sub: user._id,
        name: user.username,
        race: user.race
    }
    const options = {
        expiresIn: '24h'
    }
    return jwt.sign(payload, SECRET, options);
}

class SignUp extends Component {
    state = {
        username: '',
        password: ''
    };

    inputChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }
    submitHandler = (event) => {
        event.preventDefault();
        axios.post('http://localhost:5000/api/users', this.state)
            .then(user => {
                const token = makeToken(user);
                localStorage.setItem('token', token);
                this.props.history.push('/jokes');
            })
            .catch(err => {
                console.log(err);
            })
    }
    render() {
        return (
            <Container>
                <div>
                    <h5>Create an Account</h5>
                    <Form onSubmit={this.submitHandler}>
                        <Input className='input' type="username" name="username" id="exampleUsername" placeholder="username" onChange={this.inputChange} />
                        <Input className='input' type="password" name="password" id="examplePassword" placeholder="password" onChange={this.inputChange} />

                        <Button className='button' type='submit'>Submit</Button>
                    </Form>
                </div>
            </Container>
        );

    }

}

export default SignUp;