export const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 5,
    display: "flex",
    justifyContent: "center",
    lineHeight: 1.5
  },

  paper: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    padding: 20
  },

  addNoteIcon: {
    marginBottom: "20px",
    "&:hover": {
      cursor: "pointer"
    }
  }
});
