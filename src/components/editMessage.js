import React from "react";
import TextField from "@material-ui/core/TextField";

const EditMessage = props => {
  return (
    <form>
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
      />
      <i className="material-icons" onClick={props.saveEdits}>
        check
      </i>
      <i className="material-icons" onClick={props.openEditForm}>
        close
      </i>
    </form>
  );
};

export default EditMessage;
