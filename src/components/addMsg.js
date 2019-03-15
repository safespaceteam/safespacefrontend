import React, { Component } from 'react';
import axios from 'axios';
import NewMsgForm from './newMsgForm';
import withStyles from '@material-ui/core/styles/withStyles';
import { starterMsg } from './starterData';
import { styles } from './styling/profileStyling';

const url = process.env.REACT_APP_DB_URL;

class AddMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newForm: false,
      message: ''
    };
  }

  //generates messages
  generateMsg = event => {
    const randoNum = Math.floor(Math.random() * 23) + 1;
    this.setState({ message: starterMsg[randoNum] });
  };

  addMsg = event => {
    event.preventDefault();
    const user = this.props.msgs[0]
      ? this.props.msgs[0].userId
      : localStorage.getItem('userId');
    const newMessage = {
      message: this.state.message,
      userId: user
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
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <NewMsgForm
          message={this.state.message}
          handleInputChange={this.handleInputChange}
          addMsg={this.addMsg}
          newNoteForm={this.props.newNoteForm}
          generateMsg={this.generateMsg}
        />
      </div>
    );
  }
}

export default withStyles(styles)(AddMessage);
