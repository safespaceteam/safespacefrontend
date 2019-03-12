import React, { Component } from "react";
import axios from "axios";
import MsgList from "./msgList";

const url = process.env.REACT_APP_DB_URL;

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msgs: [],
      loggedIn: false
    };
  }

  authenticate = () => {
    const token = localStorage.getItem("token");
    const options = {
      headers: {
        authorization: token
      }
    };

    if (token) {
      axios
        .get(`${url}/messages`, options)
        .then(res => {
          console.log("res", res);
          if (res.status === 200 && res.data) {
            this.setState({ loggedIn: true, msgs: res.data });
          } else {
            throw new Error();
          }
        })
        .catch(err => {
          this.props.history.push("/");
        });
    } else {
      this.props.history.push("/");
    }
  };

  componentDidMount() {
    this.authenticate();
  }

  componentDidUpdate(prevProps) {
    const { pathname } = this.props.location;
    console.log(this.props);
    console.log(prevProps);
    if (pathname === "/profile" && pathname !== prevProps.location.pathname) {
      this.authenticate();
    }
  }

  msgHandler = data => {
    this.componentDidMount();
    // this.setState({ msgs: data });
  };

  render() {
    return (
      <div>
        <MsgList msgs={this.state.msgs} msgHandler={this.msgHandler} />
      </div>
    );
  }
}

export default Profile;
