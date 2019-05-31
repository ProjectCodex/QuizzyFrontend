import React from 'react';
import styled from 'styled-components';
import { useAuthContext } from './providers/auth-context';

const StyledHeader = styled.header`
    color: black;
`;

const Header = () => {
    const {isLoggedIn} = useAuthContext()
    return (
        <StyledHeader>{isLoggedIn ? 'Welcome Back!' : 'Please Log In'}</StyledHeader>

    )
}

export default Header;
