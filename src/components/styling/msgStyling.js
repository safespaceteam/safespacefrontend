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
    width: "12%",
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

  deleteIcon: {
    "&:hover": {
      color: "red"
    }
  },

  textfield: {
    border: "1px solid blue",
    width: "100%"
  },

  editForm: {
    border: "1px solid blue",
    width: "100%",
    lineHeight: 1.4,
    margin: "10 0"
  },

  resize: {
    fontSize: 20
  },

  paperEdit: {
    padding: "0 0",
    margin: "0 0"
  }
});
