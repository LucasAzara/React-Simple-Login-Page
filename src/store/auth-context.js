import React, { useState, useEffect } from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  // Dummy function for autocompletion
  onLogout: () => {},
  onLogin: (email, password) => {},
});

// function to handle state login
export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  //   Only updated isLoggedIn if there is a change in localstorage
  useEffect(() => {
    const storedLoggedIn = localStorage.getItem("isLoggedIn");

    if (+storedLoggedIn) {
      setIsLoggedIn(true);
    }
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");

    setIsLoggedIn(false);
  };

  const loginHandler = () => {
    setIsLoggedIn(true);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
