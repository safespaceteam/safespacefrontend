import React from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import SignIn from "./signin";

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
          {/* <Route path="/signup" component={SignUp} /> */}
          <Route path="/signin" component={SignIn} />
        </Switch>
      </section>
    </div>
  );
};

export default Routes;
