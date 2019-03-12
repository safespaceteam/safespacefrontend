import React from "react";
import TextField from "@material-ui/core/TextField";

const EditMessage = props => {
  return (
    <form>
      <TextField
        id="standard-multiline-static"
        name="editMsg"
        type="text"
        multiline
        rows="4"
        value={props.msg.message}
        // className={classes.textField}
        margin="normal"
      />
    </form>
  );
};

export default EditMessage;
