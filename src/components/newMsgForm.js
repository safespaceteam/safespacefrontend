import React from "react";
import TextField from "@material-ui/core/TextField";

const NewMsgForm = props => {
  return (
    <form>
      <TextField
        id="standard-multiline-static"
        name="message"
        // placeholder={props.msg.message}
        type="text"
        multiline
        rows="4"
        value={props.message}
        onChange={props.handleInputChange}
        margin="normal"
      />
      <i className="material-icons" onClick={props.addMsg}>
        check
      </i>
      <i className="material-icons" onClick={props.newNoteForm}>
        close
      </i>
    </form>
  );
};

export default NewMsgForm;
