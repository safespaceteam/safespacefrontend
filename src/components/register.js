import React, { Component } from "react";
import axios from "axios";
// import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";

const url = process.env.REACT_APP_DB_URL;

const initalUser = {
  name: "",
  username: "",
  password: ""
};

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: { ...initalUser },
      message: ""
    };
  }

  inputHandler = event => {
    const { name, value } = event.target;
    this.setState({ user: { ...this.state.user, [name]: value } });
  };

  submitHandler = event => {
    event.preventDefault();
    axios
      .post(`${url}/register`, this.state.user)
      .then(res => {
        console.log(res);
        if (res.status === 201 && res.data) {
          // localStorage.setItem("token", res.data);
          this.props.history.push("/");
        } else {
          throw new Error();
        }
      })
      .catch(err => {
        this.setState({
          message: "sign-in failed",
          user: { ...initalUser }
        });
      });
  };

  render() {
    return (
      <div>
        <h1>here</h1>
        <h2>Sign In</h2>
        <form onSubmit={this.submitHandler}>
          <label htmlFor="name">name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={this.state.user.name}
            onChange={this.inputHandler}
          />
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={this.state.user.username}
            onChange={this.inputHandler}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={this.state.user.password}
            onChange={this.inputHandler}
          />
          <button type="submit">Submit</button>
        </form>

        <form>
          <TextField
            // id="standard-name"
            type="text"
            label="name"
            name="name"
            // className={classes.textfield}
            value={this.state.user.name}
            onChange={this.inputHandler}
          />
          <TextField
            // id="standard-name"
            type="text"
            label="username"
            name="username"
            // className={classes.textfield}
            value={this.state.user.username}
            onChange={this.inputHandler}
          />
          <TextField
            // id="standard-name"
            type="password"
            label="password"
            name="password"
            // className={classes.textfield}
            value={this.state.user.password}
            onChange={this.inputHandler}
          />
        </form>
        <h2>Already a Member?</h2>
        {this.state.message ? <h4>{this.state.message}</h4> : undefined}
      </div>
    );
  }
}

export default Register;
