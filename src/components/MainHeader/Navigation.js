import React, { useContext } from "react";

import classes from "./Navigation.module.css";
import AuthContext from "../../store/auth-context";

const Navigation = () => {
  // Context Hook gets the context and returns variable to be used
  const ctx = useContext(AuthContext);
  return (
    // // Returns a function with context as parameter that returns JSX code
    // <AuthContext.Consumer>
    //   {(ctx) => {
    //     return (
    <nav className={classes.nav}>
      <ul>
        {ctx.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <button onClick={ctx.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
    //     );
    //   }}
    // </AuthContext.Consumer>
  );
};

export default Navigation;
