import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import { styles } from "./styling/noMsgsStyling";
import { Paper } from "@material-ui/core";

const NoMsgs = props => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <div className={classes.addNoteIcon}>
          <i
            className="material-icons"
            style={{ fontSize: 75, color: "#3A54B4" }}
            onClick={props.newNoteForm}
          >
            note_add
          </i>
        </div>
        <h1>Add a message</h1>
        <h2>and instantly put stressful days behind you</h2>
      </Paper>
    </div>
  );
};

export default withStyles(styles)(NoMsgs);
