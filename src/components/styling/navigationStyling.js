const menuWidth = 240;

export const styles = theme => ({
  root: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    marginTop: 10,
    paddingRight: 40,
    paddingLeft: 40
  },

  hidden: {
    display: "none"
  },

  menu: {
    flexShrink: 0,
    zIndex: "100"
  },

  drawerPaper: {
    width: menuWidth
  },

  menuClosed: {
    width: 0
  },

  menuHeader: {
    display: "flex",
    alignItems: "center",
    padding: "0 8px",
    justifyContent: "flex-start"
  },

  logo: {
    color: "#FF8B7B"
  },

  navLinks: {
    display: "flex",
    flexDirection: "column",
    paddingRight: 20,
    paddingLeft: 20,
    alignItems: "center"
  },

  navItem: {
    fontSize: 30,
    textDecoration: "none",
    marginBottom: 30,
    color: "#FF8B7B"
  }
});
