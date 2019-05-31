import React, { useState } from "react";
import LoginButton from "../../components/login-button";
import TextField from "../../components/text-field";
import styled from "styled-components";
import { useAuthContext } from "../../providers/auth-context";

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const LoginPage = props => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { isLoggedIn, logout, login } = useAuthContext(); // Here

  const fireLogin = async event => {
    event.preventDefault();
    if (!isLoggedIn) {
      await login(username, password);
      setPassword("");
      setUsername("");
    } else {
      logout()
    }
  };

  return (
    <LoginForm onSubmit={fireLogin}>
      <TextField
        label="username"
        inputValue={username}
        setInputValue={setUsername}
      />
      <TextField
        label="password"
        inputValue={password}
        setInputValue={setPassword}
      />
      <LoginButton />
    </LoginForm>
  );
};

export default LoginPage;
