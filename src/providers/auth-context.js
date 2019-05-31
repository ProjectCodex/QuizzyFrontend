import React from "react";
import {login as fakeLogin, logout as fakeLogout} from '../fakeBackend'
import {localStorage} from "../utils"

const AuthContext = React.createContext();

function useAuthContext() {
  const context = React.useContext(AuthContext);
  if (!context) throw new Error("Must use AuthContext within AuthProvider");
  return context;
}

function AuthProvider(props) {
  const [isLoggedIn, setLoggedIn] = React.useState(false);

  React.useEffect(() => {
    const token = localStorage.getAuthToken()
    if (token) setLoggedIn(true)
  }, [])

   async function login(username, password) {
    const {data: {token}} = await fakeLogin(username, password);
    setLoggedIn(true);
    localStorage.setAuthToken(token);
  }

  async function logout() {
    await fakeLogout()
    setLoggedIn(false);
    localStorage.clear();
  }

  const context = {
    login,
    logout,
    isLoggedIn
  };
  // const value = React.useMemo(() => context, [context])
  return <AuthContext.Provider value={context} {...props} />;
}

export { AuthProvider, useAuthContext };
