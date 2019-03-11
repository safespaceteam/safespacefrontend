import React from "react";
import { Switch, Route, NavLink } from "react-router-dom";

const Routes = props => {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/blog">Blog</NavLink>
      <NavLink to="contact">Contact</NavLink>
    </div>
  );
};

export default Routes;
