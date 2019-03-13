import React from "react";
import TextField from "@material-ui/core/TextField";
import { styles } from "./styling/msgStyling";

import withStyles from "@material-ui/core/styles/withStyles";

const EditMessage = props => {
  const { classes } = props;
  return (
    <form className={classes.editForm}>
      <TextField
        id="standard-multiline-static"
        name="editMsg"
        placeholder={props.msg.message}
        type="text"
        multiline
        rows="4"
        value={props.editMsg}
        onChange={props.editMsgHandler}
        margin="normal"
        className={classes.textfield}
        InputProps={{
          classes: {
            input: classes.resize
          }
        }}
      />
    </form>
  );
};

export default withStyles(styles)(EditMessage);
