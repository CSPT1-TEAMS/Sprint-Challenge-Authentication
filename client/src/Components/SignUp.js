import React, { Component } from "react";
import axios from 'axios';
import { Button, Form, Input, Container } from "reactstrap";

class SignUp extends Component {
    state = {
        username: "",
        password: "",
    };

    inputChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/users', this.state)
            .then(user => {
                // const token = makeToken(user);
                // console.log('TOKEN', token);
                // localStorage.setItem('token', token)
                this.props.history.push('/jokes')
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        return (
            <Container>
                <div>
                    <h5>Create an Account</h5>
                    <Form onSubmit={ this.submitHandler }>
                        <Input className='input' type="username" name="username" id="exampleUsername" placeholder="username" onChange={ this.inputChange } />
                        <Input className='input' type="password" name="password" id="examplePassword" placeholder="password" onChange={ this.inputChange } />
                    
                        <Button className='input' type='submit'>Submit</Button>
                    </Form>
                </div>
            </Container>
        );

    }
}
export default SignUp;
