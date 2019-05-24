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
  const { isLoggedIn, setLoggedIn, login } = useAuthContext();

  const fireLogin = event => {
      event.preventDefault();
    login(username, password);
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
