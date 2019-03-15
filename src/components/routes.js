import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./login";
import Register from "./register";
import Profile from "./profile";
import Navigation from "./navigation";

const Routes = props => {
  return (
    <div>
      <Navigation />
      <section>
        <Switch>
          <Route path="/" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </section>
    </div>
  );
};

export default Routes;
