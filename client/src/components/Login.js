import React, { Component } from 'react';
import { Button, Form, Input, Container } from 'reactstrap';
import axios from 'axios';
import './login.css';

class Login extends Component {
    state = {
        username: '',
        password: ''
    }

    inputChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    submitHandler = (event) => {
        event.preventDefault();
        axios.post('http://localhost:5000/api/login', this.state)
            .then(user => {
                localStorage.setItem('token', user.data.token);
                this.props.history.push('/jokes');
            })
            .catch(err => {
                console.log(err)
            })
    }
    render() {
        return (
            <Container className='container'>
                <h5>Login</h5>
                <Form onSubmit={this.submitHandler}>

                    <Input className='input' type="username" name="username" id="exampleEmail" placeholder="username" onChange={this.inputChange} />

                    <Input className='input' type="password" name="password" id="examplePassword" placeholder="password" onChange={this.inputChange} />

                    <Button className='button'>Submit</Button>

                </Form>
            </Container>
        );

    }

}

export default Login;