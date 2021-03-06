import React, { Component } from "react";
import axios from "axios";
import MsgList from "./msgList";
import AddMessage from "./addMsg";
import NoMsgs from "./noMsgs";
import UserInfo from "./UserInfo";
import withStyles from "@material-ui/core/styles/withStyles";
import { styles } from "./styling/profileStyling";

const url = process.env.REACT_APP_DB_URL;

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msgs: [],
      loggedIn: false,
      addNote: false,
      name: null,
      userId: null
    };
  }

  newNoteForm = () => {
    this.setState({ addNote: !this.state.addNote });
  };

  setName = () => {
    const headerMessage = localStorage.getItem("name");
    const userName = headerMessage.split(" ");
    const capName = userName[1].charAt(0).toUpperCase() + userName[1].slice(1);
    if (!this.state.name) {
      this.setState({ name: userName[0] + " " + capName });
    }
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
          if (res.status === 200 && res.data) {
            this.setState({ loggedIn: true, msgs: res.data });
          } else {
            throw new Error();
          }
        })
        .then(res => {
          this.setName();
        })
        .catch(err => {
          this.props.history.push("/login");
        });
    } else {
      this.props.history.push("/login");
    }
  };

  componentDidMount() {
    this.authenticate();
  }

  componentDidUpdate(prevProps) {
    const { pathname } = this.props.location;
    if (pathname === "/profile" && pathname !== prevProps.location.pathname) {
      this.authenticate();
    }
  }

  msgHandler = data => {
    this.componentDidMount();
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <UserInfo name={this.state.name} />
        {this.state.addNote ? (
          <AddMessage
            msgs={this.state.msgs}
            newNoteForm={this.newNoteForm}
            msgHandler={this.msgHandler}
          />
        ) : (
          <div
            className={
              this.state.msgs.length === 0
                ? classes.hiddenIcon
                : classes.showIcon
            }
          >
            <i
              className="material-icons"
              onClick={this.newNoteForm}
              style={{
                fontSize: 75,
                color: "#3A54B4",
                cursor: "pointer"
              }}
            >
              note_add
            </i>
            <p>add message</p>
          </div>
        )}

        {this.state.msgs.length === 0 ? (
          <NoMsgs newNoteForm={this.newNoteForm} />
        ) : (
          <MsgList msgs={this.state.msgs} msgHandler={this.msgHandler} />
        )}
      </div>
    );
  }
}

export default withStyles(styles)(Profile);
