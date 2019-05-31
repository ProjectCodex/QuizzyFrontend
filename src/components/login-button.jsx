import React from 'react';
import styled from 'styled-components';

import { useAuthContext } from '../providers/auth-context';

const LoginButton = (props) => {
    const {isLoggedIn} = useAuthContext()

    const Button = styled.button`
        color: rebeccapurple;
        background-color: white;
        border: solid 1px rebeccapurple;
        padding: 3px;
        border-radius: 3px;
        transition: color 0.2s, background 0.2s;
        width: 100px;
        &:hover {
            color: white;
            background: rebeccapurple;
        }
    `

    return (
        <Button>
            {isLoggedIn ? 'Logout' : 'Login'}
        </Button>
    )
}

export default LoginButton;