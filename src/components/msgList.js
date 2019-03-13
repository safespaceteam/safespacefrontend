import React from "react";
import Messages from "./messages";
import { styles } from "./styling/profileStyling";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";

const MsgList = props => {
  const { classes } = props;
  return (
    <Grid container spacing={24} className={classes.root}>
      {props.msgs.map(msg => (
        <Grid item lg={4} xs={12} md={6}>
          <Messages
            key={msg.id}
            msg={msg}
            id={msg.id}
            msgHandler={props.msgHandler}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default withStyles(styles)(MsgList);
