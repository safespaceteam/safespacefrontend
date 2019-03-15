import React from "react";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";

const SentModal = props => {
  const { classes, close, ...other } = props;

  return (
    <Dialog {...other} onClick={close}>
      <DialogTitle>Your message has been sent!!!</DialogTitle>
    </Dialog>
  );
};

export default SentModal;
