import React, { Component } from "react";
import axios from "axios";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Avatar from "@material-ui/core/Avatar";
import Paper from "@material-ui/core/Paper";
import { styles } from "./styling/loginStyling";
import withStyles from "@material-ui/core/styles/withStyles";

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
        if (res.status === 201 && res.data) {
          this.props.history.push("/login");
        } else {
          // throw new Error()
          this.props.history.push("/login");
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
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <i className="material-icons">person_outline</i>
          </Avatar>
          <h2>Sign up</h2>
          <form onSubmit={this.submitHandler} className={classes.signInform}>
            <TextField
              required
              type="text"
              label="name"
              name="name"
              className={classes.textfield}
              value={this.state.user.name}
              onChange={this.inputHandler}
              InputProps={{
                classes: {
                  input: classes.resize
                }
              }}
            />
            <TextField
              required
              type="text"
              label="username"
              name="username"
              className={classes.textfield}
              value={this.state.user.username}
              onChange={this.inputHandler}
              InputProps={{
                classes: {
                  input: classes.resize
                }
              }}
            />
            <TextField
              required
              type="password"
              label="password"
              name="password"
              className={classes.textfield}
              value={this.state.user.password}
              onChange={this.inputHandler}
              InputProps={{
                classes: {
                  input: classes.resize
                }
              }}
            />
            <Button type="submit" className={classes.signinBtn}>
              Sign Up
            </Button>
          </form>
        </Paper>
        <p>Already a Member?</p>
        <Button component={Link} to="/login" className={classes.toggleBtn}>
          sign in
        </Button>
        {this.state.message ? <h4>{this.state.message}</h4> : undefined}
      </div>
    );
  }
}

export default withStyles(styles)(Register);
