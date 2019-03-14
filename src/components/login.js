import React, { Component } from "react";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import withStyles from "@material-ui/core/styles/withStyles";
import { Link } from "react-router-dom";
import { styles } from "./styling/loginStyling";

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
        if (res.status === 200 && res.data) {
          console.log(res.data);
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("name", res.data.message);
          this.props.history.push("/profile");
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
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <i className="material-icons">person_outline</i>
          </Avatar>
          <h2>Sign In</h2>
          <form onSubmit={this.submitHandler} className={classes.signInform}>
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
              // id="standard-name"
              type="password"
              label="password"
              name="password"
              value={this.state.user.password}
              className={classes.textfield}
              onChange={this.inputHandler}
              InputProps={{
                classes: {
                  input: classes.resize
                }
              }}
            />
            <Button type="submit" className={classes.signinBtn}>
              Sign In
            </Button>
          </form>
        </Paper>
        <p>Not a Member?</p>
        <Button component={Link} to="/register" className={classes.toggleBtn}>
          Register
        </Button>
        {this.state.message ? <h4>{this.state.message}</h4> : undefined}
      </div>
    );
  }
}

export default withStyles(styles)(Login);
