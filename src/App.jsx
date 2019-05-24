import React, { useEffect, useReducer, createContext, useContext } from 'react';
import styled from 'styled-components';
import Header from './Header.jsx';
import {AuthProvider, useAuth} from './providers/auth-context';
import LoginPage from './pages/login/login';
import './App.css';

const App = () => {

    return (
        <div>
            <AuthProvider>
                <Header />
                {/* <LoginButton/> */}
                <LoginPage/>
            </AuthProvider>
        </div>
    )
}

export default App;