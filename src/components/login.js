import React, { Component } from "react";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

const url = process.env.REACT_APP_DB_URL;

const initialUser = {
  username: "",
  password: ""
};

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: { ...initialUser },
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
      .post(`${url}/login`, this.state.user)
      .then(res => {
        if (res.status === 201 && res.data) {
          localStorage.setItem("token", res.data);
          this.props.history.push("/jokes");
        } else {
          throw new Error();
        }
      })
      .catch(err => {
        this.setState({
          message: "Sign In failed",
          user: { ...initialUser }
        });
      });
  };

  render() {
    return (
      <div>
        {/* <h2>Sign In</h2> */}
        {/* <form onSubmit={this.submitHandler}>
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
        </form> */}
        <form>
          <Avatar>
            <i className="material-icons">person_outline</i>
          </Avatar>
          <h2>Sign In</h2>
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
        <p>Not a Member?</p>
        <Button component={Link} to="/register">
          Register
        </Button>
        {this.state.message ? <h4>{this.state.message}</h4> : undefined}
      </div>
    );
  }
}

export default Login;
