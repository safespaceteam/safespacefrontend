import React, { Component } from "react";
import axios from "axios";
import MsgList from "./msgList";
import AddMessage from "./addMsg";

const url = process.env.REACT_APP_DB_URL;

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msgs: [],
      loggedIn: false,
      addNote: false
    };
  }

  newNoteForm = () => {
    this.setState({ addNote: !this.state.addNote });
  };

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
    console.log(this.state);
    return (
      <div>
        {this.state.addNote ? (
          <AddMessage
            msgs={this.state.msgs}
            newNoteForm={this.newNoteForm}
            msgHandler={this.msgHandler}
          />
        ) : (
          <i className="material-icons" onClick={this.newNoteForm}>
            note_add
          </i>
        )}

        <MsgList msgs={this.state.msgs} msgHandler={this.msgHandler} />
      </div>
    );
  }
}

export default Profile;
