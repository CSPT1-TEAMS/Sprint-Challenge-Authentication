import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';

import './nav.css';

const Nav = props => {
    const signOut = () => {
        localStorage.removeItem('token')
    }
    return (
        <div>
            <Container id='nav'>
                <Link to='/signup' className='link'> Sign Up </Link>
                <Link to='/login' className='link'>  Login </Link>
                <Link to='/jokes' className='link'> Jokes </Link>
                <Link to='/login' className='link' onClick={ signOut }>Sign Out</Link>
            </Container>
        </div>
    )
}

export default Nav;