import React from "react";
import TextField from "@material-ui/core/TextField";
import withStyles from "@material-ui/core/styles/withStyles";
import { styles } from "./styling/profileStyling";
import { Paper } from "@material-ui/core";

const NewMsgForm = props => {
  const { classes } = props;
  return (
    <div className={classes.newMsgcontainer}>
      <div className={classes.editDeleteIcon}>
        <div className={classes.editIcon}>
          <i className="material-icons" onClick={props.addMsg}>
            check
          </i>
        </div>
        <div className={classes.deleteIcon}>
          <i className="material-icons" onClick={props.newNoteForm}>
            close
          </i>
        </div>
      </div>
      <Paper className={classes.paper}>
        <form className={classes.addMsgForm}>
          <TextField
            id="standard-multiline-static"
            name="message"
            placeholder="'Every little thing is gonna to be alright'"
            type="text"
            multiline
            rows="4"
            value={props.message}
            onChange={props.handleInputChange}
            className={classes.newLink}
            InputProps={{
              classes: {
                input: classes.resize
              }
            }}
          />
        </form>
      </Paper>
    </div>
  );
};

export default withStyles(styles)(NewMsgForm);
