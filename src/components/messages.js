import React, { Component } from "react";
import EditMessage from "./editMessage";
import axios from "axios";
import Paper from "@material-ui/core/Paper";
import { styles } from "./styling/msgStyling";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";

const url = process.env.REACT_APP_DB_URL;

class Messages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      editMsg: ""
    };
  }

  setEditMsg = () => {
    this.setState({ editMsg: this.props.msg.message });
  };

  openEditForm = () => {
    this.setEditMsg();
    this.setState({ edit: !this.state.edit });
  };

  deleteMsg = event => {
    event.preventDefault();
    axios
      .delete(`${url}/messages/${this.props.msg.id}`)
      .then(res => {
        this.props.msgHandler();
      })
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
        this.props.msgHandler();
      })
      .catch(err => {
        throw new Error();
      });
    this.openEditForm();
  };

  editMsgHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
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
        <Paper className={classes.paper}>
          {this.state.edit ? (
            <EditMessage
              msg={this.props.msg}
              editMsgHandler={this.editMsgHandler}
              saveEdits={this.saveEdits}
              openEditForm={this.openEditForm}
              editMsg={this.state.editMsg}
            />
          ) : (
            this.props.msg.message
          )}
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(Messages);
