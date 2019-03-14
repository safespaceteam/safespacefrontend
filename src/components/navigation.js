import React, { Component } from "react";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import { styles } from "./styling/navigationStyling";
import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  handleMenu = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    console.log("nav", this.state);
    const { classes } = this.props;
    const { open } = this.state;
    return (
      <div className={classes.root}>
        <Typography variant="h1" className={classes.logo}>
          Safespace
        </Typography>
        <Drawer
          classes={{
            paper: classes.drawerPaper
          }}
          open={open}
          className={open ? classes.menu : classes.menuClosed}
          variant="persistent"
          anchor="right"
        >
          <div className={classes.menuHeader}>
            <IconButton onClick={this.handleMenu}>
              <i className="material-icons">close</i>
            </IconButton>
          </div>
          <List className={classes.navLinks}>
            <a href="https://google.com" className={classes.navItem}>
              Home
            </a>
            <a href="google.com" className={classes.navItem}>
              About
            </a>
            <a href="/login" className={classes.navItem}>
              Logout
            </a>
          </List>
        </Drawer>
        <IconButton
          onClick={this.handleMenu}
          className={open ? classes.hidden : classes.menuButton}
        >
          <i className="material-icons mg-100">menu</i>
        </IconButton>
      </div>
    );
  }
}

export default withStyles(styles)(Navigation);
