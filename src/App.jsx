import React, { useEffect, useReducer, createContext, useContext } from 'react';
import styled from 'styled-components';
import Header from './Header.jsx';
import LoginPage from './pages/login/login';
import './App.css';

const App = () => {

    return (
        <div>
                <Header />
                {/* <LoginButton/> */}
                <LoginPage/>
        </div>
    )
}

export default App;