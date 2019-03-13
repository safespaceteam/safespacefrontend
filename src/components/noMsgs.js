import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import { styles } from "./styling/noMsgsStyling";

const NoMsgs = props => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <div className={classes.addNoteIcon}>
        <i
          className="material-icons"
          style={{ fontSize: 50, color: "#3A54B4" }}
          onClick={props.newNoteForm}
        >
          note_add
        </i>
      </div>
      <h1>Add your first message</h1>
      <h2>and instantly put stressful days behind you</h2>
    </div>
  );
};

export default withStyles(styles)(NoMsgs);
