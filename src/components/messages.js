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

  editMsgHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div>
        {this.state.edit ? (
          <EditMessage msg={this.props.msg} editMsg={this.editMsgHandler} />
        ) : null}
        {this.props.msg.message}
        <i className="material-icons" onClick={this.openEditForm}>
          edit
        </i>
        <i className="material-icons" onClick={this.deleteMsg}>
          close
        </i>
        <i className="material-icons" onClick={this.deleteMsg}>
          delete_outline
        </i>
      </div>
    );
  }
}

export default Messages;
