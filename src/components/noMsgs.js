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
        <h2>and instantly put stressful days behind you!</h2>
        <p>
          Throughout the day these messages will be sent to your phone, to lift
          you up.
        </p>
        <p>Whether you're in a meeting or collaborating with co-workers,</p>
        <p>
          these messages will allow you to take a step back to gain some
          perspective.
        </p>
      </Paper>
    </div>
  );
};

export default withStyles(styles)(NoMsgs);
