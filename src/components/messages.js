import React, { Component } from "react";
import EditMessage from "./editMessage";
import axios from "axios";
import SentModal from "./msgSentModal";
import Paper from "@material-ui/core/Paper";
import withStyles from "@material-ui/core/styles/withStyles";
import { styles } from "./styling/msgStyling";

const url = process.env.REACT_APP_DB_URL;

class Messages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      editMsg: "",
      msgSent: false,
      open: false
    };
  }

  setEditMsg = () => {
    this.setState({ editMsg: this.props.msg.message });
  };

  openEditForm = () => {
    this.setEditMsg();
    this.setState({ edit: !this.state.edit });
  };

  openModal = () => {
    this.setState({ open: !this.state.open });
  };

  closeModal = () => {
    this.setState({ open: false });
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

  sendMsg = event => {
    event.preventDefault();
    const user = localStorage.getItem("userId");
    const findMsgSend = {
      message: this.props.msg.message,
      id: this.props.msg.id
    };

    if (user) {
      axios
        .post(`${url}/send`, findMsgSend)
        .then(res => {
          if (res.status === 200 && res.data) {
            this.openModal();
          } else {
            this.setState({ sentMsg: false });
          }
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      console.log("msg not sent");
    }
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
        <SentModal open={this.state.open} close={this.closeModal} />
        <div className={classes.editDeleteIcon}>
          <div className={classes.editIcon}>
            {!this.state.edit ? (
              <i className="material-icons" onClick={this.openEditForm}>
                edit
              </i>
            ) : (
              <i className="material-icons" onClick={this.saveEdits}>
                check
              </i>
            )}
          </div>
          <div className={classes.deleteIcon}>
            {!this.state.edit ? (
              <i className="material-icons" onClick={this.deleteMsg}>
                delete_outline
              </i>
            ) : (
              <i className="material-icons" onClick={this.openEditForm}>
                close
              </i>
            )}
          </div>
          <div className={classes.sendIcon}>
            <i className="material-icons" onClick={this.sendMsg}>
              send
            </i>
          </div>
        </div>
        <Paper className={this.state.edit ? classes.paperEdit : classes.paper}>
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
