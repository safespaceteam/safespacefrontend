import React, { Component } from "react";
import axios from "axios";

const url = process.env;

const initalUser = {
  username: "",
  password: ""
};

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: { ...initalUser },
      message: "",
      register: false
    };
  }

  render() {
    return <div>here</div>;
  }
}

export default SignIn;
