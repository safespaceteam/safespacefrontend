import React from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import SignIn from "./signin";
import Register from "./signup";
import Profile from "./profile";

const Routes = props => {
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="contact">Contact</NavLink>
      </nav>
      <section>
        <Switch>
          <Route path="/register" component={Register} />
          <Route path="/login" component={SignIn} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </section>
    </div>
  );
};

export default Routes;
