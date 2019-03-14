import React from "react";
import Avatar from "@material-ui/core/Avatar";
import withStyles from "@material-ui/core/styles/withStyles";
import { styles } from "./styling/profileStyling";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

const UserInfo = props => {
  const { classes } = props;
  return (
    <div className={classes.welcomeContainer}>
      <List className={classes.avatar}>
        <ListItem>
          <i className="material-icons">edit</i>
          <ListItemText primary="Edit a message" />
        </ListItem>
        <ListItem>
          <i className="material-icons">delete_outline</i>
          <ListItemText primary="Delete a message" />
        </ListItem>
        <ListItem>
          <i className="material-icons">send</i>
          <ListItemText primary="send a message to your phone!" />
        </ListItem>
        <ListItem>
          <i className="material-icons">send</i>
          <ListItemText primary="send a message to your phone!" />
        </ListItem>
      </List>
      {props.name == null ? (
        <Typography variant="h1" className={classes.welcome}>
          Welcome
        </Typography>
      ) : (
        <Typography variant="h1" className={classes.welcome}>
          {props.name}
        </Typography>
      )}
    </div>
  );
};

export default withStyles(styles)(UserInfo);
