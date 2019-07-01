import React from "react";
import Messages from "./messages";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import { styles } from "./styling/profileStyling";

const MsgList = props => {
  const { classes } = props;
  return (
    <Grid container spacing={24} className={classes.root}>
      {props.msgs.map(msg => (
        <Grid item lg={4} xs={12} md={6} key={msg.id}>
          <Messages msg={msg} id={msg.id} msgHandler={props.msgHandler} />
        </Grid>
      ))}
    </Grid>
  );
};

export default withStyles(styles)(MsgList);
