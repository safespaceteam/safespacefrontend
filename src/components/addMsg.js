import React, { Component } from "react";
import axios from "axios";
import NewMsgForm from "./newMsgForm";

const url = process.env.REACT_APP_DB_URL;

class AddMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newForm: false,
      message: ""
    };
  }

  addMsg = event => {
    event.preventDefault();
    const newMessage = {
      message: this.state.message,
      userId: this.props.msgs[0].userId
    };

    axios
      .post(`${url}/messages`, newMessage)
      .then(res => {
        this.props.msgHandler();
      })
      .catch(err => {
        throw new Error();
      });

    this.props.newNoteForm();
  };

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div>
        <NewMsgForm
          message={this.state.message}
          handleInputChange={this.handleInputChange}
          addMsg={this.addMsg}
          newNoteForm={this.props.newNoteForm}
        />
      </div>
    );
  }
}

export default AddMessage;
