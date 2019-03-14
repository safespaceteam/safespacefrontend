import React from "react";
import Avatar from "@material-ui/core/Avatar";
import withStyles from "@material-ui/core/styles/withStyles";
import { styles } from "./styling/profileStyling";

const UserInfo = props => {
  const { classes } = props;
  return (
    <div className={classes.welcomeContainer}>
      <Avatar className={classes.avatar}>
        <i className="material-icons">person_outline</i>
      </Avatar>
      <div>key</div>
      {props.name == null ? <h1>Welcome</h1> : <h1>{props.name}</h1>}
    </div>
  );
};

export default withStyles(styles)(UserInfo);
