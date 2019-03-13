import React, { Component } from "react";
import axios from "axios";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Avatar from "@material-ui/core/Avatar";
import Paper from "@material-ui/core/Paper";
import { MyPaper, AuthForm } from "./styling/loginSyling";

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
        {/* <Paper className="paper"> */}
        <MyPaper>
          {/* <Paper className="paper"> */}
          <AuthForm onSubmit={this.submitHandler}>
            <Avatar>
              <i className="material-icons">person_outline</i>
            </Avatar>
            <h2>Sign up</h2>
            <TextField
              required
              // id="standard-name"
              type="text"
              label="name"
              name="name"
              // className={classes.textfield}
              value={this.state.user.name}
              onChange={this.inputHandler}
            />
            <TextField
              required
              // id="standard-name"
              type="text"
              label="username"
              name="username"
              // className={classes.textfield}
              value={this.state.user.username}
              onChange={this.inputHandler}
            />
            <TextField
              required
              // id="standard-name"
              type="password"
              label="password"
              name="password"
              // className={classes.textfield}
              value={this.state.user.password}
              onChange={this.inputHandler}
            />
            <Button type="submit">Sign Up</Button>
          </AuthForm>
        </MyPaper>
        {/* </Paper> */}
        <p>Already a Member?</p>
        <Button component={Link} to="/login">
          sign in
        </Button>
        {this.state.message ? <h4>{this.state.message}</h4> : undefined}
      </div>
    );
  }
}

export default Register;
