import React, { Component } from "react";
import EditMessage from "./editMessage";
import axios from "axios";

const url = process.env.REACT_APP_DB_URL;

class Messages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      editMsg: ""
    };
  }

  openEditForm = () => {
    this.setState({ edit: !this.state.edit });
  };

  deleteMsg = event => {
    event.preventDefault();
    axios
      .delete(`${url}/messages/${this.props.msg.id}`)
      .then(res => {})
      .catch(err => {
        throw new Error();
      });
  };

  saveEdits = event => {
    event.preventDefault();
    const findMsg = {
      message: this.state.editMsg
    };
    axios
      .put(`${url}/messages/${this.props.msg.id}`, findMsg)
      .then(res => {
        this.props.msgHandler(res.data);
      })
      .catch(err => {
        throw new Error();
      });
  };

  editMsgHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div>
        {this.state.edit ? (
          <EditMessage
            msg={this.props.msg}
            editMsg={this.editMsgHandler}
            saveEdits={this.saveEdits}
            openEditForm={this.openEditForm}
            editMsg={this.state.editMsg}
          />
        ) : (
          this.props.msg.message
        )}
        {!this.state.edit ? (
          <i className="material-icons" onClick={this.openEditForm}>
            edit
          </i>
        ) : null}

        {!this.state.edit ? (
          <i className="material-icons" onClick={this.deleteMsg}>
            delete_outline
          </i>
        ) : null}
      </div>
    );
  }
}

export default Messages;
