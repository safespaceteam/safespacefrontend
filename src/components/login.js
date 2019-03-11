import React from "react";
import axios from "axios";

const url = process.env;

const initalUser = {
  username: "",
  password: ""
};

class SignIn extends Component {
  constructor(props) {
    this.state = {
      user: { ...initalUser },
      message: ""
    };
  }

  render() {
    return <div>here</div>;
  }
}

export default SignIn;
