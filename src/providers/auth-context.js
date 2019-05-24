import React from 'react'

const AuthContext = React.createContext()


// I manage the auth state
function useAuthHook(){
    const [isLoggedIn, setLoggedIn] = React.useState(false)
    const login = () => console.log('I should dispatch')


    return { isLoggedIn, setLoggedIn, login}
}


function useAuthContext() {
  const context = React.useContext(AuthContext)
  if (!context) {
    throw new Error(`useAuth must be used within a AuthProvider`);
  }
  return context
}


function AuthProvider(props) {

    const { isLoggedIn, setLoggedIn, login } = useAuthHook();

//   const value = React.useMemo(() => [isLoggedIn, setLoggedIn, ], [isLoggedIn])
    return <AuthContext.Provider value={{ isLoggedIn, setLoggedIn, login }} {...props} />
}

export {AuthProvider, useAuthContext}

