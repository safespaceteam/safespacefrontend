export const styles = theme => ({
  paper: {
    padding: theme.spacing.unit * 5,
    display: "flex",
    fontSize: 16,
    lineHeight: 1.5
  },

  editDeleteIcon: {
    border: "1px soild blue",
    display: "flex",
    width: "20%",
    justifyContent: "space-between",
    "&:hover": {
      cursor: "pointer"
    }
  },

  editIcon: {
    "&:hover": {
      color: theme.palette.secondary.main
    }
  },

  sendIcon: {
    "&:hover": {
      color: "#3A54B4"
    }
  },

  deleteIcon: {
    "&:hover": {
      color: "red"
    }
  },

  textfield: {
    width: "100%"
  },

  editForm: {
    width: "100%",
    lineHeight: 1.4
    // margin: "10 0"
  },

  resize: {
    fontSize: 20,
    lineHeight: 1.5
  },

  paperEdit: {
    padding: "10px 10px"
    // margin: "0 0"
  }
});
