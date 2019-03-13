export const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 5,
    display: "flex",
    justifyContent: "center",
    lineHeight: 1.5,
    border: "1px solid blue"
  },
  welcomeContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: "30px 10%"
  },

  avatar: {
    fontSize: "100px"
  },

  hiddenIcon: {
    // display: "none",
    textAlign: "center"
  },

  showIcon: {
    textAlign: "center"
  },

  newMsgcontainer: {
    // padding: theme.spacing.unit * 5,
    // display: "flex",
    // justifyContent: "center",
    // lineHeight: 1.5
    width: "auto%"
  },

  paper: {
    width: "100%",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // flexDirection: "column",
    padding: 20
  },

  newLink: {
    border: "1px solid blue",
    // width: "100%",
    lineHeight: 1.5,
    padding: 10
  },

  addMsgForm: {
    width: "auto",
    // display: "flex",
    // flexDirection: "column",
    // alignItems: "center",
    // width: "100%",
    border: "1px solid blue"
  },

  resize: {
    fontSize: 20,
    lineHeight: 1.5
  }
});
