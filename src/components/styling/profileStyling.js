export const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 5,
    display: "flex",
    justifyContent: "center",
    lineHeight: 1.5,
    width: "100%"
  },

  welcomeContainer: {
    display: "flex",
    flexDirection: theme.spacing.unit,
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column-reverse",
      alignItems: "center"
    },
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row"
    },
    justifyContent: "space-between",
    margin: "30px 10%"
  },

  hiddenIcon: {
    display: "none",
    textAlign: "center"
  },

  showIcon: {
    textAlign: "center"
  },

  newMsgcontainer: {
    minWidth: "300px",
    width: "600px"
  },

  paper: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 20
  },

  newLink: {
    width: "100%",
    lineHeight: 1.5,
    padding: 10
  },

  addMsgForm: {
    width: "100%"
  },

  resize: {
    fontSize: 20,
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

  generateQuote: {
    textAlign: "end",
    "&:hover": {
      color: "green",
      cursor: "pointer"
    }
  },

  welcome: {
    color: "#FF8B7B"
  }
});
