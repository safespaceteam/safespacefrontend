export const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 5,
    border: "1px solid blue",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    lineHeight: 1.5
  },

  addNoteIcon: {
    marginBottom: "20px",
    "&:hover": {
      cursor: "pointer"
    }
  }
});
